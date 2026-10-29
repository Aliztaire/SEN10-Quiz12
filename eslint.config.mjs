import js from "@eslint/js";
import globals from "globals";

const sharedRules = {
  semi: ["error", "always"],
  quotes: ["error", "double"],
  "no-unused-vars": "error",
  eqeqeq: "error"
};

export default [
  js.configs.recommended,
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        // defined in greeting.js, which loads first
        getTimeGreeting: "readonly",
        getDailyTip: "readonly"
      }
    },
    rules: sharedRules
  },
  {
    files: ["greeting.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        module: "readonly"
      }
    },
    rules: sharedRules
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: sharedRules
  }
];
