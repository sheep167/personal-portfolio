import { ProjectCard } from "@/components/project-card";
import { useProjects } from "@/hooks/use-projects";
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
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          {" "}
          {t("Featured Projects")}{" "}
        </h2>
        <Button variant="link" onClick={() => navigate({ to: "/projects" })}>
          {t("View More")}
          <IconArrowRight />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
