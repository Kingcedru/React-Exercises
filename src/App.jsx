import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid'>
      <nav id='nav'>
      <ul className='flex gap-10'>
        <li><a href='#exercise1'>Exercise 1</a></li>
        <li><a href='#exercise2'>Exercise 2</a></li>
      </ul>
      </nav>
      <div id='exercise1' className='flex justify-center items-center h-screen'>
        <Hello/>
      </div>
      <div id='exercise2' className='flex justify-center items-center h-screen'>
        <Buttons/>
      </div>
    </div>

  )
}

export default App
