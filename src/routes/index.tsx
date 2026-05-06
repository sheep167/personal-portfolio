import { HomePage } from "@/pages/Home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marc Yiu · Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Personal portfolio of Marc Yiu — a Full-Stack Software Engineer specialising in TypeScript, React, Node.js and cloud infrastructure.",
      },
    ],
  }),
  component: HomePage,
});
