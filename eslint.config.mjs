import path from "path";
import { fileURLToPath } from "url";
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const common = ({ tsConfigPath }) => ({
  settings: {
    react: {
      version: '18.3'
    }
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: path.resolve(dirName, tsConfigPath),
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin
  },
  rules: {
    ...tsPlugin.configs.recommended.rules,
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs.flat['jsx-runtime'].rules,
    ...reactHooksPlugin.configs.recommended.rules,
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
    ignores: ["packages/ui/dist/"]
  },
  {
    ...common({ tsConfigPath: "packages/widgets/tsconfig.json" }),
    files: ["packages/widgets/src/**/*.@(ts|tsx)"],
  },
];
