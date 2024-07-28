
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  

  return (
    <>
      <div>

        <Navbar/> <br /><br /><br /><br />
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
          </Routes>
          
        

      </div>
      
    </>
  )
}

export default App
