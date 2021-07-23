import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { authService } from '../firebase'
import Search from './Search'
function Header() {
  const [profile, setProfile] = useState(false)
  const [modal, setModal] = useState(false)
  const history = useHistory()

  const onProfileToggle = (prev) => {
    setProfile((prev) => !prev)
  }
  const logOut = () => {
    authService
      .signOut()
      .then()
      .catch((error) => {
        console.log(error)
      })
    history.push('/')
    // how to re-render/direct to login page?
    // as on instagram
    // open a modal then redirect
  }
  return (
    <nav>
      <Search />
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/direct/inbox"> direct message </Link>
        </li>
        <li>
          <Link to="/explore"> explore </Link>
        </li>
        <li onClick={onProfileToggle}>
          profile
          {profile && (
            <ul>
              <li>
                <Link to="/profile">Profile </Link>
              </li>
              <li>saved</li>
              <li>setting</li>
              <li onClick={logOut}>logout</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Header
