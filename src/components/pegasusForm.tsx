import React from 'react'
import FormConfigInterface from '../interfaces/formConfig'
import FormComponentConfig from '../interfaces/formComponentConfig'
import TextInputField from './form/textInputField'
import FormElementType from '../utils/formElementType'

type Props = { config: FormConfigInterface }

const PegasusForm: React.FC<Props> = ({ config }) => {
  const { components } = config
  console.log('config.components', components)

  const renderFormComponents = (
    component: FormComponentConfig,
    index: number
  ) => {
    let element = null
    switch (component.formType) {
      case FormElementType.Text:
        element = <TextInputField config={component} />
        break
      default:
        element = <TextInputField config={component} />
        break
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
