import FormElementType from '../utils/formElementType'

interface FormComponentConfig {
  id?: string
  name?: string
  formType: FormElementType
  placeholder?: string
  cssClass?: string
  value?: string
  isValid?: boolean
  index?: number
  onClickEventName?: string
  onChange?: Function
  onClick?: Function
}

export default FormComponentConfig
