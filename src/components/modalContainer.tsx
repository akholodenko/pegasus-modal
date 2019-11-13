import React from 'react'
// import withData from '../components/withData'

type Props = { screens: any; data?: {}; onClose: Function; isOpen: boolean }

const ModalContainer: React.FC<Props> = ({
  screens,
  data,
  onClose,
  isOpen
}) => {
  const close = () => {
    onClose()
  }

  const renderFirstScreen = () => {
    if (screens && screens.length) {
      const Screen = screens[0]
      return <Screen data={data} />
    }

    return null
  }

  const displayStyle = (isOpen?: boolean) => (isOpen ? 'block' : 'none')

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
    </div>
  )
}

export default ModalContainer
