import React from 'react'
import logo from './logo.svg'
import './App.css'

import JolApi from './libs/JolApi'
import { UserType } from './types/User'

const jolapi = new JolApi()

jolapi.getAll().then((users: any) => {
    users.forEach((user: UserType) => {
        console.log(user)
    })
})

function App() {
    return <div className="App"></div>
}

export default App
