import React from 'react';
export declare type Props = {
    config: ModalConfig;
};
export interface ModalConfig {
    headerText: string;
    bodyText: string;
}
export declare class PegasusModal extends React.Component<Props> {
    render(): JSX.Element;
}
