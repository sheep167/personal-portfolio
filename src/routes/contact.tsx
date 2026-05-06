import { ContactPage } from "@/pages/Contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Marc Yiu" },
      {
        name: "description",
        content: "Get in touch with Marc Yiu — Full-Stack Software Engineer.",
      },
    ],
  }),
  component: ContactPage,
});
