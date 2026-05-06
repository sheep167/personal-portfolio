import { PostsPage } from "@/pages/Posts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  head: () => ({
    meta: [
      { title: "Posts · Marc Yiu" },
      {
        name: "description",
        content:
          "Articles and thoughts on software engineering, TypeScript, React and building products — by Marc Yiu.",
      },
    ],
  }),
  component: PostsPage,
});
