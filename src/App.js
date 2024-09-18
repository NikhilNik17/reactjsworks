import React from 'react'
import './App.css'
import Login from './components/login'
import Dashboard from './components/dashboard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './components/signup'
import Phones from './pages/phones'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tv from './pages/tv'
import Home from './components/home'
import Homepage from './components/homepage'
import Productlist from './pages/productlist'
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
        <Route path='/productlist' element={<Productlist />} />
        <Route Path='/iphonecases' element={<Iphonecases />} />
        
      </Routes>
    </Router>


     
      
      
    </div>
  )
}

export default App