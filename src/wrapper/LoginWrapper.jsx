import React from 'react'
import LoginPage from '../pages/LoginPage'

import { loggedInContext } from '../userLoggedInContext'

const LoginWrapper = ({ children }) => {
    const ctx = React.useContext(loggedInContext)
    console.log('CONTEXT:', ctx)

    return ctx.userLoggedIn ? children : <LoginPage logIn={ctx.logIn} />
}

export default LoginWrapper
