/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className=' flex justify-between p-3 shadow-md'>
        <h1 className=' text-3xl text-cyan-600 font-extrabold'>Arm AI</h1>

        <Link to="createpost" className=' bg-blue-500 py-2 px-4 rounded-full text-white'>Create</Link>

    </header>
  )
}

export default Header