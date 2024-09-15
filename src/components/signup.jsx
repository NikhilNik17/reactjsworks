import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
    <div>signup page


      <input type='text' placeholder='Enter Your First Name'></input>
      <input type='text' placeholder='Enter Your Last Name'></input>
      <input type='email' placeholder='Enter Your Email ID'></input>
      <input type='password' placeholder='Enter Your Password'></input>
      <Link to='/Login'><button>Sign Up</button></Link>
    </div>
  )
}

export default signup