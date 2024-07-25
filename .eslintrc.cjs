export default {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   ignorePatterns: ['node_modules/', 'dist/', 'env.d.ts'],
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended', // This integrates Prettier with ESLint
      'prettier', // This turns off ESLint rules that conflict with Prettier
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint', 'prettier'],
   rules: {
      'prettier/prettier': 'error', // Display Prettier issues as ESLint errors
      'no-console': [
         'warn',
         {
            allow: ['warn', 'error'],
         },
      ],
      'no-unused-vars': [
         'warn',
         {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
         },
      ],
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
};
