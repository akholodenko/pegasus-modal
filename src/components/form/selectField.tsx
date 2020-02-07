import React, { useState } from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

import { inputStyle } from './field.css'

type Props = { config: FormComponentConfig; onChange: Function }

const SelectField: React.FC<Props> = ({ config, onChange }) => {
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
      <select
        id={config.id}
        name={config.name}
        placeholder={config.placeholder}
        className={config.cssClass}
        value={inputValue}
        onChange={event => handleChange(event.target.value)}
        autoComplete="none"
        style={inputStyle}
      >
        {config.placeholder && <option value="">{config.placeholder}</option>}
        {config.options &&
          config.options.map(
            (
              option: { label: string | number; value: string | number },
              index
            ) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          )}
      </select>
    </span>
  )
}

export default SelectField
