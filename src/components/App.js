import React, { useEffect, useState } from 'react'
import { authService } from '../firebase'
import Router from './Router'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [init, setInit] = useState(false)
  useEffect(() => {
    authService.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setCurrentUser(user)
      }
      setInit(true)
    })
  })
  return <>{init ? <Router isLoggedIn={Boolean(currentUser)} /> : 'Loading'}</>
}

export default App
