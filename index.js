module.exports = {
  extends: '@antfu',
  rules: {
    'curly': ['error', 'all'],
    'import/order': ['error', { pathGroups: [{ pattern: '@/**', group: 'external' }] }],
    'new-cap': ['error', { newIsCap: false, capIsNew: false, properties: true }],
    // Typescript
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    // Vue
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}

