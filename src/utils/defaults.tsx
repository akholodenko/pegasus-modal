import { ModalConfigInterface } from '../interfaces/config'

export const initConfigDefaults = (config: ModalConfigInterface) => {
  let result = { ...config }

  result.isOpen = result.isOpen === undefined ? false : result.isOpen
  result.size = result.size === undefined ? 'full' : result.size
  result.data = result.data === undefined ? {} : result.data
  result.screens = result.screens === undefined ? [] : result.screens
  result.onOpen = result.onOpen === undefined ? () => {} : result.onOpen
  result.onNext = result.onNext === undefined ? () => {} : result.onNext
  result.footer = result.footer === undefined ? 'inline' : result.footer
  result.startScreenIndex =
    result.startScreenIndex === undefined ? 0 : result.startScreenIndex

  return result
}
