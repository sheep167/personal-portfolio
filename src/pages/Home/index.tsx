import { Introduction } from "./Sections/Introduction";
import { Experience } from "./Sections/Experience";
import { SkillsPreview } from "./Sections/SkillsPreview";
import { FeaturedProjects } from "./Sections/FeaturedProjects";
import { RecentPosts } from "./Sections/RecentPosts";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      <Introduction />
      <Experience />
      <SkillsPreview />
      <FeaturedProjects />
      <RecentPosts />
    </div>
  );
};
