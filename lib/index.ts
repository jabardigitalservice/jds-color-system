import type { Colors, ColorsWithOverride } from './colors.types'
import colors from './colors'

function generateColors(colorsObj: Colors) {
  const result: Partial<ColorsWithOverride> = {}

  for (const key in colorsObj) {
    result[`jds-${key}` as keyof ColorsWithOverride] = colorsObj[key as keyof Colors]
  }

  return result as ColorsWithOverride
}

type Config = {
  override?: boolean
}

export default function (config: Config = { override: false }) {
  if (config.override) return colors

  return generateColors(colors)
}
