import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function Profile() {

  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center items-center mt-6">
        <div className=" sm:text-sm items-center  px-8  py-4 shadow-2xl rounded-2xl justify-center border-2 w-[800px]">
          <div className='h-10 bg-blue-500 text-white text-xl py-1 font-semibold font-serif rounded-lg px-4 items-center'>
            Your Profile
          </div>
          <div className='inline-flex'>
            <div className='border-2 px-2 mt-2 justify-start rounded-xl inline-flex'>
              <div className="relative border-4 w-20 mt-2 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-20 h-24 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                  </path>
                </svg>
              </div>
            </div>
            <p className='ml-4 text-2xl font-bold font-mono flex items-center'>
              Username
            </p>
          </div>
          <p className='mt-2 text-lg  font-medium'>
            Bringing knowledge to your fingertips with AI assistance
          </p>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center mt-8">
        <div className=" sm:text-sm items-center  px-8  py-4 shadow-2xl rounded-2xl justify-center border-2 w-[800px]">
          <p className='text-2xl  '>
            Basic Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            <div className="mb-5">
              <p className="mb-0 text-base text-black">First Name </p>
              <input className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="text" placeholder="Name" value="First" />
            </div>
            <div className="mb-5">
              <p className="mb-0 text-base text-black">Last Name </p>
              <input className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="text" placeholder="Name" value="Name" />
            </div>
          </div>
          <div className="mb-5">
            <p className="mb-0 text-base text-black">Email </p>
            <input className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="email" placeholder="Email" value="name@mail.com" />
          </div>
          <div className="mb-5">
            <p className="mb-0 text-base text-black">Phone </p>
            <input className="input font-medium w-64 h-[49px] rounded-md border border-gray6 px-6 text-lg text-black" type="text" placeholder="Phone" value="+xxxxxxxxxx" />
          </div>
          <div className="mb-5">
            <p className="mb-0 text-base text-black">Bio </p>
            <input className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="email" placeholder="Email" value="Hi There, This is my BIO " />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center mt-8">
        <div className=" sm:text-sm items-center  px-8  py-4 shadow-2xl rounded-2xl justify-center border-2 w-[800px]">
          <p className='text-2xl  '>
            Security
          </p>
          <div className='mt-2'>
            <div className="mb-5">
              <p className="mb-0 text-base text-black">Current Password </p>
              <input className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="password" placeholder="Email" value="emilyspass" />
            </div>
            <div className='flex justify-end'>
              <Link to="/logout" className="bg-blue-600 border-2 justify-end text-white px-6 py-2 rounded-lg hover:bg-blue-700" >
                Logout
              </Link>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}
