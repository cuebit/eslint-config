import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { Awaitable, FlatConfigComposer } from 'eslint-flat-config-utils'
import { antfu } from '@antfu/eslint-config'
import { defu } from 'defu'

const defaultOptions: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {
  typescript: {
    overrides: {
      'ts/method-signature-style': ['error', 'property']
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
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/no-v-text-v-html-on-component': ['error', {
        allow: ['router-link', 'nuxt-link', 'component']
      }]
    }
  }
}

const baseConfigs: TypedFlatConfigItem[] = [{
  name: 'cuebit/defaults/rules',
  rules: {
    'node/prefer-global/process': 'off',
    'perfectionist/sort-imports': ['error', {
      groups: [
        'type',
        ['parent-type', 'sibling-type', 'index-type', 'internal-type'],
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
        'side-effect',
        'object',
        'unknown'
      ],
      newlinesBetween: 'ignore',
      partitionByNewLine: true,
      order: 'asc',
      type: 'natural'
    }]
  }
}]

export function factory(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  return antfu(
    defu(
      options,
      defaultOptions
    ),
    ...baseConfigs,
    ...userConfigs
  )
}

export default factory
