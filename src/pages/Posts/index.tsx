import { PostCard, usePosts } from "@/components/post-card";
import { useTranslation } from "react-i18next";

export const PostsPage = () => {
  const { t } = useTranslation();
  const posts = usePosts();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl"> {t("Posts")} </h1>

      <div className="border rounded-lg">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};
