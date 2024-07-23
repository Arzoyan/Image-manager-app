// module.exports = {
//     root: true,
//     env: { browser: true, es2020: true },
//     extends: [
//       "eslint:recommended",
//       "plugin:@typescript-eslint/recommended",
//       "plugin:react-hooks/recommended",
//       "plugin:react/recommended",
//       "plugin:import/recommended",
//       "plugin:import/typescript",
//     ],
//     parserOptions: {
//       ecmaVersion: 2020,
//       sourceType: "module",
//     },
//     ignorePatterns: ["dist", ".eslintrc.cjs"],
//     parser: "@typescript-eslint/parser",
//     plugins: ["react-refresh", "react", "@typescript-eslint", "import"],
//     rules: {
//       "no-unused-vars": "off", // Turn off the base rule as it can conflict with @typescript-eslint/no-unused-vars
//       "@typescript-eslint/no-unused-vars": ["error"], // Enable TypeScript-specific rule for unused variables
//       "no-unused-vars": ["error"], // Report unused variables
//       "import/named": "error", // Ensure named imports are correctly imported
//       "import/namespace": "error", // Ensure namespace imports are correctly imported
//       "import/default": "error", // Ensure default imports are correctly imported
//       "import/export": "error", // Ensure all imports/exports are properly used
//       "react/react-in-jsx-scope": "off", // No need to import React in the scope for Next.js or React 17+
//       "react/prop-types": "off", // Disable prop-types rule, use TypeScript for type-checking
//       "react/jsx-uses-react": "off", // No longer needed with React 17+
//       "react/jsx-uses-vars": "error", // Prevent unused variables in JSX
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//     },
//     settings: {
//       react: {
//         version: "detect", // Automatically detect the react version
//       },
//     },
//   };
