import { ResumeButton } from "@/components/resume-button";
import { GithubButton, LinkedInButton } from "@/components/social-media-button";
import Me from "@/assets/home/me.jpg";
import { useTranslation } from "react-i18next";

export const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row-reverse md:items-center pt-4">
      <div className="shrink-0">
        <img
          className="min-w-36 w-36 h-36 object-cover rounded-full object-center ring-2 ring-border"
          src={Me}
        />
      </div>
      <div className="flex flex-col gap-6 sm:max-w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold tracking-tight">
            {" "}
            {t("Hi, Marc here")} 👨🏻‍💻{" "}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("25yo Fullstack Software Engineer")}{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground italic">
            {t(
              "Turning complex challenges into elegant code, from server to screen.",
            )}
          </p>

          <p className="text-sm text-muted-foreground italic">
            {t(
              "Physics assumes a perfect sphere, but coding lets me sculpt innovative solutions from imperfect demands.",
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <ResumeButton />
          <LinkedInButton />
          <GithubButton />
        </div>
      </div>
    </div>
  );
};
