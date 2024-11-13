import baseConfig, { type Awaitable, type ConfigNames, type OptionsConfig, type TypedFlatConfigItem } from '@antfu/eslint-config'
import { defu } from 'defu'
import { type Linter } from 'eslint'
import { type FlatConfigComposer } from 'eslint-flat-config-utils'
import { defaults } from './defaults'

async function config(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): Promise<FlatConfigComposer<TypedFlatConfigItem, ConfigNames>> {
  return baseConfig(
    defu(options, defaults),
    ...userConfigs
  )
}

export default config
