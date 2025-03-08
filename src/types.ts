import type { antfu } from '@antfu/eslint-config'

export type OptionsConfig = Parameters<typeof antfu>[0]

export type UserConfig = Parameters<typeof antfu>[1]
