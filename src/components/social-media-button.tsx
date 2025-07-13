import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const GithubButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => window.open("https://github.com/sheep167", "_blank")}
    >
      <IconBrandGithub />
    </Button>
  );
};

export const LinkedInButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        window.open("https://www.linkedin.com/in/marc-yiu-718008207/", "_blank")
      }
    >
      <IconBrandLinkedin />
    </Button>
  );
};
