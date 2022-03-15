import React, { useState, useCallback } from 'react'

import StormTrooperIcon from '_assets/icons/stormtrooper-icon.svg'

import './styles/_colors.css'
import './styles/global.css'
import styles from './styles.css'
import Svg from './components/svg'
import Input from './components/input'
import { rgbToHex, hexToRgb } from './components/utils/converters'

const RGB = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
}

const App = () => {
  const [hexColor, setHexColor] = useState('#c52930')
  const [redColor, setRedColor] = useState('')
  const [blueColor, setBlueColor] = useState('')
  const [greenColor, setGreenColor] = useState('')

  const onHexInputChange = useCallback(({ target }) => {
    const { value } = target
    setHexColor(value)

    const [redConverted, greenConverted, blueConverted] = hexToRgb(value)
    setRedColor(redConverted)
    setBlueColor(blueConverted)
    setGreenColor(greenConverted)
  }, [])

  const onRgbChange = useCallback(({ target }) => {
    const { name, value } = target

    if (name === RGB.BLUE) {
      setBlueColor(value)
      const hexadecimal = rgbToHex(redColor, greenColor, value)
      setHexColor(hexadecimal)
      return
    }

    if (name === RGB.RED) {
      setRedColor(value)
      const hexadecimal = rgbToHex(value, greenColor, blueColor)
      setHexColor(hexadecimal)
      return
    }

    setGreenColor(value)
    const hexadecimal = rgbToHex(redColor, value, blueColor)
    setHexColor(hexadecimal)
  }, [])

  return (
    <div className={styles['app-container']}>
      <Svg icon={StormTrooperIcon} style={{ fill: hexColor }} />
      <Input onChange={onHexInputChange} value={hexColor} />
      <Input onChange={onRgbChange} value={redColor} name={RGB.RED} />
      <Input onChange={onRgbChange} value={greenColor} name={RGB.GREEN} />
      <Input onChange={onRgbChange} value={blueColor} name={RGB.BLUE} />
    </div>
  )
}
export default App
