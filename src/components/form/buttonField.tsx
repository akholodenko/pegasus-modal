import React from 'react'
import FormComponentConfig from '../../interfaces/formComponentConfig'

type Props = { config: FormComponentConfig; formValues: any }

const Button: React.FC<Props> = ({ config, formValues }) => {
  //   const [inputValue, setInputValue] = useState(config.value || '')

  //   const handleChange = (value: string) => {
  //     setInputValue(value)

  //     if (onChange) {
  //       onChange(config.id, value)
  //     }
  //   }

  const handleClick = () => {
    if (config.onClick) {
      config.onClick(formValues)
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
