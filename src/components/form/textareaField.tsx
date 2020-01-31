import React, { useState } from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig; onChange: Function }

const TextareaField: React.FC<Props> = ({ config, onChange }) => {
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
      <textarea
        id={config.id}
        name={config.name}
        className={config.cssClass}
        placeholder={config.placeholder}
        autoComplete="none"
        onChange={event => handleChange(event.target.value)}
        value={inputValue}
      ></textarea>
    </span>
  )
}

export default TextareaField
