// eslint.config.mjs

import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  // Base configuration
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        browser: true,
      }
    },
    plugins: {
      prettier: pluginPrettier,
      '@typescript-eslint': tseslint,
      'react': pluginReact,
      'react-hooks': pluginReactHooks
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended' // Ensure this is last
    ],
    rules: {
      // Add any specific ESLint rules here
      // Example: "@typescript-eslint/explicit-module-boundary-types": "off",
      'prettier/prettier': ['error', { singleQuote: true, semi: false }]
    }
  }
];

