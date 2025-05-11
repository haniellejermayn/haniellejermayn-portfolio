import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the flat config, applying rules only to the src/ directory
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),  // Extend Next.js core web vitals config
  {
    // Use flat config with files matching the `src/` directory
    files: ["src/**/*.{js,jsx,ts,tsx}"],  // Target JS, JSX, TS, and TSX files in src/
    rules: {
      "semi": ["error", "always"],  // Enforce semicolons at the end of statements
    },
  },
  {
    // Explicitly ignore the .next/ directory and other unwanted files/folders
    ignores: [
      ".next/",
      "node_modules/",
      "*.log",
    ],
  },
];

export default eslintConfig;
