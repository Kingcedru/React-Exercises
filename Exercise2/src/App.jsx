import { useState } from 'react'
import './App.css'
import Hel from './buto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
        <Hel/>
    </div>

  )
}

export default App
