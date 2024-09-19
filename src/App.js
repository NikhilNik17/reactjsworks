import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard'
import Homepage from './components/homepage'
import Login from './components/login'
import Signup from './components/signup'
import Iphonecases from './pages/iphonecases'
import Phones from './pages/phones'
import Productlist from './pages/productlist'
import Tv from './pages/tv'
import Washingmachine from './pages/washingmachine'


function App() {
  return (
    <div >
    <Router>
      <Routes>
        
        <Route path='/reactjsworks' element={ <Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/productlist' element={<Productlist />} />
        <Route Path='/iphonecases' element={<Iphonecases />} />
        <Route Path='/washingmachine' element={<Washingmachine />} />
        
      </Routes>
    </Router>


     
      
      
    </div>
  )
}

export default App