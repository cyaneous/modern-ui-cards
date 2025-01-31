// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // tseslint.configs.stylistic,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-inferrable-types": 0,
    }
  }
);
