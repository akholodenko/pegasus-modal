import { ModalConfigInterface } from '../interfaces/modalConfig';
export declare const initConfigDefaults: (config: ModalConfigInterface) => {
    isOpen?: boolean | undefined;
    size?: string | undefined;
    data?: {} | undefined;
    screens?: any;
    onOpen?: Function | undefined;
    onClose?: Function | undefined;
    onNext?: Function | undefined;
    onPrev?: Function | undefined;
    footer?: string | undefined;
    startScreenIndex?: number | undefined;
    confirmClose?: boolean | undefined;
    cssClasses: import("../interfaces/cssClasses").CssClassesInterface;
};
