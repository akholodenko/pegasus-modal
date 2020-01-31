import React, { useState } from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig }

const TextInputField: React.FC<Props> = ({ config }) => {
  const [inputValue, setInputValue] = useState(config.value || '')

  const handleChange = (value: string) => {
    setInputValue(value)

    if (config.onChange) {
      config.onChange(value)
    }
  }

  return (
    <span>
      {config.isValid === false && <div>invalid</div>}
      <input
        id={config.id}
        type={config.formType}
        placeholder={config.placeholder}
        className={config.cssClass}
        value={inputValue}
        onChange={event => handleChange(event.target.value)}
      />
    </span>
  )
}

export default TextInputField
