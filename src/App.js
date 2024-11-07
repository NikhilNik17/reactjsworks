import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard'
import Homepage from './components/homepage'
import Login from './components/login'
import Signup from './components/signup'
import Phones from './pages/phones'
import Productlist from './pages/productlist'
import Tv from './pages/tv'
import Ac from './pages/ac'
import Washingmachine from './pages/washingmachine'
import Iphonecases from './pages/iphonecases'


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
        <Route path='/ac' element={<Ac />} />
        <Route path='/productlist' element={<Productlist />} />
        <Route path='/washingmachine' element={<Washingmachine />} />
        <Route path='/iphonecases' element={<Iphonecases />} />

      
        
        
      </Routes>
    </Router>


     
      
      
    </div>
  )
}

export default App