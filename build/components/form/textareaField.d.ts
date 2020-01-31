import React from 'react';
import FormComponentConfig from '../../interfaces/formComponentConfig';
declare type Props = {
    config: FormComponentConfig;
    onChange: Function;
};
declare const TextareaField: React.FC<Props>;
export default TextareaField;
