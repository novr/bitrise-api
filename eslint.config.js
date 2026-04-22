'use strict'

const js = require('@eslint/js')
const prettierRecommended = require('eslint-plugin-prettier/recommended')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: ['src/lib/**', 'dist/**'],
  },
]
