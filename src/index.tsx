import React from "react";
import { ModalConfig } from "./interfaces/config";

export type Props = { config: ModalConfig };

export default class PegasusModal extends React.Component<Props> {
  render() {
    const { config } = this.props;

    return <div style={{ color: "red" }}>{config.bodyText}</div>;
  }
}
