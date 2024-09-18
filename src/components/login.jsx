import React from 'react'
import { Link } from 'react-router-dom'


function login() {
  return (
    <div className='loginpage'>
<h1>Login Page</h1>
<br></br>
<input type='email' placeholder='Enter Your Email ID'></input>
<br>
</br>
<br>
</br>
<input type='password' placeholder='Enter Your Password'></input>
<br></br>
<br></br>
<Link to='/homepage'><button>Login</button></Link>
<br></br>
<p>Dont Have An Account?</p><Link to='/signup'><button>Sign Up</button></Link>
    </div>
  )
}

export default login