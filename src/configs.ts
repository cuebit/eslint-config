import type { UserConfig } from './types'

export default <UserConfig[]>[
  {
    name: 'antfu/node/rules',
    rules: {
      'node/prefer-global/process': 'off'
    }
  }
]
