import type { OptionsConfig, UserConfig } from './types'
import { antfu } from '@antfu/eslint-config'
import { defu } from 'defu'
import baseConfigs from './configs'
import defaultOptions from './options'

export async function factory(options: OptionsConfig, ...userConfigs: UserConfig[]) {
  return antfu(
    defu(
      options,
      defaultOptions
    ),
    ...baseConfigs,
    ...userConfigs
  )
}

export async function config(...userConfigs: UserConfig[]) {
  return factory({}, ...userConfigs)
}
