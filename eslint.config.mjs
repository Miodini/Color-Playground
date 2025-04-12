import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

export default defineConfig([
  { 
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      quotes: ['error', 'single'],
      "no-duplicate-imports": "error",
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }]
    },
    plugins: {
      '@typescript-eslint': tsPlugin.plugin,
      '@next/next': nextPlugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsPlugin.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }, 
    settings: {
      react: {
        version: 'detect'
      },
      next: {
        rootDir: '.'
      }
    }
  }
]);