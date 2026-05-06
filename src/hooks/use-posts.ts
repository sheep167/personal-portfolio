import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface PostCardProps {
  title: string;
  summary: string;
  date: string;
  link: string;
}

export const usePosts = () => {
  const { t } = useTranslation();

  const posts = useMemo<PostCardProps[]>(() => {
    return [
      {
        title: t("Launching my portfolio page"),
        summary: t("Feel free to check my thoughts"),
        date: t("Jul 13, 2025"),
        link: "/posts/first-post",
      },
    ];
  }, [t]);

  return posts;
};
