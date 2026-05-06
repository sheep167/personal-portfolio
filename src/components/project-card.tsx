import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type ProjectCategory = "Frontend" | "Backend" | "Tools" | "Full Stack";

export interface ProjectCardProps {
  thumbnail?: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
  demoLink?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { thumbnail, title, description, tags, link, demoLink } = props;
  const { t } = useTranslation();

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Card className="flex flex-col h-full">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[160px] rounded-lg overflow-hidden bg-muted">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  className="w-full h-full object-cover"
                  alt={title}
                />
              ) : (
                <div className="h-full flex justify-center items-center">
                  <span className="text-sm text-muted-foreground">
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

        <CardContent className="mt-auto">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              {link && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(link, "_blank")}
                >
                  <IconBrandGithub className="w-4 h-4" />
                  {t("Repo")}
                </Button>
              )}
              {demoLink && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(demoLink, "_blank")}
                >
                  <IconExternalLink className="w-4 h-4" />
                  {t("Live Demo")}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
