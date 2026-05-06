import { SkillsPage } from "@/pages/Skills";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});
