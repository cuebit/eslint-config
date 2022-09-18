module.exports = {
  extends: '@antfu',
  rules: {
    'import/order': ['error', { pathGroups: [{ pattern: '@/**', group: 'external' }] }],
    'new-cap': ['error', { newIsCap: false, capIsNew: false, properties: true }
    ],
    // Typescript
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    // Vue
    'vue/attributes-order': 'off',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/singleline-html-element-content-newline': 'off'
  }
}

