import React, { useState, useEffect } from 'react'
import FormConfigInterface from '../interfaces/formConfig'
import FormComponentConfig from '../interfaces/formComponentConfig'
import TextInputField from './form/textInputField'
import Textarea from './form/textareaField'
import FormElementType from '../utils/formElementType'

type Props = { config: FormConfigInterface }

const PegasusForm: React.FC<Props> = ({ config }) => {
  const { components, onChange } = config
  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    if (onChange) {
      onChange(formValues)
    }
  }, [formValues])

  const handleChange = (index: any, value: any) => {
    setFormValues({ ...formValues, [index]: value })
  }

  const renderFormComponents = (
    component: FormComponentConfig,
    index: number
  ) => {
    let element = null
    switch (component.formType) {
      case FormElementType.Text:
      case FormElementType.Email:
      case FormElementType.Password:
      case FormElementType.Phone:
        element = <TextInputField config={component} onChange={handleChange} />
        break
      case FormElementType.TextArea:
        element = <Textarea config={component} onChange={handleChange} />
    }

    return <div key={index}>{element}</div>
  }

  return (
    <div>
      Form component w/config
      {components.map((component, index) =>
        renderFormComponents(component, index)
      )}
    </div>
  )
}

export default PegasusForm
