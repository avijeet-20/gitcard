import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProfileCard } from './components/Profilecard'
import { Input } from './components/Input'

function App() {
  
  const [data, setData] = useState();

  return (
    <>
      <div id='wrapper'>

        <Input data = {data} setData = {setData}></Input>
        {console.log(data)}
        {data && (        <ProfileCard data = {data}></ProfileCard>)}
        
      </div>
    </>
  )
}




export default App
