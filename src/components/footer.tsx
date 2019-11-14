import React from 'react'

type Props = {
  type: string
  isFirstScreen: boolean
  isLastScreen: boolean
  onNext: Function
  onPrev: Function
}

const Footer: React.FC<Props> = ({
  type,
  isFirstScreen,
  isLastScreen,
  onNext,
  onPrev
}) => {
  const stickyFooterStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '50px',
    left: '0',
    width: '100%',
    height: '50px',
    borderTop: '1px solid #ccc',
    textAlign: 'center'
  }

  const footerContent = () => {
    return (
      <div>
        {!isFirstScreen && <button onClick={() => onPrev()}>prev</button>}
        {!isLastScreen && <button onClick={() => onNext()}>next</button>}
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
