import { useTranslation } from "react-i18next";
import { Timeline, TimelineItem } from "./timeline";
import CUHKLogo from "@/assets/education/the_chinese_university_of_hong_kong_logo.jpeg";

export const EduExpTimeline = () => {
  const { t } = useTranslation();

  return (
    <Timeline>
      <TimelineItem
        icon={CUHKLogo}
        time={t("Sept 2018 - Jun 2022")}
        title={"The Chinese University of Hong Kong"}
        description={"Bachelor of Science - BS, Physics"}
        bullets={[
          t("Graduated with a Minor in Computer Science"),
          t("Graduated with Second Class Honours Upper Division"),
        ]}
        skills={[t("Analytics"), t("Research"), t("Physics Simulation")]}
      />
    </Timeline>
  );
};
