import React from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig; formValues: any }

const Button: React.FC<Props> = ({ config, formValues }) => {
  const handleClick = () => {
    if (config.onClick) {
      config.onClick(formValues)
      //   window.dispatchEvent(new Event('form-button-clicked'))
    }
  }

  return (
    <span>
      <button
        id={config.id}
        name={config.name}
        className={config.cssClass}
        onClick={() => handleClick()}
      >
        {config.value}
      </button>
    </span>
  )
}

export default Button
