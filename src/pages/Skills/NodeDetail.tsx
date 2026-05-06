import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { CATEGORY_COLOR, type SkillNode } from "./data";
import { useCategoryLabels } from "@/hooks/use-skill-nodes";

interface Props {
  node: SkillNode | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PROFICIENCY_KEY: Record<number, string> = {
  1: "Beginner",
  2: "Elementary",
  3: "Intermediate",
  4: "Advanced",
  5: "Expert",
};

export const SkillNodeDetail = ({ node, open, onOpenChange }: Props) => {
  const { t } = useTranslation();
  const categoryLabels = useCategoryLabels();
  if (!node) return null;

  const color = CATEGORY_COLOR[node.category];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-80 sm:w-96 p-4">
        <SheetHeader className="gap-3 pb-2">
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full shrink-0"
              style={{ backgroundColor: color }}
            />
            <SheetTitle className="text-2xl">{node.label}</SheetTitle>
          </div>
          <SheetDescription asChild>
            <div className="flex flex-wrap gap-2">
              <Badge style={{ backgroundColor: color, color: "#fff" }}>
                {categoryLabels[node.category]}
              </Badge>
              <Badge variant="secondary">
                {t(PROFICIENCY_KEY[node.proficiency])}
              </Badge>
              <Badge variant="outline">
                {t("{{count}} yrs exp", { count: node.yearsExp })}
              </Badge>
            </div>
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-5">
          {/* Proficiency bar */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">{t("Proficiency")}</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-2 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      i <= node.proficiency ? color : "var(--color-muted)",
                  }}
                />
              ))}
            </div>
          </div>

          <Separator />

          {/* Projects */}
          {node.projects.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">{t("Used in")}</p>
              <div className="flex flex-wrap gap-2">
                {node.projects.map((p) => (
                  <Badge key={p} variant="secondary">
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
