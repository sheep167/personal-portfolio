import { useTranslation } from "react-i18next";
import {
  CATEGORY_LABEL_KEYS,
  skillNodesRaw,
  type SkillCategory,
  type SkillNode,
} from "@/pages/Skills/data";

/**
 * Returns skill nodes with `projectKeys` resolved to translated `projects` strings.
 */
export const useSkillNodes = (): SkillNode[] => {
  const { t } = useTranslation();
  return skillNodesRaw.map(({ projectKeys, ...rest }) => ({
    ...rest,
    projects: projectKeys.map((k) => t(k)),
  }));
};

/**
 * Returns a Record<SkillCategory, string> with translated category labels.
 */
export const useCategoryLabels = (): Record<SkillCategory, string> => {
  const { t } = useTranslation();
  return Object.fromEntries(
    Object.entries(CATEGORY_LABEL_KEYS).map(([k, v]) => [k, t(v)])
  ) as Record<SkillCategory, string>;
};
