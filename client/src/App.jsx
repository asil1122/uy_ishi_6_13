import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { MainLayout } from './layout/main-layout'
import { Home } from './pages/home'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/app' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
