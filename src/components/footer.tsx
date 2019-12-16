import React from 'react'

type Props = {
  type: string
  isFirstScreen: boolean
  isLastScreen: boolean
  isHalfSize: boolean
  next: Function
  prev: Function
}

const Footer: React.FC<Props> = ({
  type,
  isFirstScreen,
  isLastScreen,
  isHalfSize,
  next,
  prev
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

  const buttonStyle: React.CSSProperties = {
    width: '100px',
    padding: '10px 20px',
    fontSize: '14px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    fontWeight: 600,
    outline: 'none',
    cursor: 'pointer'
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
        return <div style={stickyFooterStyle}>{footerContent()}</div>
      case 'none':
        return <div />
      case 'inline':
      default:
        return <div>inline footer</div>
    }
  }

  return footerByType(type)
}
export default Footer
