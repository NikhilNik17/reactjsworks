import React from 'react'
import { Link } from 'react-router-dom'


function login() {
  return (
    <div>
<h1>Login Page</h1>
<input type='email' placeholder='Enter Your Email ID'></input>
<br>
</br>
<br>
</br>
<input type='password' placeholder='Enter Your Password'></input>
<br></br>
<Link to='/dashboard'><button>Login</button></Link>
<p>Dont Have An Account</p><Link to='/signup'><button>Sign Up</button></Link>
    </div>
  )
}

export default login