import { Introduction } from "./Sections/Introduction";
import { Experience } from "./Sections/Experience";
import { FeaturedProjects } from "./Sections/FeaturedProjects";
import { RecentPosts } from "./Sections/RecentPosts";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Introduction />
      <Experience />
      <FeaturedProjects />
      <RecentPosts />
    </div>
  );
};
