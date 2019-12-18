import { CssClassesInterface } from './cssClasses'
export interface ModalConfigInterface {
  isOpen?: boolean
  size?: string
  data?: {}
  screens?: any
  onOpen?: Function
  onClose?: Function
  onNext?: Function
  onPrev?: Function
  footer?: string // inline | sticky | none
  startScreenIndex?: number
  confirmClose?: boolean
  cssClasses: CssClassesInterface
}
