import React from 'react';
declare type Props = {
    screens: any;
    data?: {};
    onClose: Function;
    onNext: Function;
    onPrev: Function;
    isOpen: boolean;
    footer?: string;
    size?: string;
    startScreenIndex?: number;
};
declare const ModalContainer: React.FC<Props>;
export default ModalContainer;
