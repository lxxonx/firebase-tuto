import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Accounts from '../routes/Accounts'
import Direct from '../routes/Direct'
import Explore from '../routes/Explore'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import SignUp from '../routes/SignUp'
import Header from './Header'

function Router({ isLoggedIn }) {
  return (
    <HashRouter>
      {isLoggedIn && <Header />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/direct">
              <Direct />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route path="/account">
              <Accounts />
            </Route>
          </>
        )}
      </Switch>
    </HashRouter>
  )
}

export default Router
