import { type OptionsConfig, type TypedFlatConfigItem } from '@antfu/eslint-config'

export const defaults: OptionsConfig & TypedFlatConfigItem = {
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }],
      'ts/no-import-type-side-effects': 'off'
    },
    overridesTypeAware: {
      'ts/strict-boolean-expressions': 'off'
    }
  },
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  },
  javascript: {
    overrides: {
      'symbol-description': 'off'
    }
  },
  vue: {
    overrides: {
      'vue/custom-event-name-casing': ['error', 'kebab-case']
    }
  },
  rules: {
    'import/no-duplicates': ['error', { 'prefer-inline': true, 'considerQueryString': true }],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'node/prefer-global/process': 'off'
  }
}
