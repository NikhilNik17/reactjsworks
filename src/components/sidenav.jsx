import React from 'react'
import { Link } from 'react-router-dom'

function sidenav() {
  return (
    <div className='sidenavbar'> 
        <ul>
            <Link to='/homepage'><li>Home</li></Link>
            <Link to='/productlist'><li>Products</li></Link>
            <li>Contact Us</li>
            <li>AboutUs</li>
            
        </ul>
        <Link to='/Login'> <button>Logout</button></Link>
    </div>
  )
}

export default sidenav