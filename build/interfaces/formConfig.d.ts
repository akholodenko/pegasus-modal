import FormComponentConfig from './formComponentConfig';
export default interface FormConfigInterface {
    components: FormComponentConfig[];
    onChange?: Function;
}
