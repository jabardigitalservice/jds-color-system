import type { Colors, ColorsWithPrefix } from './colors.types'
import colors from './colors'

/**
 * Generate colors from JDS Color System.
 *
 * @param {Colors} colorsObj - color bank object
 * @returns {ColorsWithPrefix}
 */
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

/**
 * Extend or Override Tailwind CSS Colors with JDS Color System.
 * To override Tailwind CSS, pass param `override: true`.
 *
 * @param {Config} config
 * @returns {Colors | ColorsWithPrefix}
 */
export default function (config: Config = { override: false }) {
  if (config.override) return colors

  return generateColors(colors)
}
