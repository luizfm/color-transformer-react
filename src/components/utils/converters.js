/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
export const componentToHex = (color) => {
  const hex = color.toString(16)
  return hex.length === '1' ? `0${hex}` : hex
}

export const hexToRgb = (hexColor) =>
  `${hexColor.match(/\w\w/g).map((x) => +`0x${x}`)}`.split(',')

export const rgbToHex = (red, green, blue) =>
  `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`
