import React from 'react'

export const containerStyle = (isOpen: boolean): React.CSSProperties => {
  return {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    paddingTop: '50px',
    borderRadius: '5px'
  }
}

export const containerSizeStyle = (
  isHalfSize: boolean
): React.CSSProperties => {
  return {
    width: isHalfSize ? '50%' : '100%',
    height: isHalfSize ? '50%' : '100%',
    border: isHalfSize ? '1px solid #ccc' : 'none',
    transform: isHalfSize ? 'translate(50%, 15%)' : 'translate(0%, 0%)'
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
