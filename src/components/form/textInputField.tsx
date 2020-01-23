import React from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig }

const TextInputField: React.FC<Props> = ({ config }) => {
  console.log(config)

  return (
    <input
      id={config.id}
      type={config.formType}
      placeholder={config.placeholder}
      className={config.cssClass}
    />
  )
}

export default TextInputField
