import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { BASE_RADIUS, CATEGORY_COLOR, RADIUS_STEP, type SkillCategory, type SkillNode } from "./data";
import { useSkillNodes } from "@/hooks/use-skill-nodes";
import { SkillNodePopover } from "./NodePopover";
import { SkillNodeDetail } from "./NodeDetail";

const SVG_W = 1280;
const SVG_H = 780;

// ── component ────────────────────────────────────────────────────────────────

interface Props {
  activeCategory: SkillCategory | null;
}

export const SkillTree = ({ activeCategory }: Props) => {
  const { t } = useTranslation();
  const skillNodes = useSkillNodes();

  /** Edges: explicit strong technical relationships via each node's connections[] */
  const edges = useMemo(() => {
    const result: [SkillNode, SkillNode][] = [];
    const seen = new Set<string>();
    const nodeById = Object.fromEntries(skillNodes.map((n) => [n.id, n]));
    for (const node of skillNodes) {
      for (const cid of node.connections) {
        const key = [node.id, cid].sort().join("|");
        if (!seen.has(key) && nodeById[cid]) {
          seen.add(key);
          result.push([node, nodeById[cid]]);
        }
      }
    }
    return result;
  }, [skillNodes]);

  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, amount: 0.2 });

  // pan / zoom
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    (e.target as Element).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    setTransform((t) => ({ ...t, x: t.x + dx, y: t.y + dy }));
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform((t) => ({
      ...t,
      scale: Math.min(Math.max(t.scale * delta, 0.4), 3),
    }));
  }, []);

  // detail sheet
  const [selected, setSelected] = useState<SkillNode | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const openDetail = (node: SkillNode) => {
    setSelected(node);
    setSheetOpen(true);
  };

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-xl border bg-muted/30"
        style={{ height: 520 }}
      >
        {/* Skeleton shown before inView */}
        {!inView && (
          <div className="absolute inset-0 flex flex-col gap-4 p-6 pointer-events-none">
            <div className="flex gap-4">
              <Skeleton className="w-14 h-14 rounded-full" />
              <Skeleton className="w-20 h-20 rounded-full self-end" />
              <Skeleton className="w-10 h-10 rounded-full self-center" />
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full self-end" />
            </div>
            <Skeleton className="h-0.5 w-3/4" />
            <div className="flex gap-6">
              <Skeleton className="w-12 h-12 rounded-full self-center" />
              <Skeleton className="w-18 h-18 rounded-full" />
              <Skeleton className="w-10 h-10 rounded-full self-end" />
            </div>
            <Skeleton className="h-0.5 w-1/2 self-end" />
            <div className="flex gap-4 justify-end">
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="w-10 h-10 rounded-full self-center" />
              <Skeleton className="w-14 h-14 rounded-full self-end" />
            </div>
          </div>
        )}
        {/* hint */}
        <p className="absolute top-3 left-4 text-xs text-muted-foreground select-none pointer-events-none z-10">
          {t("Scroll to zoom · Drag to pan · Click a node for details")}
        </p>

        <svg
          ref={svgRef}
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onWheel={onWheel}
          role="application"
          aria-label="Interactive skill tree"
        >
          <g
            transform={`translate(${transform.x} ${transform.y}) scale(${transform.scale})`}
          >
            {/* ── edges: nodes sharing a project/company ─────────── */}
            {edges.map(([a, b], i) => {
              const edgeActive =
                !activeCategory ||
                a.category === activeCategory ||
                b.category === activeCategory;
              return (
                <motion.line
                  key={i}
                  x1={a.x} y1={a.y}
                  x2={b.x} y2={b.y}
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeDasharray="4 6"
                  className="text-muted-foreground"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: edgeActive ? 0.2 : 0.04 } : {}}
                  transition={{ duration: 0.05, delay: inView ? i * 0.02 : 0 }}
                />
              );
            })}

            {/* ── nodes ──────────────────────────────────────────── */}
            {skillNodes.map((node, i) => {
              const r = BASE_RADIUS + (node.proficiency - 1) * RADIUS_STEP;
              const color = CATEGORY_COLOR[node.category];
              const isActive = !activeCategory || node.category === activeCategory;

              return (
                <SkillNodePopover key={node.id} node={node}>
                  <motion.g
                    role="button"
                    aria-label={node.label}
                    tabIndex={0}
                    style={{ cursor: "pointer", outline: "none" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      inView
                        ? { scale: 1, opacity: isActive ? 1 : 0.15 }
                        : {}
                    }
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3 + i * 0.05,
                      opacity: { duration: 0.15, delay: activeCategory ? 0 : 0.3 + i * 0.05 },
                    }}
                    whileHover={{ scale: 1.18 }}
                    onTap={() => openDetail(node)}
                    onKeyDown={(e) => e.key === "Enter" && openDetail(node)}
                  >
                    {/* glow ring */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={r + 8}
                      fill={color}
                      opacity={0}
                      whileHover={{ opacity: 0.25 }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* main circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={r}
                      fill={color}
                      opacity={0.85}
                    />
                    {/* idle pulse */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={r}
                      fill="none"
                      stroke={color}
                      strokeWidth={2}
                      animate={{ r: [r, r + 10, r], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                    {/* label */}
                    <text
                      x={node.x}
                      y={node.y + r + 14}
                      textAnchor="middle"
                      fontSize={11}
                      fontWeight={600}
                      fill="currentColor"
                      className="select-none"
                    >
                      {node.label}
                    </text>
                  </motion.g>
                </SkillNodePopover>
              );
            })}
          </g>
        </svg>
      </div>

      <SkillNodeDetail
        node={selected}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </>
  );
};
