import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { authService, firebaseInit } from '../firebase'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'name') {
      setName(value)
    } else if (name === 'userName') {
      setUserName(value)
    }
  }
  const onSignUpSubmit = async (event) => {
    event.preventDefault()
    // Sign in with email and pass.
    // [START createwithemail]
    authService
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          setError('The password is too weak.')
        } else {
          setError(errorMessage)
        }
      })
  }

  const onSignUpWithProviders = async (event) => {
    const {
      target: { name },
    } = event
    let provider
    if (name === 'githubLogin') {
      provider = new firebaseInit.auth.GithubAuthProvider()
    } else if (name === 'google') {
      provider = new firebaseInit.auth.GoogleAuthProvider()
    }
    await authService.signInWithPopup(provider)
  }
  return (
    <>
      <div>
        <button onClick={onSignUpWithProviders} name="googleLogin">
          google로 로그인
        </button>
        <button onClick={onSignUpWithProviders} name="githubLogin">
          github로 로그인
        </button>

        <form onSubmit={onSignUpSubmit}>
          <input
            onChange={onChange}
            required
            placeholder="email address"
            name="email"
            type="text"
            value={email}
          />
          <input
            onChange={onChange}
            required
            placeholder="name"
            name="name"
            type="text"
            value={name}
          />
          <input
            onChange={onChange}
            required
            placeholder="user name"
            name="userName"
            type="text"
            value={userName}
          />
          <input
            onChange={onChange}
            required
            placeholder="password"
            name="password"
            type="password"
            value={password}
          />
          <input type="submit" value="Sign Up" />
          {error}
        </form>
      </div>
      <div>
        Do you have an account?
        <Link to="/account/login">Login</Link>
      </div>
    </>
  )
}

export default SignUp
