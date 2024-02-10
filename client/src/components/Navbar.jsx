import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex gap-8 bg-gray-800 shadow-lg p-4 border-b-2 border-white'>
         
      <NavLink className="text-white text-xl font-bold" to={'/'}>Home</NavLink>
      <NavLink className="text-white text-xl font-bold" to={'/studentprofile'}>Student Profile</NavLink>
    </div>
  )
}

export default NavBar

  