import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Test from './screens/Test'
import Feedback from './screens/Feedback'
import './App.css'
import Problem from './screens/Problem'

const App = () => {
  const [localStream, setLocalStream] = useState(null)

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home setLocalStream={setLocalStream}/>} exact />
          <Route path='/test' element={<Test/>} />
          <Route path='/feedback' element={<Feedback localStream={localStream}/>} />
          <Route path='/problem' element={<Problem setLocalStream={setLocalStream}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App