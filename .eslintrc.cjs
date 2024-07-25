module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint', 'react', 'react-hooks'],
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
   ],
   settings: {
      react: {
         version: 'detect',
      },
   },
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   rules: {
      // Add any specific ESLint rules you want to enforce
      'react/react-in-jsx-scope': 'off', // React 17+ does not require React to be in scope
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
   },
   ignorePatterns: [
      '.eslintrc.cjs', // Ignore this ESLint configuration file itself
      'node_modules/',
      'dist/',
      'vite.config.ts',
      'tailwind.config.js',
      'postcss.config.js',
   ],
};
