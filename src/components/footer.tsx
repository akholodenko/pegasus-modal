import React from 'react'
import { buttonStyle } from './button.css'

type Props = {
  type: string
  isFirstScreen: boolean
  isLastScreen: boolean
  isHalfSize: boolean
  next: Function
  prev: Function
  footerStyle?: React.CSSProperties
}

const Footer: React.FC<Props> = ({
  type,
  isFirstScreen,
  isLastScreen,
  isHalfSize,
  next,
  prev,
  footerStyle
}) => {
  const stickyFooterStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: isHalfSize ? '0px' : '50px',
    left: '0',
    width: '100%',
    height: '80px',
    borderTop: '1px solid #ccc',
    textAlign: 'center'
  }

  const buttonContainerStyle: React.CSSProperties = {
    display: 'inline-block',
    minWidth: '220px',
    marginTop: '20px'
  }

  const footerContent = () => {
    return (
      <div style={buttonContainerStyle}>
        {!isFirstScreen && (
          <button
            style={{ ...buttonStyle, marginRight: '10px', float: 'left' }}
            onClick={() => prev()}
          >
            prev
          </button>
        )}
        {!isLastScreen && (
          <button
            style={{ ...buttonStyle, float: 'right' }}
            onClick={() => next()}
          >
            next
          </button>
        )}
      </div>
    )
  }

  const footerByType = (type: string) => {
    switch (type) {
      case 'sticky':
        return (
          <div style={{ ...stickyFooterStyle, ...footerStyle }}>
            {footerContent()}
          </div>
        )
      case 'none':
        return <div />
      case 'inline':
      default:
        return <div style={footerStyle}>{footerContent()}</div>
    }
  }

  return footerByType(type)
}
export default Footer
