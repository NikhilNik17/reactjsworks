import React from 'react'
import { Link } from 'react-router-dom'

function sidenav() {
  return (
    <div className='sidenavbar'> 
        <ui>
            <li>Home</li>
            <Link to='/tv'><li>Products</li></Link>
            <li>Contact Us</li>
            <li>AboutUs</li>
        </ui>
        <Link to='/Login'> <button>Logout</button></Link>
    </div>
  )
}

export default sidenav