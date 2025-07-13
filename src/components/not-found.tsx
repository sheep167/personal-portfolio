import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { IconHome, IconMusic } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const NotFoundComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl"> {t("Not Found")} </h1>
        <h3 className="text-2xl">
          {t("Sorry, the page you are looking for is not available")}
        </h3>
      </div>

      <div className="flex gap-2">
        <Button variant="link" onClick={() => navigate({ to: "/" })}>
          <IconHome />
          {t("Go to home page")}
        </Button>
        <Button
          variant="link"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
          }
        >
          <IconMusic />
          {t("Checkout my favourite song")}
        </Button>
      </div>
    </div>
  );
};
