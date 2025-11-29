import { useState } from 'react'


export function Register() {

  return (
    <div className='bg-orange-200 flex justify-center items-center w-full min-h-full'>

      {/*Card*/} {/*HeadlessUI Card Component*/} {/*to be applied*/} 
      <div className='bg-white text-black w-[25vw] rounded-2xl shadow-2xl flex justify-center gap-10 items-center flex-col py-14'> 

        {/*Welcome*/}
        <div className='flex flex-col items-center gap-3'>
          <span className='text-5xl font-["Righteous"]'>Register</span>
          <span className='font-["Nunito"]'>BE ONE OF US</span>
        </div>

        <div className=' flex flex-col gap-10 w-[20vw]  justify-center items-center'>
          
          {/*Inputs*/} {/*MUI Inputs Components*/}
          <div className='flex flex-col  w-[18vw]  gap-8'>
            <div className='flex flex-col'>
              <input type="text" placeholder='First Name' className='py-2 px-3 bg-white rounded-full focus:ring-blue-500 focus:ring-2 focus:outline-none shadow-inner border border-gray-300' />
            </div>
            <div className='flex flex-col'>
              <input type="text" placeholder='Last Name' className='py-2 px-3 bg-white rounded-full focus:ring-blue-500 focus:ring-2 focus:outline-none shadow-inner border border-gray-300'/>
            </div>
            <div className='flex flex-col'>
              <input type="text" placeholder='Email' className='py-2 px-3 bg-white rounded-full focus:ring-blue-500 focus:ring-2 focus:outline-none shadow-inner border border-gray-300' />
            </div>
            <div className='flex flex-col'>
              <input type="text" placeholder='Password' className='py-2 px-3 bg-white rounded-full focus:ring-blue-500 focus:ring-2 focus:outline-none shadow-inner border border-gray-300'/>
            </div>
            <div className='flex flex-col'>
              <input type="text" placeholder='Re-enter your password' className='py-2 px-3 bg-white rounded-full focus:ring-blue-500 focus:ring-2 focus:outline-none shadow-inner border border-gray-300'/>
            </div>
          </div>

          {/*Submit*/}
          <button className='bg-orange-500 px-6 py-2 rounded-full text-white shadow-lg hover:bg-orange-600 cursor-pointer'>
            Submit
          </button>

        </div>

        {/*Link for Login*/}
        <div className='flex gap-2'>
          <p>Already have an Account?</p>
          <button className='cursor-pointer hover:scale-110 transition-transform'>Login</button>
          </div>

      </div>
    </div>
  )
}
