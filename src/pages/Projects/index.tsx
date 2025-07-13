import { ProjectCard, useProjects } from "@/components/project-card";
import { useTranslation } from "react-i18next";

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl"> {t("My projects")} </h1>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );

  return;
};
