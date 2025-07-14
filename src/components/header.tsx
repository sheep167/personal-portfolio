import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { ThemeButton } from "./theme-button";
import { LocaleButton } from "./locale-button";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { IconSettings } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";

export const Header = () => {
  const { t } = useTranslation();

  const pages = [
    {
      label: t("Home"),
      to: "/",
    },
    {
      label: t("Projects"),
      to: "/projects",
    },
    {
      label: t("Posts"),
      to: "/posts",
    },
    {
      label: t("Contact"),
      to: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-10 bg-background/75 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-8 py-6 flex flex-row justify-between">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {pages.map((page) => {
              return (
                <NavigationMenuItem key={page.to}>
                  <Link
                    className="text-gray-500 hover:text-gray-200"
                    to={page.to}
                  >
                    {page.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="gap-1 hidden sm:flex">
          <ThemeButton />
          <LocaleButton />
        </div>

        <Popover>
          <PopoverTrigger className="block sm:hidden">
            <Button size="icon" variant="outline">
              <IconSettings />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40 block sm:hidden">
            <div className="flex justify-between gap-2">
              <Label>{t("Theme")}</Label> <ThemeButton />
            </div>
            <div className="flex justify-between gap-2">
              <Label>{t("Translations")}</Label> <LocaleButton iconOnly />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
