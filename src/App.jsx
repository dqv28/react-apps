/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Content from './Content'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App
