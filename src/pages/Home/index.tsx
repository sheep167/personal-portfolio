import { PageSEO } from "@/components/page-seo";
import { Introduction } from "./Sections/Introduction";
import { Experience } from "./Sections/Experience";
import { SkillsPreview } from "./Sections/SkillsPreview";
import { FeaturedProjects } from "./Sections/FeaturedProjects";
import { RecentPosts } from "./Sections/RecentPosts";

export const HomePage = () => {
  return (
    <>
      <PageSEO
        title="Marc Yiu · Full-Stack Software Engineer"
        description="Personal portfolio of Marc Yiu — a Full-Stack Software Engineer specialising in TypeScript, React, Node.js and cloud infrastructure. Explore projects, skills and experience."
        path="/"
      />
      <div className="flex flex-col gap-16">
        <Introduction />
        <Experience />
        <SkillsPreview />
        <FeaturedProjects />
        <RecentPosts />
      </div>
    </>
  );
};
