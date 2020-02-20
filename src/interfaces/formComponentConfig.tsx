import FormElementType from '../utils/formElementType'

interface FormComponentConfig {
  id?: string
  name?: string
  formType: FormElementType
  placeholder?: string
  cssClass?: string
  value?: any | boolean | undefined
  label?: string
  isValid?: boolean
  index?: number
  options?: { value: string | number; label: string | number }[] | undefined
  onChange?: Function
  onClick?: Function
}

export default FormComponentConfig
