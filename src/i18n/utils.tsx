import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Locale } from "./constants";

export const useLanguageOptions = () => {
  const { t } = useTranslation();

  const languageOptions = useMemo(() => {
    return [
      {
        value: Locale.English,
        label: "English",
        description: t("English"),
      },
      {
        value: Locale.TraditionalChinese,
        label: "繁體中文",
        description: t("Chinese (Traditional)"),
      },
      {
        value: Locale.SimplifiedChinese,
        label: "简体中文",
        description: t("Chinese (Simplified)"),
      },
      {
        value: Locale.Japanese,
        label: "日本語",
        description: t("Japanese"),
      },
    ];
  }, []);

  return languageOptions;
};
