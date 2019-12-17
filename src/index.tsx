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
    setConfigWithDefaults({
      ...configWithDefaults,
      isOpen: config.isOpen,
      startScreenIndex: config.startScreenIndex
    })

    if (config.isOpen && configWithDefaults.onOpen) {
      configWithDefaults.onOpen(configWithDefaults.data)
    }
  }, [config.isOpen, config.startScreenIndex])

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
      size={configWithDefaults.size}
      footer={configWithDefaults.footer}
      startScreenIndex={configWithDefaults.startScreenIndex}
      confirmClose={configWithDefaults.confirmClose}
    />
  )
}

export { PegasusModal, ModalConfigInterface }
