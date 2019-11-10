import React from 'react'
import { ModalConfigInterface } from './interfaces/config'

type Props = { config: ModalConfigInterface }

class PegasusModal extends React.Component<Props> {
  render() {
    const { config } = this.props

    return (
      <div style={{ color: 'green' }}>
        {config.bodyText} - interface export works
        <br />
        isOpen: {config.isOpen ? 'true' : 'false'}
      </div>
    )
  }
}

export { PegasusModal, ModalConfigInterface }
