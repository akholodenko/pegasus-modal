import React from 'react';
declare type Props = {
    type: string;
    isFirstScreen: boolean;
    isLastScreen: boolean;
    isHalfSize: boolean;
    next: Function;
    prev: Function;
    footerStyle?: React.CSSProperties;
};
declare const Footer: React.FC<Props>;
export default Footer;
