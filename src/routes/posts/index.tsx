import { PostsPage } from "@/pages/Posts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: PostsPage,
});
