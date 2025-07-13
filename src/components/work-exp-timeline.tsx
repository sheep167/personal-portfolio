import { Timeline, TimelineItem } from "./timeline";
import VaradiseIcon from "@/assets/company/varadise_limited_logo.jpeg";
import MeeoppIcon from "@/assets/company/meeopp_logo.jpeg";
import SharpPeakIcon from "@/assets/company/sharp_peak_consulting_limited_logo.jpeg";
import { useTranslation } from "react-i18next";

export const WorkExpTimeline = () => {
  const { t } = useTranslation();

  return (
    <Timeline>
      <TimelineItem
        icon={VaradiseIcon}
        time="Jan 2024 - Present"
        title="Varadise"
        description="Software Engineer II"
        bullets={[
          t(
            "Built and maintained a Centralized Management Platform from inception using React"
          ),
          t(
            "Developed a cross-system design system for web and native platforms, improving UI consistency and speeding up feature development"
          ),
          t(
            "Worked with designers and product managers to refine features, ensuring full alignment with design specs and business goals"
          ),
          t(
            "Designed a scalable backend service with NestJS, MongoDB, Prisma, and Docker"
          ),
          t("Integrated Camunda to create a robust workflow engine"),
          t(
            "Customized SurveyJS library to deliver dynamic, tailored form functionality for complex business needs"
          ),
        ]}
        skills={[
          "React",
          "React Native",
          "Tailwind CSS",
          "MobX",
          "NestJS",
          "MongoDB",
          "Prisma",
          "Docker",
        ]}
      />

      <TimelineItem
        icon={MeeoppIcon}
        time="Jun 2022 - Aug 2023"
        title="Meeopp"
        description="Software Engineer"
        bullets={[
          t(
            "Built and maintained an Ed-Tech web application using React, Express, and MongoDB"
          ),
          t("Migrated middleware to GraphQL"),
          t("Worked on deployment with Google Cloud"),
          t("Setup data orchestration and pipelines using Dagster and Airbyte"),
        ]}
        skills={[
          "React",
          "Express",
          "MongoDB",
          "GraphQL",
          "Docker",
          "Google Cloud",
        ]}
      />

      <TimelineItem
        icon={SharpPeakIcon}
        time="Jun 2021 - May 2022"
        title="Sharp Peak Consulting Limited"
        description="Software Analyst Intern"
        bullets={[
          t("Created dashboards to visualize workplace IoT data"),
          t("Developed back-end systems using Python and JavaScript"),
          t("Wrote scripts to automate various processes"),
        ]}
        skills={["ThingsBoard", "Python", "Javascript"]}
      />
    </Timeline>
  );
};
