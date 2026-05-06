import { useNavigate } from "@tanstack/react-router";
import { type PostCardProps } from "@/hooks/use-posts";

export const PostCard = (props: PostCardProps) => {
  const { title, summary, date, link } = props;
  const navigate = useNavigate();

  return (
    <div className="p-5 not-last:border-b">
      <div
        className="grid grid-cols-12 items-center hover:cursor-pointer"
        onClick={() => navigate({ to: link })}
      >
        <div className="col-span-10 flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-muted-foreground">{summary}</span>
        </div>

        <div className="col-span-2 text-right">
          <span className="text-sm"> {date} </span>
        </div>
      </div>
    </div>
  );
};
