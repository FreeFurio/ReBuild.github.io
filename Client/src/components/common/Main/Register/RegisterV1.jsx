import { useState } from 'react'


export function Register() {

  return (
    <div className='bg-red-200 flex justify-center items-center w-full min-h-full'>

      {/*Card*/} {/*HeadlessUI Card Component*/} {/*to be applied*/} 
      <div className='bg-blue-200 w-[30vw] flex justify-center gap-16 items-center flex-col py-16 my-11'>

        {/*Welcome*/}
        <div className='bg-red-200'>
          <div>Welcome</div>
        </div>

        <div className='bg-red-200 flex flex-col gap-10 w-[20vw]  justify-center items-center py-6'>
          
          {/*Inputs*/} {/*MUI Inputs Components*/}
          <div className='bg-blue-200 flex flex-col  w-[15vw]  gap-8'>
            <div className='flex flex-col'>
              <span>First Name:</span>
              <input type="text" placeholder='Enter First Name' />
            </div>
            <div className='flex flex-col'>
              <span>Last Name:</span>
              <input type="text" placeholder='Enter Last Name' />
            </div>
            <div className='flex flex-col'>
              <span>Email:</span>
              <input type="text" placeholder='Enter Email' />
            </div>
            <div className='flex flex-col'>
              <span>Password:</span>
              <input type="text" placeholder='Enter Password' />
            </div>
            <div className='flex flex-col'>
              <span>Re-type Password</span>
              <input type="text" placeholder='Re-enter you password' />
            </div>
          </div>

          {/*Submit*/}
          <button>
            Submit
          </button>

        </div>

        {/*Link for Login*/}
        <div>
          Link for Login
          </div>

      </div>
    </div>
  )
}
