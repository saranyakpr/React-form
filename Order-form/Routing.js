import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Index'
import Login from './Login'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
           <Routes>
               <Route exact={true} path='/' Component={Index}/>
               <Route exact={true} path='/login' Component={Login}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing