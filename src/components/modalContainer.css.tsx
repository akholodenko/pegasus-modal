import React from 'react'

export const containerStyle = (isOpen: boolean): React.CSSProperties => {
  return {
    // display: isOpen ? 'block' : 'none',
    display: 'block',
    opacity: isOpen ? 1 : 0,
    position: 'fixed',
    top: isOpen ? 0 : '-150%',
    left: 0,
    backgroundColor: '#eee',
    paddingTop: '50px',
    transition: 'all 0.3s ease'
  }
}

export const containerSizeStyle = (
  isHalfSize: boolean
): React.CSSProperties => {
  return {
    width: isHalfSize ? '50%' : '100%',
    height: isHalfSize ? '50%' : '100%',
    border: isHalfSize ? '1px solid #ccc' : 'none',
    transform: isHalfSize ? 'translate(50%, 15%)' : 'translate(0%, 0%)',
    borderRadius: isHalfSize ? '5px' : '0px'
  }
}

export const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  right: '15px',
  top: '10px',
  fontSize: '30px',
  fontWeight: 100,
  cursor: 'pointer'
}
