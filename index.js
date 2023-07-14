module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  rules: {
    'curly': ['error', 'all'],
    'import/order': [
      'error',
      {
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
      }
    ],
    'new-cap': [
      'error',
      {
        newIsCap: false,
        capIsNew: false,
        properties: true
      }
    ],

    // Typescript
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        },
        extendDefaults: true
      }
    ],

    // Vue
    'vue/attributes-order': 'off',
    'vue/comma-dangle': ['error', 'never'],
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
