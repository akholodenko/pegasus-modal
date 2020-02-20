import React, { useState } from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig; onChange: Function }

const RadionButtons: React.FC<Props> = ({ config, onChange }) => {
  const [inputValue, setInputValue] = useState(config.value || '')

  const handleChange = (value: string) => {
    setInputValue(value)

    if (onChange) {
      onChange(config.name, value)
    }
  }

  return (
    <span>
      {config.isValid === false && <div>invalid input</div>}
      {config.options &&
        config.options.map(
          (
            option: {
              id: string
              label: string | number
              value: string | number
            },
            index
          ) => (
            <span key={index}>
              <input
                type="radio"
                id={option.id}
                name="gender"
                value={option.value}
                onChange={event => handleChange(event.target.value)}
                checked={inputValue === option.value}
              />
              <label htmlFor={option.id}>{option.label}</label>
              <br />
            </span>
          )
        )}
    </span>
  )
}

export default RadionButtons
