import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { Awaitable, FlatConfigComposer } from 'eslint-flat-config-utils'
import { antfu } from '@antfu/eslint-config'
import { defu } from 'defu'

const defaultOptions: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {
  typescript: {
    overridesTypeAware: {
      'ts/strict-boolean-expressions': 'off',
    },
  },
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'always-multiline'],
    },
  },
  vue: {
    overrides: {
      'vue/no-v-text-v-html-on-component': ['error', {
        allow: ['router-link', 'nuxt-link', 'component'],
      }],
    },
  },
}

const configs: TypedFlatConfigItem[] = [
  {
    name: '@cuebit/defaults/rules',
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
]

export function factory(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  return antfu(
    defu(
      options,
      defaultOptions,
    ),
    ...configs,
    ...userConfigs,
  ).override('antfu/pnpm/pnpm-workspace-yaml', {
    rules: {
      'pnpm/yaml-enforce-settings': ['error', {
        settings: {
          shellEmulator: true,
          trustPolicy: 'off',
        },
      }],
    },
  })
}
