import FormComponentConfig from './formComponentConfig';
export default interface FormConfigInterface {
    container: {
        id?: string;
    };
    components: FormComponentConfig[];
    onChange?: Function;
}
