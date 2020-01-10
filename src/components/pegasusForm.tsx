import React from 'react'

type Props = { config: {} }

const PegasusForm: React.FC<Props> = ({ config }) => {
  if (!config) {
    console.log('no config')
  }

  return <div>form component</div>
}

export default PegasusForm
