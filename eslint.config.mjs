import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

// Define the flat config, applying rules only to the src/ directory
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js core web vitals config
  {
    // Use flat config with files matching the `src/` directory
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Target JS, JSX, TS, and TSX files in src/
    rules: {
      semi: ["error", "always"], // Enforce semicolons at the end of statements
      indent: ["error", 2], // Enforce 2 spaces for indentation
      quotes: ["error", "double"], // Enforce double quotes
      "object-curly-spacing": ["error", "always"], // Enforce spaces inside curly braces
      "prettier/prettier": ["error"] // Enable Prettier's rules (from eslint-plugin-prettier)
    }
  },
  {
    // Explicitly ignore the .next/ directory and other unwanted files/folders
    ignores: [".next/", "node_modules/", "*.log", ".vscode/"]
  },
  {
    // Use Prettier's config to turn off conflicting rules
    extends: ["plugin:prettier/recommended"] // This automatically uses `eslint-config-prettier` and `eslint-plugin-prettier`
  }
];

export default eslintConfig;
