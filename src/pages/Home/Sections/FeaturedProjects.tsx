import { ProjectCard, useProjects } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projectList = useProjects();
  const recentProjects = projectList.slice(0, 2);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold"> {t("Featured Projects")} </h2>
        <Button variant="link" onClick={() => navigate({ to: "/projects" })}>
          {t("View More")}
          <IconArrowRight />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {recentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
