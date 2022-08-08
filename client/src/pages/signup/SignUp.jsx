import './signup.css'
import { Link } from 'react-router-dom'

import React from 'react'

export default function SignUp () {
  return (
    <div className='signup'>
      <div className='signupWrapper'>
        <div className='leftDiv'>
          <h1> Welcome to the Blog</h1>
        </div>
        <form className='signupInfo'>
          <input
            type='username'
            className='signupInput'
            placeholder='Enter your username'
          />
          <input
            type='email'
            className='signupInput'
            placeholder='Enter your email@address'
          />
          <input
            type='password'
            className='signupInput'
            placeholder='Enter your password ***'
          />
          <button className='signupInput'>
              Sign up
          </button>
        </form>
        <div className='signupp'>
          <button className='SignUpButton'>
            <Link className='link' to='/Login'>Login</Link>
          </button>
        </div>
      </div>
    </div>

  )
}
