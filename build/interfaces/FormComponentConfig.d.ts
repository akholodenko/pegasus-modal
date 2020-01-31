import FormElementType from '../utils/formElementType';
interface FormComponentConfig {
    id?: string;
    formType: FormElementType;
    placeholder?: string;
    cssClass?: string;
    value?: string;
    onChange?: Function;
    isValid?: boolean;
}
export default FormComponentConfig;
