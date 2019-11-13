import React from 'react'
import { ModalConfigInterface } from './interfaces/config'
import { setConfigDefaults } from './utils/defaults'
import withData from './components/withData'

type Props = { config: ModalConfigInterface }

class PegasusModal extends React.Component<Props> {
  renderFirstScreen(configWithDefaults: ModalConfigInterface) {
    if (configWithDefaults.screens && configWithDefaults.screens.length) {
      const ScreenWithData = withData(
        configWithDefaults.screens[0],
        configWithDefaults.data
      )
      return <ScreenWithData />
    }

    return null
  }

  render() {
    const { config } = this.props
    const configWithDefaults = setConfigDefaults(config)

    console.log('config', configWithDefaults)

    return (
      <div style={{ color: 'green' }}>
        {this.renderFirstScreen(configWithDefaults)}
      </div>
    )
  }
}

export { PegasusModal, ModalConfigInterface }
