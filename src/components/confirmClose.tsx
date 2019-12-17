import React from 'react'

type Props = {
  onConfirmClose: Function
  onCancelClose: Function
}

const ConfirmClose: React.FC<Props> = ({ onConfirmClose, onCancelClose }) => {
  return (
    <div>
      <div
        onClick={() => {
          onConfirmClose()
        }}
      >
        CLOSE!
      </div>
      <div
        onClick={() => {
          onCancelClose()
        }}
      >
        CANCEL!
      </div>
    </div>
  )
}

export default ConfirmClose
