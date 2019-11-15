import React, { useState, useEffect } from 'react'
import { ModalConfigInterface } from './interfaces/config'
import { initConfigDefaults } from './utils/defaults'
import ModalContainer from './components/modalContainer'

type Props = { config: ModalConfigInterface }

const PegasusModal: React.FC<Props> = ({ config }) => {
  const [configWithDefaults, setConfigWithDefaults] = useState(
    initConfigDefaults(config)
  )

  useEffect(() => {
    setConfigWithDefaults({ ...configWithDefaults, isOpen: config.isOpen })

    if (config.isOpen && configWithDefaults.onOpen) {
      console.log('configWithDefaults', configWithDefaults.startScreenIndex)
      configWithDefaults.onOpen(configWithDefaults.data)
    }
  }, [config.isOpen])

  const onClose = (data: {}) => {
    if (typeof configWithDefaults.onClose === 'function') {
      configWithDefaults.onClose(data)
    }
  }

  const onNext = (data: {}) => {
    if (typeof configWithDefaults.onNext === 'function') {
      configWithDefaults.onNext(data)
    }
  }

  const onPrev = (data: {}) => {
    if (typeof configWithDefaults.onPrev === 'function') {
      configWithDefaults.onPrev(data)
    }
  }

  return (
    <ModalContainer
      data={configWithDefaults.data}
      screens={configWithDefaults.screens}
      onClose={onClose}
      onNext={onNext}
      onPrev={onPrev}
      isOpen={!!configWithDefaults.isOpen}
      footer={configWithDefaults.footer}
      startScreenIndex={configWithDefaults.startScreenIndex}
    />
  )
}

export { PegasusModal, ModalConfigInterface }
