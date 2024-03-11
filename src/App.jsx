import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import ConsolidatedFormComponent from './FormRelatedFolder/ConsolidatedFormComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConsolidatedFormComponent />
    </>
  )
}

export default App
