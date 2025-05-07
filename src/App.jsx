import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-400 text-8xl px-4 px-5 shadow-2xs'>Hello From Tailwind</h1>
    </>
  )
}

export default App
