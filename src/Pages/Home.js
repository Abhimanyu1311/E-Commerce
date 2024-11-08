import React from 'react'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div className='h-20 mt-2 justify-center text-center items-center bg-headlineColor text-3xl py-4 font-sans'>
        <h1 className='text-headlineTextColor font-semibold'>
          Welcome to  an E-Commerce website
        </h1>
      </div>
      <div className=' text-orange-500 bg-blue-300 mt-4 justify-center text-center h-20 items-center py-2 font-sans' > 
        <p className='text-3xl font-bold'>
          Welcome to our store</p>
        <p className='text-xl font-semibold '>
          Find the best products here
        </p>
      </div>


    </>

  )
}

export default Home