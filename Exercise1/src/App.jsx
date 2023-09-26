import { useState } from 'react'
import './App.css'
import Hello from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
        <Hello/>
    </div>

  )
}

export default App
