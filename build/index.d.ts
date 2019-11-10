import React from 'react';
import { ModalConfigInterface } from './interfaces/config';
declare type Props = {
    config: ModalConfigInterface;
};
declare class PegasusModal extends React.Component<Props> {
    renderFirstScreen(configWithDefaults: ModalConfigInterface): JSX.Element | null;
    render(): JSX.Element;
}
export { PegasusModal, ModalConfigInterface };
