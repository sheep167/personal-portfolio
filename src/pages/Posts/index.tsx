import { PostCard } from "@/components/post-card";
import { usePosts } from "@/hooks/use-posts";
import { useTranslation } from "react-i18next";
import { PageSEO } from "@/components/page-seo";

export const PostsPage = () => {
  const { t } = useTranslation();
  const posts = usePosts();

  return (
    <>
      <PageSEO
        title="Posts"
        description="Articles and thoughts on software engineering, TypeScript, React and building products — by Marc Yiu."
        path="/posts"
      />
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl"> {t("Posts")} </h1>

        <div className="border rounded-lg">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};
