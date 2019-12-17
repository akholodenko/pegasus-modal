# pegasus-modal

Versatile modal component.

**Github:** [https://github.com/akholodenko/pegasus-modal](https://github.com/akholodenko/pegasus-modal)

## Usage

**Install:**

```
npm i pegasus-modal
```

**Import:**

```javascript
import { PegasusModal } from 'pegasus-modal'
```

**Configuration**

```javascript
 const config = {
    isOpen: true, // boolean; control whether the modal is open or closed

    screens: [DemoFirstComponent, DemoSecondComponent, DemoThirdComponent], // array; components to be connected into flow via prev/next buttons

    data: { ... }, // object; injected as prop to all components in screens array

    onOpen: (data: {}) => {}, // function; callback when modal is opened

    onClose: (data: {}) => {}, // function; callback when modal is closed

    onNext: (data: {}) => {}, // function; callback when modal navigates to next component in screen array

    onPrev: (data: {}) => {}, // function; callback when modal navigates to previous component in screen array

    size: 'half', // string; 'half' or 'full' supported for modal size

    footer: 'sticky', // string; 'sticky', 'none', 'inline' (default) for modal footer display (with prev/next buttons)

    startScreenIndex: 1, // integer; index of initially loaded component from screen array; default: 0; set to -1 when updating during toggling to keep at current screen when toggling.

    confirmClose: true, // booloean; display a confirmation overlay to close modal which clicking X; default: false
}
```

**Initialization**

```javascript
<PegasusModal config={config} />
```

**Injected props in screens components**

```javascript
const {
  data, // data object passed in config to modal

  isFirstScreen, // boolean indicating if current component is first in screens array

  isLastScreen, // boolean indicating if current component is last in screens array

  next, // method to display next component in screens array

  prev, // method to display previous component in screens array

  updateData // method to update data passed in, globally in modal and in config callbacks
} = props
```

## Example

**App:** [https://github.com/akholodenko/pegasus-modal-example/blob/master/src/App.tsx](https://github.com/akholodenko/pegasus-modal-example/blob/master/src/App.tsx)

**App Code:**

```typescript
import React, { useState } from 'react'
import './App.css'

import { PegasusModal, ModalConfigInterface } from 'pegasus-modal'
import DemoFirstComponent from './components/demoFirstComponent'
import DemoSecondComponent from './components/demoSecondComponent'
import DemoThirdComponent from './components/demoThirdComponent'

function App() {
  const [config, setConfig] = useState<ModalConfigInterface>({
    isOpen: true,
    screens: [DemoFirstComponent, DemoSecondComponent, DemoThirdComponent],
    data: {
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
    startScreenIndex: 1,
    confirmClose: true
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
