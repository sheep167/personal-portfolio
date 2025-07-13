import { GithubButton, LinkedInButton } from "./social-media-button";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="mx-auto max-w-3xl p-8 flex justify-between">
        <span className="font-light text-sm text-muted-foreground">
          {t("Made by {{ me }} @2025", { me: "Marc" })}
        </span>

        <div className="flex gap-2">
          <LinkedInButton />
          <GithubButton />
        </div>
      </div>
    </footer>
  );
};
