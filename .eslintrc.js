module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ['lib/', 'dist/'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    // 任意の eslint ルールを追加できます
  },
}
