import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={() => toggleTheme()}>
      {theme === "dark" && <IconSun className="text-yellow-400" />}
      {theme === "light" && <IconMoonStars className="text-blue-700" />}
    </Button>
  );
};
