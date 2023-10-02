import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NekWork from './component/NekWork';
import London from './component/London';
import Mumbai from './component/Mumbai';
import Paris from './component/Paris';
import Navbar from './component/Navbar';
const App = () => {
  return (
   <div>
    <Router>
   <Navbar />
      <Routes>
        <Route path='/' element={<NekWork />}></Route>
        <Route path='/London' element={<London />}></Route>
        <Route path='/Mumbai' element={<Mumbai />}></Route>
        <Route path='/Paris' element={<Paris />}></Route>
      </Routes>
    </Router>
   </div>
  )
}

export default App

