import { glob } from "glob";
import path from "path";

const targetPath = path.resolve(process.cwd(), "src");
const outputPath = path.resolve(process.cwd(), "src/i18n/locales");

const pattern = "**/*.{tsx,ts}";
const options = {
  cwd: targetPath,
  ignore: ["**/node_modules/**", "**/dist/**"],
  nodir: true,
};

const files = glob.sync(pattern, options);
const abs = files.map((file) => path.resolve(targetPath, file));

export default {
  indentation: 2,
  locales: ["en-US", "zh-Hans", "zh-Hant", "ja-JP"],
  input: abs,
  output: `${outputPath}/$LOCALE/all.json`,
  keepRemoved: false,
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: false,
  verbose: true,
  defaultValue: (_, __, key) => key,
};
