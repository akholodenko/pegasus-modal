import React from 'react';
import { ModalConfigInterface } from './interfaces/config';
declare type Props = {
    config: ModalConfigInterface;
};
declare class PegasusModal extends React.Component<Props> {
    render(): JSX.Element;
}
export { PegasusModal, ModalConfigInterface };
