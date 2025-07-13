import { FirstPost } from "@/pages/Posts/FirstPost";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/first-post")({
  component: FirstPost,
});
