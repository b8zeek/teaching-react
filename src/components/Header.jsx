import React from 'react'
import { Link } from 'react-router-dom'

import { loggedInContext } from '../userLoggedInContext'

const Header = () => {
    const { userLoggedIn, logIn, logOut } = React.useContext(loggedInContext)

    return <header style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      background: 'rgba(255, 255, 255, .1)'
    }}>
        <p style={{
            display: 'inline-block'
        }}>Milos Rujevic</p>
        {userLoggedIn ?
            <>
                <Link to=''>Home</Link>
                <Link to='about'>About</Link>
                <a onClick={logOut}>Log Out</a>
            </> :
            <a onClick={logIn}>Log In</a>
        }
    </header>
}

export default Header
