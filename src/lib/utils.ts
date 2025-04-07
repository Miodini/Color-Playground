export const rgbToHex = (r: number, g: number, b: number) =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

export const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16)

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  }
}

export const blendColors = (colors: string[]) => {
  if (colors.length === 0) return "#000000"
  const rgbs = colors.map(color => hexToRgb(color))
  const len = colors.length

  const blendedRgb = rgbs.reduce((acc, rgb) => ({
    r: acc.r + rgb.r,
    g: (acc.g + rgb.g),
    b: (acc.b + rgb.b),
  }))

  return rgbToHex(Math.floor(blendedRgb.r / len), Math.floor(blendedRgb.g / len), Math.floor(blendedRgb.b / len))
}