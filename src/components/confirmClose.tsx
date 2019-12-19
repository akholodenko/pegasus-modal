import React from 'react'
import { buttonStyle } from './button.css'

type Props = {
  onConfirmClose: Function
  onCancelClose: Function
}

const confirmCloseContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  zIndex: 10001
}

const buttonContainerStyle: React.CSSProperties = {
  transform: 'translate(-50%,-50%)',
  position: 'absolute',
  top: '50%',
  left: '50%'
}

const textLabelStyle: React.CSSProperties = {
  marginBottom: '20px'
}

const ConfirmClose: React.FC<Props> = ({ onConfirmClose, onCancelClose }) => {
  return (
    <div style={confirmCloseContainerStyle}>
      <div style={buttonContainerStyle}>
        <div style={textLabelStyle}>Close modal?</div>
        <button
          style={{ ...buttonStyle, marginRight: '10px' }}
          onClick={() => {
            onConfirmClose()
          }}
        >
          yes
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            onCancelClose()
          }}
        >
          no
        </button>
      </div>
    </div>
  )
}

export default ConfirmClose
