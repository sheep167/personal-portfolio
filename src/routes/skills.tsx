import { SkillsPage } from "@/pages/Skills";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills · Marc Yiu" },
      {
        name: "description",
        content:
          "Interactive skill tree showing Marc Yiu's expertise across TypeScript, React, Node.js, databases, DevOps tools and leadership practices.",
      },
    ],
  }),
  component: SkillsPage,
});
