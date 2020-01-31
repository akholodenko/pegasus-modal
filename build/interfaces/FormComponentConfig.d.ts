import FormElementType from '../utils/formElementType';
interface FormComponentConfig {
    id?: string;
    name?: string;
    formType: FormElementType;
    placeholder?: string;
    cssClass?: string;
    value?: string;
    onChange?: Function;
    isValid?: boolean;
    index?: number;
}
export default FormComponentConfig;
