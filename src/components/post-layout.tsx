import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";
import Markdown from "react-markdown";
import supersub from "remark-supersub";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";

export const PostLayout = ({ markdown }: { markdown: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Button variant="link" onClick={() => navigate({ to: "/posts" })}>
          <IconArrowLeft />
          {t("back to post")}
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Markdown
          remarkPlugins={[supersub, [remarkGfm, { singleTilde: false }]]}
          components={{
            h1: ({ children }) => {
              return <h1 className="pb-4 text-3xl font-bold">{children}</h1>;
            },
            h2: ({ children }) => {
              return (
                <h2 className="pb-2 text-2xl font-semibold">{children}</h2>
              );
            },
            h3: ({ children }) => {
              return <h3 className="pb-4 text-xl font-medium">{children}</h3>;
            },
            p: ({ children }) => {
              return <p className="text-md text-neutral-300">{children}</p>;
            },
            sub: ({ children }) => {
              return <sub className="text-muted-foreground">{children}</sub>;
            },
            ul: ({ children }) => {
              return (
                <ul className="list-disc list-outside ml-4">{children}</ul>
              );
            },
            li: ({ children }) => {
              return <li className="list-outside">{children}</li>;
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};
