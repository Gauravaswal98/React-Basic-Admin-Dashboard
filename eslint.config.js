import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx"],
    plugins: { react },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
