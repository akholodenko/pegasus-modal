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
}
