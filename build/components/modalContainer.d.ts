import React from 'react';
import { CssClassesInterface } from '../interfaces/cssClasses';
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
    confirmClose?: boolean;
    cssClasses: CssClassesInterface;
};
declare const ModalContainer: React.FC<Props>;
export default ModalContainer;
