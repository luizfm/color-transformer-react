/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
export const componentToHex = (color) => {
  const hex = Number(color).toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}

export const hexToRgb = (hexColor) => {
  if (!hexColor.match(/\w\w/g)) {
    return [0, 0, 0]
  }
  return `${hexColor.match(/\w\w/g).map((x) => +`0x${x}`)}`.split(',')
}

export const rgbToHex = (red, green, blue) =>
  `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`
