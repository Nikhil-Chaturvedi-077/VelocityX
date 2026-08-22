import React, { useEffect } from 'react'
import NavbarOwner from '../../components/owner/NavbarOwner'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
const Layout = () => {
  const {isOwner, isCheckingAuth, navigate} = useAppContext();

  useEffect(()=>{
    if(!isCheckingAuth && !isOwner){
      navigate('/')
    }
  },[isOwner, isCheckingAuth])

  if (isCheckingAuth) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isOwner) {
    return null;
  }

  return (
    <div className='flex flex-col'>
      <NavbarOwner/>
      <div className='flex'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
