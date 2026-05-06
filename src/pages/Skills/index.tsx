import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SkillTree } from "./Tree";
import { SkillLegend } from "./Legend";
import { type SkillCategory } from "./data";

export const SkillsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(
    null,
  );

  const handleCategoryClick = (cat: SkillCategory) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{t("Skills")}</h1>
        <p className="text-muted-foreground">
          {t(
            "An interactive map of technologies and skills I have mastered throughout my career. Click any node to explore details.",
          )}
        </p>
      </div>

      <SkillLegend
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <SkillTree activeCategory={activeCategory} />
    </div>
  );
};
