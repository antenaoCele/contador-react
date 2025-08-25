import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contador">
        <h1>CONTADOR</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}>
          Restar
        </button>
      </div>
    </>
  )
}

export default App
