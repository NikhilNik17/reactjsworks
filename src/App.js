import React from 'react'
import './App.css'
import Login from './components/login'
import Sidenav from './components/sidenav'
import Dashboard from './components/dashboard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './components/signup'
import Phones from './pages/phones'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tv from './pages/tv'

function App() {
  return (
    <div className='container-fluid'>
    <Router>
      <Routes>
        
        <Route path='/login' element={ <Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/tv' element={<Tv />} />
      </Routes>
    </Router>


     
      
      
    </div>
  )
}

export default App