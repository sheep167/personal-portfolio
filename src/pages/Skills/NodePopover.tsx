import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { BASE_RADIUS, CATEGORY_COLOR, RADIUS_STEP, type SkillNode } from "./data";

interface Props {
  node: SkillNode;
  children: React.ReactNode;
}

/** SVG arc proficiency ring rendered inside the popover */
const ProficiencyRing = ({ value }: { value: number }) => {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const filled = (value / 5) * circ;

  return (
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r={r} fill="none" stroke="currentColor" strokeWidth="4" className="text-muted" />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray={`${filled} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 26 26)"
        className="text-primary"
      />
      <text x="26" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="currentColor">
        {value}/5
      </text>
    </svg>
  );
};

export const SkillNodePopover = ({ node, children }: Props) => {
  const { t } = useTranslation();
  const radius = BASE_RADIUS + (node.proficiency - 1) * RADIUS_STEP;
  const color = CATEGORY_COLOR[node.category];

  return (
    <HoverCard openDelay={150} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-64 p-4" side="top">
        <div className="flex items-start gap-3">
          {/* colour dot */}
          <div
            className="mt-1 shrink-0 rounded-full"
            style={{ width: radius, height: radius, backgroundColor: color, opacity: 0.9 }}
          />
          <div className="flex flex-col gap-1 min-w-0">
            <p className="font-semibold leading-tight">{node.label}</p>
            <p className="text-xs text-muted-foreground">
              {t("{{count}} yrs experience", { count: node.yearsExp })}
            </p>
          </div>
          <ProficiencyRing value={node.proficiency} />
        </div>

        {node.projects.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {node.projects.map((p) => (
              <Badge key={p} variant="secondary" className="text-xs">
                {p}
              </Badge>
            ))}
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};
