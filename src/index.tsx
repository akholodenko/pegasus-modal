import React from 'react'
// import { ModalConfig } from './interfaces/config'

export type Props = { config: ModalConfig }

export interface ModalConfig {
  headerText: string
  bodyText: string
}

export class PegasusModal extends React.Component<Props> {
  render() {
    const { config } = this.props

    return <div style={{ color: 'green' }}>{config.bodyText}</div>
  }
}
