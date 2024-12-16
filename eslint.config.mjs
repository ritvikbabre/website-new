import { defineConfig } from 'eslint';

export default defineConfig({
    extends: [
        'eslint:recommended',
        'next/core-web-vitals'
    ],
    languageOptions: {
        globals: {
            node: 'readonly',
            browser: 'readonly',
            es2021: 'readonly'
        },
        parserOptions: {
            ecmaVersion: 12
        }
    },
    ignorePatterns: [
        'out/**/*',
        '.next/**/*',
        'node_modules/**/*'
    ],
    rules: {
        'no-undef': 'warn',
        '@typescript-eslint/no-unused-expressions': 'off'
    }
});
