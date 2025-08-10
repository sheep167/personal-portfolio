import { Button } from "@/components/ui/button";
import { IconFileCv } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import MyCV from "@/assets/home/CV.pdf";

export const ResumeButton = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    saveAs(MyCV, "marc-yiu-cv.pdf");
  };

  return (
    <Button variant="outline" onClick={() => handleDownload()}>
      <IconFileCv />
      {t("Resume")}
    </Button>
  );
};
