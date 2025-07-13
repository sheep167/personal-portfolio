import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EnglishTranslation from "./locales/en-US/all.json";
import TraditionalChineseTranslation from "./locales/zh-Hant/all.json";
import SimplifiedChineseTranslation from "./locales/zh-Hans/all.json";
import JapaneseTranslation from "./locales/ja-JP/all.json";

import { Locale } from "./constants";

const resources = {
  [Locale.English]: {
    translation: EnglishTranslation,
  },
  [Locale.SimplifiedChinese]: {
    translation: SimplifiedChineseTranslation,
  },
  [Locale.TraditionalChinese]: {
    translation: TraditionalChineseTranslation,
  },
  [Locale.Japanese]: {
    translation: JapaneseTranslation,
  },
};

const i18nInit = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en-US",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
};

export { i18n, i18nInit, Locale };
