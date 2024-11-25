import React from 'react'
import Navbar from '../Components/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className='h-screen w-screen'>
        <div className='bg-gray-400 flex justify-center text-center text-2xl font-serif mt-2 h-20 items-center'>
          About Page
        </div>
        <div className='flex h-screen w-screen mt-2 justify-center h-200'>
          <img src="1.png" alt="" />
        </div>
      </div>
    </>

  )
}

export default About