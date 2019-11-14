import React, { useState } from 'react'
import Footer from './footer'

type Props = {
  screens: any
  data?: {}
  onClose: Function
  isOpen: boolean
  footer?: string
  startScreenIndex?: number
}

const ModalContainer: React.FC<Props> = ({
  screens,
  data,
  onClose,
  isOpen,
  footer,
  startScreenIndex
}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(
    startScreenIndex || 0
  )
  const close = () => onClose()

  const renderScreen = (Screen: any, index: number) => {
    return (
      <Screen
        data={data}
        isFirstScreen={isFirstScreen(index)}
        isLastScreen={isLastScreen(index)}
        isOpen={isOpen}
      />
    )
  }

  const displayStyle = (isOpen?: boolean) => (isOpen ? 'block' : 'none')
  const isFirstScreen = (index: number) => index === 0
  const isLastScreen = (index: number) => index === screens.length - 1
  const onNext = () => {
    setCurrentScreenIndex(currentScreenIndex + 1)
  }

  const onPrev = () => {
    setCurrentScreenIndex(currentScreenIndex - 1)
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
          onNext={onNext}
          onPrev={onPrev}
        />
      }
    </div>
  )
}

export default ModalContainer
