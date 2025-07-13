import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useLanguageOptions } from "@/i18n/utils";
import { IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const LocaleButton = () => {
  const languageOptions = useLanguageOptions();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (v: string) => {
    i18n.changeLanguage(v);

    toast.info(t("If the translation looks weird, I blame Grok"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <IconLanguage /> {t("Language")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={i18n.language}
          onValueChange={(v) => handleLanguageChange(v)}
        >
          {languageOptions.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm">{option.label}</span>
                <span className="text-xs text-muted-foreground">
                  {option.description}
                </span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
