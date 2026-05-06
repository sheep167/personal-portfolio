import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageSEO } from "@/components/page-seo";
import { ProjectCard, type ProjectCategory } from "@/components/project-card";
import { useProjects } from "@/hooks/use-projects";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Full Stack",
  "Backend",
  "Tools",
];

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const projects = useProjects();
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All",
  );

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageSEO
        title="Projects"
        description="Browse Marc Yiu's software projects — full-stack web apps, mobile apps and open-source tools built with TypeScript, React, Node.js and more."
        path="/projects"
      />
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("My Projects")}</h1>

        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as "All" | ProjectCategory)}
        >
          <TabsList>
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {t(cat)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-2xl font-semibold text-muted-foreground py-20">
              {t("No projects in this category.")}
            </p>
          ) : (
            filtered.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
