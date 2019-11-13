import { ModalConfigInterface } from '../interfaces/config';
export declare const initConfigDefaults: (config: ModalConfigInterface) => {
    isOpen?: boolean | undefined;
    size?: string | undefined;
    data?: {} | undefined;
    screens?: any;
    onClose?: Function | undefined;
};
