import React, { useState, useEffect } from 'react'
import FormConfigInterface from '../interfaces/formConfig'
import FormComponentConfig from '../interfaces/formComponentConfig'
import TextInputField from './form/textInputField'
import Textarea from './form/textareaField'
import Button from './form/buttonField'
import FormElementType from '../utils/formElementType'

type Props = { config: FormConfigInterface }

const PegasusForm: React.FC<Props> = ({ config }) => {
  const { container, components, onChange } = config
  const [formValues, setFormValues] = useState({})
  const containerId =
    container && container.id ? container.id : `formContainer${Date.now()}`

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
        break
      case FormElementType.Button:
        element = <Button config={component} formValues={formValues} />
        break
    }

    return <div key={index}>{element}</div>
  }

  return (
    <div id={container.id || containerId}>
      Form component w/config
      {components.map((component, index) =>
        renderFormComponents(component, index)
      )}
    </div>
  )
}

export default PegasusForm
