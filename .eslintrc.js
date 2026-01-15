module.export={
    root: true,
    "parser": "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
      "react-hooks"
    ],
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended"
    ],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
  
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
  
      "no-console": "warn",
      "prefer-const": "warn"
    }
  }
  