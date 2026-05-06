import { Badge } from "@/components/ui/badge";
import { CATEGORY_COLOR, type SkillCategory } from "./data";
import { useCategoryLabels } from "@/hooks/use-skill-nodes";

interface Props {
  activeCategory: SkillCategory | null;
  onCategoryClick: (cat: SkillCategory) => void;
}

export const SkillLegend = ({ activeCategory, onCategoryClick }: Props) => {
  const categoryLabels = useCategoryLabels();
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(categoryLabels) as SkillCategory[]).map((cat) => {
        const isActive = activeCategory === cat;
        const color = CATEGORY_COLOR[cat];
        return (
          <Badge
            key={cat}
            variant="outline"
            onClick={() => onCategoryClick(cat)}
            className="gap-1.5 text-xs font-medium cursor-pointer select-none transition-all duration-200"
            style={
              isActive
                ? {
                    backgroundColor: color + "22",
                    borderColor: color,
                    color,
                    boxShadow: `0 0 0 2px ${color}55`,
                  }
                : { opacity: activeCategory ? 0.45 : 1 }
            }
          >
            <span
              className="inline-block w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-200"
              style={{
                backgroundColor: color,
                transform: isActive ? "scale(1.3)" : "scale(1)",
              }}
            />
            {categoryLabels[cat]}
          </Badge>
        );
      })}
    </div>
  );
};
