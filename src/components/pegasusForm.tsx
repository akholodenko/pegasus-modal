import React from 'react'
import FormConfigInterface from '../interfaces/formConfig'

type Props = { config: FormConfigInterface }

const PegasusForm: React.FC<Props> = ({ config }) => {
  const { components } = config
  console.log('config.components', components)

  return (
    <div>
      Form component w/config
      {components.map((component, index) => (
        <div key={index}>
          <input
            id={component.id}
            type={component.formType}
            placeholder={component.placeholder}
            className={component.cssClass}
          />
        </div>
      ))}
    </div>
  )
}

export default PegasusForm
