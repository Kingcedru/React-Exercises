import { useState } from 'react'
import './App.css'
import Hello from './exercise1'
import Buttons from './exercise2'
import ThreeButtons from './exercise3'
import ClickedTimes from './exercise4'
import List from './exercise5'
import Form from './exercise7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid'>
      <nav id='nav'>
      <ul className='flex gap-10'>
        <li><a href='#exercise1'>Exercise 1</a></li>
        <li><a href='#exercise2'>Exercise 2</a></li>
        <li><a href='#exercise3'>Exercise 3</a></li>
        <li><a href='#exercise4'>Exercise 4</a></li>
        <li><a href='#exercise5'>Exercise 5</a></li>
        <li><a href='#exercise7'>Exercise 7</a></li>
      </ul>
      </nav>
      <div id='exercise1' className='flex justify-center items-center h-screen'>
        <Hello/>
      </div>
      <div id='exercise2' className='flex justify-center items-center h-screen'>
        <Buttons/>
      </div>
      <div id='exercise3' className='flex justify-center items-center h-screen'>
        <ThreeButtons/>
      </div>
      <div id='exercise4' className='flex justify-center items-center h-screen'>
        <ClickedTimes/>
      </div>
      <div id='exercise5' className='flex justify-center items-center h-screen'>
        <List/>
      </div>
      <div id='exercise7' className='flex justify-center items-center h-screen'>
        <Form/>
      </div>
    </div>

  )
}

export default App
