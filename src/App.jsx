import { useState } from 'react'
import Count from "./Count"
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function add() {
    setCount(prevCount=> prevCount + 1)
  }

  function minus() {
    setCount(prevCount=> prevCount - 1)
  }

  console.log("App rendered")

  return (
    <main className='container'>
      <div className="counter">
        <button onClick={minus} className='minus' aria-label='Decrease count'>-</button>
        <Count number={count} />
        <button onClick={add} className='plus' aria-label='Increase count'>+</button>
      </div>
    </main>
  )
}

export default App
