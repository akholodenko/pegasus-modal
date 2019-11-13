import React, { useState, useEffect } from 'react'
import { ModalConfigInterface } from './interfaces/config'
import { initConfigDefaults } from './utils/defaults'
import withData from './components/withData'

type Props = { config: ModalConfigInterface }

const PegasusModal: React.FC<Props> = ({ config }) => {
  const [configWithDefaults, setConfigWithDefaults] = useState(
    initConfigDefaults(config)
  )

  useEffect(() => {
    setConfigWithDefaults({ ...configWithDefaults, isOpen: config.isOpen })
  }, [config.isOpen])

  const renderFirstScreen = (configWithDefaults: ModalConfigInterface) => {
    if (configWithDefaults.screens && configWithDefaults.screens.length) {
      const ScreenWithData = withData(
        configWithDefaults.screens[0],
        configWithDefaults.data
      )
      return <ScreenWithData />
    }

    return null
  }

  const displayStyle = (isOpen?: boolean) => {
    return isOpen ? 'block' : 'none'
  }

  return (
    <div
      style={{
        color: 'green',
        display: displayStyle(configWithDefaults.isOpen)
      }}
    >
      {renderFirstScreen(configWithDefaults)}
    </div>
  )
}

export { PegasusModal, ModalConfigInterface }
