import React from 'react'
import { Header } from './header'
import { Navigate, Outlet } from 'react-router-dom'
import { loadState } from '../config/store';

export const MainLayout = () => {
  const user = loadState('userData');

  if(!user){
    return <Navigate replace to={'/'} />
  }

  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}
