import { Timeline, TimelineItem } from "./timeline";
import VaradiseIcon from "@/assets/company/varadise.jpeg";
import MeeoppIcon from "@/assets/company/meeopp.jpeg";
import SharpPeakIcon from "@/assets/company/sharp_peak.jpeg";
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
            "Contributed as an early team member to Cosmos, a centralized SaaS management platform. Developed the frontend using React and MobX to support complex application workflows.",
          ),
          t(
            "Took significant ownership of a flexible, customizable form system powering the Digital Works Supervision System (DWSS). Designed and implemented the backend with NestJS and MongoDB to enable dynamic, customer-specific workflows.",
          ),
          t(
            "Revamped the form system powering DWSS, markedly improving its technical flexibility, performance, and long-term maintainability.",
          ),
          t(
            "Implemented an internal design system and component library, enhancing UI consistency and accelerating feature development across the team.",
          ),
          t(
            "Collaborated closely with designers and product managers through iterative feedback to deliver features aligned with design specifications and business objectives.",
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
            "Built and maintained an Ed-Tech web application using React, Express, and MongoDB, handling full-cycle software design, development, and testing.",
          ),
          t(
            "Migrated middleware from Feathers.js to GraphQL, translating existing logic into improved architecture and documentation.",
          ),
          t("Deployed multiple applications with Google Cloud."),
          t("Set up data pipelines using Dagster and Airbyte."),
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
