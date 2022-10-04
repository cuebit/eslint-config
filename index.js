module.exports = {
  extends: '@antfu',
  rules: {
    'curly': ['error', 'all'],
    'import/order': ['error', {
      alphabetize: { order: 'asc', caseInsensitive: false },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: '@/composables/**',
          group: 'parent',
          position: 'before'
        },
        {
          pattern: '@/components/**',
          group: 'parent',
          position: 'before'
        },
        {
          pattern: '@/**',
          group: 'internal',
          position: 'after'
        }
      ]
    }],
    'new-cap': ['error', { newIsCap: false, capIsNew: false, properties: true }],

    // Typescript
    '@typescript-eslint/comma-dangle': ['error', 'never'],

    // Vue
    'vue/attributes-order': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
