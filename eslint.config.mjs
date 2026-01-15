import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "typescript-eslint"; // 1. Import tseslint

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // 2. Add the TypeScript rules here
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      // Turn off the base JS rule to prevent double warnings
      "no-unused-vars": "off", 
      
      // Configure the TS rule to show Yellow Warnings (warn)
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "vars": "all", 
        "args": "after-used", 
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],

      "react-hooks/exhaustive-deps": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;