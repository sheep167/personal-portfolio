import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectCardProps } from "@/components/project-card";

import PitchDetectionPreview from "@/assets/projects/pitch-detection/preview.png";
import GeoguessrClonePreview from "@/assets/projects/geoguessr-clone/preview.png";
import MarksixSimulatorPreview from "@/assets/projects/marksix-simulator/preview.png";
import DataSchemaAnalyserPreview from "@/assets/projects/data-schema-analyser/preview.png";

export const useProjects = () => {
  const { t } = useTranslation();

  return useMemo<ProjectCardProps[]>(
    () => [
      {
        thumbnail: DataSchemaAnalyserPreview,
        title: t("Data Schema Analyser"),
        description: t(
          "A developer tool that analyses SQL relationships, visualize changes, and suggests improvements using LLM for consistency and type safety.",
        ),
        tags: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "NestJS",
          "AI",
          "LLM",
        ],
        category: "Full Stack",
      },
      {
        thumbnail: MarksixSimulatorPreview,
        title: t("Mark Six Simulator"),
        description: t(
          "A simulator for Hong Kong's Mark Six lottery. Run draw instantly to explore probability distributions and winning patterns.",
        ),
        tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        category: "Frontend",
        demoLink: "https://marksix-simulator-x4gz.vercel.app/",
      },
      {
        thumbnail: PitchDetectionPreview,
        title: t("Pitch Detection"),
        description: t(
          "A simple tool that detects the pitch of a tone. Requires microphone access. Use it to tune your instrument in real time.",
        ),
        tags: ["React", "Web Audio API", "Tailwind CSS", "shadcn/ui"],
        category: "Frontend",
        demoLink: "https://sheep167.github.io/pitch-detection/",
      },
      {
        thumbnail: GeoguessrClonePreview,
        title: t("GeoGuessr Clone (In Progress)"),
        description: t(
          "Tired of endless rural locations in GeoGuessr? This clone samples Google Maps data and uses image analysis to classify locations as urban, suburban, or rural.",
        ),
        tags: ["Python", "Matplotlib", "MongoDB", "Google Maps API"],
        category: "Full Stack",
      },
      {
        title: t("Hololive Recorder"),
        description: t(
          "A script that automatically records your favourite VTuber streams so you never miss an unarchived stream due to timezone differences while you sleep.",
        ),
        tags: ["Python", "yt-dlp", "ffmpeg", "multiprocessing"],
        category: "Tools",
        link: "https://github.com/sheep167/hololive_recorder",
      },
    ],
    [t],
  );
};
