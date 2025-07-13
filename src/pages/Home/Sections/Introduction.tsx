import { ResumeButton } from "@/components/resume-button";
import { GithubButton, LinkedInButton } from "@/components/social-media-button";
import Me from "@/assets/home/me.jpg";
import { useTranslation } from "react-i18next";

export const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between md:flex-row-reverse">
      <div>
        <img
          className="min-w-36 w-36 h-36 object-cover rounded-full object-center"
          src={Me}
        />
      </div>
      <div className="flex flex-col gap-6 sm:max-w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl"> {t("Hi, Marc here")} 👨🏻‍💻 </h1>
          <p className="text-md">{t("25yo Fullstack Software Engineer")} </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm italic">
            {t(
              "Turning complex challenges into elegant code, from server to screen."
            )}
          </p>

          <p className="text-sm italic">
            {t(
              "Physics assumes a perfect sphere, but coding lets me sculpt innovative solutions from imperfect demands."
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
