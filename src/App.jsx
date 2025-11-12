import { useState } from 'react'
import Header from './Containers/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Counter/>
      </div>
    </>
  )
}

export default App
