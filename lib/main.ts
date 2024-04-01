import type { Colors, ColorsWithPrefix } from './colors.types'
import colors from './colors'

function generateColors(colorsObj: Colors) {
  const result: Partial<ColorsWithPrefix> = {}

  for (const key in colorsObj) {
    result[`jds-${key}` as keyof ColorsWithPrefix] = colorsObj[key as keyof Colors]
  }

  return result as ColorsWithPrefix
}

type Config = {
  override?: boolean
}

export default function (config: Config = { override: false }) {
  if (config.override) return colors

  return generateColors(colors)
}
