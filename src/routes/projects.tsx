import { ProjectsPage } from "@/pages/Projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects · Marc Yiu" },
      {
        name: "description",
        content:
          "Browse Marc Yiu's software projects — full-stack web apps, mobile apps and open-source tools built with TypeScript, React, Node.js and more.",
      },
    ],
  }),
  component: ProjectsPage,
});
