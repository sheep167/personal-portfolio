import { PostCard, usePosts } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const RecentPosts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const posts = usePosts();
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{t("Posts")}</h2>
        <Button variant="link" onClick={() => navigate({ to: "/posts" })}>
          {t("View More")}
          <IconArrowRight />
        </Button>
      </div>

      <div className="border rounded-lg">
        {recentPosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};
