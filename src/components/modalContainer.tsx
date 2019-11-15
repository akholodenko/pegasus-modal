import React, { useState } from 'react'
import Footer from './footer'

type Props = {
  screens: any
  data?: {}
  onClose: Function
  onNext: Function
  onPrev: Function
  isOpen: boolean
  footer?: string
  startScreenIndex?: number
}

const ModalContainer: React.FC<Props> = ({
  screens,
  data,
  onClose,
  onNext,
  onPrev,
  isOpen,
  footer,
  startScreenIndex
}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(
    startScreenIndex || 0
  )
  const [inputData, setInputData] = useState(data)
  const close = () => onClose()

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

  const displayStyle = (isOpen?: boolean) => (isOpen ? 'block' : 'none')
  const isFirstScreen = (index: number) => index === 0
  const isLastScreen = (index: number) => index === screens.length - 1

  const next = () => {
    onNext({ fromIndex: currentScreenIndex, toIndex: currentScreenIndex + 1 })
    setCurrentScreenIndex(currentScreenIndex + 1)
  }

  const prev = () => {
    onPrev({ fromIndex: currentScreenIndex, toIndex: currentScreenIndex - 1 })
    setCurrentScreenIndex(currentScreenIndex - 1)
  }

  const updateData = (newData: {}) => {
    setInputData(newData)
  }

  const containerStyle: React.CSSProperties = {
    display: displayStyle(isOpen),
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: '50px'
  }

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    right: '15px',
    top: '10px',
    fontSize: '30px',
    fontWeight: 100,
    cursor: 'pointer'
  }

  return (
    <div style={containerStyle}>
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
          next={next}
          prev={prev}
        />
      }
    </div>
  )
}

export default ModalContainer
