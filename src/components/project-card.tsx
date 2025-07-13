import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import PitchDetectionScreenshot from "@/assets/projects/pitch_detection.png";
import GeoguessrCloneScreenshot from "@/assets/projects/geoguessr_clone.png";
import { useMemo } from "react";
import { Button } from "./ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  thumbnail?: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { thumbnail, title, description, tags, link } = props;
  const { t } = useTranslation();

  return (
    <Card className="flex justify-between h-[420px]">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <div className="w-full h-[150px]">
            {thumbnail ? (
              <img
                src={thumbnail}
                className="rounded-lg w-full h-[150px] object-cover"
              />
            ) : (
              <div className="h-full flex justify-center items-center">
                <span className="text-xl text-neutral-500">
                  {t("Thumbnail not available")}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>

          {link && (
            <div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(link, "_blank")}
              >
                <IconBrandGithub />
                {t("Repo")}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const useProjects = () => {
  const { t } = useTranslation();

  const projectList = useMemo<ProjectCardProps[]>(() => {
    return [
      {
        thumbnail: PitchDetectionScreenshot,
        title: t("Pitch Detection"),
        description: t(
          "A simple tools that detects the pitch of tone. Requires microphone access. This allows you to tune your instrument."
        ),
        tags: ["Web Audio API", "Tailwind CSS", "shadcn"],
      },
      {
        thumbnail: GeoguessrCloneScreenshot,
        title: t("GeoGuessr Clone (In Progress)"),
        description: t(
          "When playing the game, I am tired of it keeps showing places in rural area. I sample data from Google Map and use image analysis to determine the location is urban, sub-urban or rural"
        ),
        tags: ["Python", "Matplotlib", "MongoDB"],
      },
      {
        title: t("Hololive Recorder"),
        description: t(
          "Made before I graduated. A script that helps recording your favourite Vtuber. So that you won't miss an unarchived stream due to timezone while you are asleep"
        ),
        tags: ["yt-dlp", "ffmpeg", "multi process"],
        link: "https://github.com/sheep167/hololive_recorder",
      },
    ];
  }, [t]);

  return projectList;
};
