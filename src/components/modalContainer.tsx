import React, { useState } from 'react'
import Footer from './footer'
import {
  containerStyle,
  containerSizeStyle,
  closeButtonStyle
} from './modalContainer.css'

type Props = {
  screens: any
  data?: {}
  onClose: Function
  onNext: Function
  onPrev: Function
  isOpen: boolean
  footer?: string
  size?: string
  startScreenIndex?: number
}

const CONTAINER_HALF_SIZE = 'half'

const ModalContainer: React.FC<Props> = ({
  screens,
  data,
  onClose,
  onNext,
  onPrev,
  isOpen,
  footer,
  size,
  startScreenIndex
}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(
    startScreenIndex || 0
  )
  const [inputData, setInputData] = useState(data)

  const close = () => onClose({ ...inputData })

  const renderScreen = (Screen: any, index: number) => {
    return (
      <Screen
        data={inputData}
        isFirstScreen={isFirstScreen(index)}
        isLastScreen={isLastScreen(index)}
        isOpen={isOpen}
        next={next}
        prev={prev}
        updateData={updateData}
      />
    )
  }

  const isFirstScreen = (index: number) => index === 0
  const isLastScreen = (index: number) => index === screens.length - 1

  const next = () => {
    onNext({
      ...inputData,
      fromIndex: currentScreenIndex,
      toIndex: currentScreenIndex + 1
    })
    setCurrentScreenIndex(currentScreenIndex + 1)
  }

  const prev = () => {
    onPrev({
      ...inputData,
      fromIndex: currentScreenIndex,
      toIndex: currentScreenIndex - 1
    })
    setCurrentScreenIndex(currentScreenIndex - 1)
  }

  const updateData = (newData: {}) => {
    setInputData(newData)
  }

  const isHalfSize = () => size === CONTAINER_HALF_SIZE

  const currentContainerSizeStyle = containerSizeStyle(isHalfSize())

  return (
    <div style={{ ...containerStyle(isOpen), ...currentContainerSizeStyle }}>
      <div
        onClick={() => {
          close()
        }}
        style={closeButtonStyle}
      >
        &times;
      </div>
      {screens &&
        screens.length &&
        renderScreen(screens[currentScreenIndex], currentScreenIndex)}
      {
        <Footer
          type={footer || 'inline'}
          isFirstScreen={isFirstScreen(currentScreenIndex)}
          isLastScreen={isLastScreen(currentScreenIndex)}
          isHalfSize={isHalfSize()}
          next={next}
          prev={prev}
        />
      }
    </div>
  )
}

export default ModalContainer
