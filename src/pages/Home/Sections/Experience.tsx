import { EduExpTimeline } from "@/components/edu-exp-timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExpTimeline } from "@/components/work-exp-timeline";
import { useTranslation } from "react-i18next";

export enum ExperienceType {
  work = "Work",
  education = "Education",
}

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <Tabs defaultValue={ExperienceType.work}>
      <TabsList className="w-full flex justify-center">
        <TabsTrigger value={ExperienceType.work}> {t("Work")} </TabsTrigger>
        <TabsTrigger value={ExperienceType.education}>
          {t("Education")}
        </TabsTrigger>
      </TabsList>

      <TabsContent value={ExperienceType.work}>
        <Card className="py-2">
          <CardContent className="px-0">
            <WorkExpTimeline />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value={ExperienceType.education}>
        <Card className="py-2">
          <CardContent className="px-0">
            <EduExpTimeline />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
