import type { OptionsConfig } from './types'

export default <OptionsConfig>{
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/method-signature-style': ['error', 'method']
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
  }
}
