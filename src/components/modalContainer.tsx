import React from 'react'
// import withData from '../components/withData'

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
  const close = () => onClose()

  const renderFirstScreen = () =>
    screens && screens.length
      ? renderScreen(screens[startScreenIndex || 0], startScreenIndex || 0)
      : null

  const renderScreen = (Screen: any, index: number) => {
    if (Screen) {
      return (
        <Screen
          data={data}
          isFirstScreen={isFirstScreen(index)}
          isLastScreen={isLastScreen(index)}
          isOpen={isOpen}
        />
      )
    }

    return null
  }

  const renderFooter = () => {
    switch (footer) {
      case 'sticky':
        return <div>sticky footer</div>
      case 'none':
        return <div>no footer</div>
      case 'inline':
      default:
        return <div>inline footer</div>
    }
  }

  const displayStyle = (isOpen?: boolean) => (isOpen ? 'block' : 'none')
  const isFirstScreen = (index: number) => index === 0
  const isLastScreen = (index: number) => index === screens.length - 1

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
      {renderFirstScreen()}
      {renderFooter()}
    </div>
  )
}

export default ModalContainer
