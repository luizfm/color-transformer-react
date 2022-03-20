/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React, { useState, useCallback, useEffect } from 'react'
import { animated, useTransition } from 'react-spring'

import StormTrooperIcon from '_assets/icons/stormtrooper-icon.svg'
import StormTrooperImage from '_assets/images/content-background.jpeg'
import DarthVaderImage from '_assets/images/darth-vader-background.jpeg'
import YodaImage from '_assets/images/yoda-background.jpeg'

import './styles/_colors.css'
import './styles/global.css'

import styles from './styles.css'
import Svg from './components/svg'
import Input from './components/input'
import { rgbToHex, hexToRgb } from './components/utils/converters'

const COLOR_TRANSFORMERS = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
  HEX: 'hex'
}

const App = () => {
  console.log('aqui')
  const [hexColor, setHexColor] = useState('#c9c9c9')
  const [redColor, setRedColor] = useState('')
  const [blueColor, setBlueColor] = useState('')
  const [greenColor, setGreenColor] = useState('')

  const [show, setShow] = useState(false)
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 1000 },
  })

  const onHexInputChange = useCallback(({ target }) => {
    const { value } = target
    setHexColor(value)

    const [redConverted, greenConverted, blueConverted] = hexToRgb(value)
    setRedColor(redConverted || '')
    setGreenColor(greenConverted || '')
    setBlueColor(blueConverted || '')
  }, [])

  const onRgbChange = useCallback(
    ({ target }) => {
      const { name, value } = target

      if (value > 255 || value < 0) {
        return
      }

      if (name === COLOR_TRANSFORMERS.BLUE) {
        setBlueColor(value)
        const hexadecimal = rgbToHex(redColor, greenColor, value)
        setHexColor(hexadecimal)
        return
      }

      if (name === COLOR_TRANSFORMERS.RED) {
        setRedColor(value)
        const hexadecimal = rgbToHex(value, greenColor, blueColor)
        setHexColor(hexadecimal)
        return
      }

      setGreenColor(value)
      const hexadecimal = rgbToHex(redColor, value, blueColor)
      setHexColor(hexadecimal)
    },
    [redColor, blueColor, greenColor]
  )

  const handleImage = useCallback(() => {
    if (hexColor.toUpperCase() === '#2CA98E') {
      setShow(YodaImage)
      return
    }
    if (hexColor === '#000000') {
      setShow(DarthVaderImage)
      return
    }

    setShow(StormTrooperImage)
  }, [hexColor])

  useEffect(() => {
    handleImage()
  }, [handleImage])

  return (
    <section className={styles['app-container']}>
      <div className={styles.content}>
        <h1 className={styles.title}>Start wars color converter</h1>
        <Svg icon={StormTrooperIcon} style={{ fill: hexColor }} />
        <div className={styles['inputs-container']}>
          <Input
            label="Hexadecimal"
            id={COLOR_TRANSFORMERS.HEX}
            name={COLOR_TRANSFORMERS.HEX}
            onChange={onHexInputChange}
            value={hexColor}
            placeholder="Hex color"
          />
          <Input
            type="number"
            onChange={onRgbChange}
            value={redColor}
            label="Red"
            name={COLOR_TRANSFORMERS.RED}
            id={COLOR_TRANSFORMERS.RED}
            placeholder="Red color"
          />
          <Input
            type="number"
            onChange={onRgbChange}
            value={greenColor}
            label="Green"
            name={COLOR_TRANSFORMERS.GREEN}
            id={COLOR_TRANSFORMERS.GREEN}
            placeholder="Green color"
          />
          <Input
            type="number"
            onChange={onRgbChange}
            value={blueColor}
            label="Blue"
            name={COLOR_TRANSFORMERS.BLUE}
            id={COLOR_TRANSFORMERS.BLUE}
            placeholder="Blue color"
          />
        </div>
      </div>
      {transitions(
        (animatedStyles, item) => (
          <animated.div style={animatedStyles} className={styles['image-wrapper']}>
            <img
              src={item || ''}
              alt="A Start wars character"
              className={styles.image}
            />
          </animated.div>
        )
      )}
    </section>
  )
}
export default App
