import { PostLayout } from "@/components/post-layout";
import { useTranslation } from "react-i18next";

export const FirstPost = () => {
  const { t } = useTranslation();

  const markdown = t(`
~Jul 13, 2025~
# Launching my portfolio

Hello all, this marks the launch of my portfolio page. The reason of building this site is to let you guys to know me better with my skills and projects. Most importantly, is to allow me to gain exposure to **Career Oppotunities**.

## What I have used
- shadcn
- tailwind
- tanstack router

## What I have learnt

- Productivity is directly proportional to motivation
- Using the right tool can speed everything up, so I am using shadcn and tailwind to help me get things done quickly. This post is also created with markdown then translates to html using packages
- Work experience surely allows me to code with better practise and allows me to know more tools
`);

  return <PostLayout markdown={markdown} />;
};
