import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SkillLegend } from "@/pages/Skills/Legend";
import { SkillTree } from "@/pages/Skills/Tree";

export const SkillsPreview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("Skills")}</h2>
        <Button variant="link" onClick={() => navigate({ to: "/skills" })}>
          {t("Explore")}
          <IconArrowRight />
        </Button>
      </div>

      <SkillLegend />
      <SkillTree />
    </div>
  );
};
