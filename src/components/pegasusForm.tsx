import React from 'react'

type Props = { config: {} }

const PegasusForm: React.FC<Props> = ({ config }) => {
  console.log('config', config)

  return <div>Form component w/config</div>
}

export default PegasusForm
