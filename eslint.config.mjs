import path from "path";
import { fileURLToPath } from "url";
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const common = ({ tsConfigPath }) => ({
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: path.resolve(dirName, tsConfigPath),
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin
  },
  rules: {
    ...tsPlugin.configs.recommended.rules,
    semi: ["error", "always"],
  },
});

export default [
  {
    ...common({ tsConfigPath: "apps/docs/tsconfig.json" }),
    files: ["apps/docs/src/**/*.@(ts|tsx)"],
  },
  {
    ...common({ tsConfigPath: "apps/web/tsconfig.json" }),
    files: ["apps/web/src/**/*.@(ts|tsx)"],
  },
  {
    ...common({ tsConfigPath: "packages/ui/tsconfig.json" }),
    files: ["packages/ui/**/*.@(ts|tsx)"],
  },
];
