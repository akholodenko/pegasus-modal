import React, { useState } from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig; onChange: Function }

const CheckboxField: React.FC<Props> = ({ config, onChange }) => {
  const [inputValue, setInputValue] = useState(config.value || false)

  const handleChange = (checkbox: any) => {
    setInputValue(checkbox.checked)

    if (onChange) {
      onChange(config.id, checkbox.checked)
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
        onChange={event => handleChange(event.target)}
        checked={!!inputValue}
      />
      <label htmlFor={config.id}>{config.label}</label>
    </span>
  )
}

export default CheckboxField
