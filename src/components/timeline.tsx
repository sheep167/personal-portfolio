import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Badge } from "./ui/badge";

export const Timeline = ({ children }: { children: ReactNode }) => {
  return <ul className="ml-10 border-l">{children}</ul>;
};

interface TimelineItemProps {
  icon: string;
  time: string;
  title: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { icon, time, title, description, bullets, skills = [] } = props;
  return (
    <li className="relative ml-10 py-4">
      <img
        className="absolute -left-16 top-4 size-12 rounded-full"
        src={icon}
        alt={title}
      />
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-muted-foreground"> {time} </span>
        <span className="text-md font-medium">{title}</span>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>

      <div className="mt-2 mb-4">
        <ul className="list-disc list-outside ml-4">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className={cn("text-sm pr-8", {
                "pb-1.5": index !== bullets.length - 1,
              })}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="rounded-lg border-neutral-500"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </li>
  );
};
