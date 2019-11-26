# pegasus-modal

Versatile modal component.

**Github:** [https://github.com/akholodenko/pegasus-modal](https://github.com/akholodenko/pegasus-modal)

## Usage

**Install:** `npm i pegasus-modal`

**Import:** `import { PegasusModal } from 'pegasus-modal'`

**Configuration**

```
{
    isOpen: true, // boolean; control whether the modal is open or closed

    screens: [DemoFirstComponent, DemoSecondComponent, DemoThirdComponent], // array; components to be connected into flow via prev/next buttons

    data: { ... }, // object; injected as prop to all components in screens array

    onOpen: (data: {}) => {}, // function; callback when modal is opened

    onClose: (data: {}) => {}, // function; callback when modal is closed

    onNext: (data: {}) => {}, // function; callback when modal navigates to next component in screen array

    onPrev: (data: {}) => {}, // function; callback when modal navigates to previous component in screen array

    size: 'half', // string; 'half' or 'full' supported for modal size

    footer: 'sticky', // string; 'sticky', 'none', 'inline' (default) for modal footer display (with prev/next buttons)

    startScreenIndex: 1 // integer; index of initially loaded component from screen array
}
```

## Example

**App:** [https://github.com/akholodenko/pegasus-modal-example/blob/master/src/App.tsx](https://github.com/akholodenko/pegasus-modal-example/blob/master/src/App.tsx)

**App Code:**

```
import React, { useState } from 'react'
import './App.css'

import { PegasusModal, ModalConfigInterface } from 'pegasus-modal'
import DemoFirstComponent from './components/demoFirstComponent'
import DemoSecondComponent from './components/demoSecondComponent'
import DemoThirdComponent from './components/demoThirdComponent'
import { UserCardProps } from './interfaces/userCard'

function App() {
  const inputs: UserCardProps = {
    name: 'Artem K.',
    email: 'something@gmail.com',
    location: 'San Francisco, CA'
  }

  const [config, setConfig] = useState<ModalConfigInterface>({
    isOpen: true,
    screens: [DemoFirstComponent, DemoSecondComponent, DemoThirdComponent],
    data: {
      userInfo: inputs,
      currentDate: new Date().toDateString()
    },
    onOpen: (data: {}) => {
      console.log('modal opened', data)
    },
    onClose: (data: {}) => {
      console.log('modal closed', data)
      toggleModal()
    },
    onNext: (data: {}) => {
      console.log('go next', data)
    },
    onPrev: (data: {}) => {
      console.log('go prev')
    },
    size: 'half',
    footer: 'sticky',
    startScreenIndex: 1
  })

  const toggleModal = () => {
    setConfig({ ...config, isOpen: !!!config.isOpen })
  }

  return (
    <div className="App">
      <PegasusModal config={config} />
      <button onClick={() => toggleModal()}>TOGGLE MODAL</button>
    </div>
  )
}

export default App
```
