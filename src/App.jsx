import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
// import Testing from './components/Testing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id='Main'>
    <Header/>
    {/* <Testing/> */}
     </div>
    </>
  )
}

export default App
