import './login.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Login () {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='leftDiv'>
          <h1> Welcome to the Blog</h1>
        </div>
        <form className='loginInfo'>
          <input
            type='email'
            className='loginInput'
            placeholder='Enter your email@address'
          />
          <input
            type='password'
            className='loginInput'
            placeholder='Enter your password ***'
          />
          <button className='loginInput'>
                Login
          </button>
        </form>
        <div className='signup'>
          <button className='SignUpButton'>
            <Link to='/SignUp' className='link'>Sign Up</Link>
          </button>
        </div>
      </div>
    </div>

  )
}
