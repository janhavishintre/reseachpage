import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ResearchPage from './pages/ResearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ResearchPage/>
    </>
  )
}

export default App
