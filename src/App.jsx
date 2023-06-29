import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

function App() {
 

  return (
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>
  )
}

export default App
