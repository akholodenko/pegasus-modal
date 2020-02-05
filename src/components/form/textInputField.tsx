import React, { useState } from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

import { inputStyle } from './field.css'

type Props = { config: FormComponentConfig; onChange: Function }

const TextInputField: React.FC<Props> = ({ config, onChange }) => {
  const [inputValue, setInputValue] = useState(config.value || '')

  const handleChange = (value: string) => {
    setInputValue(value)

    if (onChange) {
      onChange(config.id, value)
    }
  }

  return (
    <span>
      {config.isValid === false && <div>invalid input</div>}
      <input
        id={config.id}
        name={config.name}
        type={config.formType}
        placeholder={config.placeholder}
        className={config.cssClass}
        value={inputValue}
        onChange={event => handleChange(event.target.value)}
        autoComplete="none"
        style={inputStyle}
      />
    </span>
  )
}

export default TextInputField
