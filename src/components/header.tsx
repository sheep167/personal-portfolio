import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { ThemeButton } from "./theme-button";
import { LocaleButton } from "./locale-button";
import { useTranslation } from "react-i18next";

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
          <NavigationMenuList className="gap-8">
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

        <div className="flex gap-1">
          <ThemeButton />
          <LocaleButton />
        </div>
      </div>
    </header>
  );
};
