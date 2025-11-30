import { useState } from 'react'


export function Login({ setCurrentPage }) {

    return (
        <div className='bg-orange-200 flex justify-center items-center w-full min-h-full'>

            {/*Card*/}
            <div className='bg-white text-black w-[25vw] rounded-2xl shadow-2xl flex justify-center items-center flex-col py-14 mb-10'>

                {/*Welcome*/}
                <div className='flex flex-col items-center gap-3'>
                    <span className='text-5xl font-["Righteous"]'>Login</span>
                    <span className='font-["Nunito"]'>"Are you one of us?"</span>
                </div>

                <div className=' flex flex-col gap-10 w-[20vw]  justify-center items-center'>

                    {/*Inputs*/}
                    <form className='flex flex-col  w-[18vw]  gap-6 mt-5' onSubmit={(e) => e.preventDefault()}>
                        <div className='relative'>
                            <input type="email"  id="email" placeholder=" " className='py-2 px-3 bg-white custom_input_line focus:outline-none peer w-full' />
                            <label htmlFor="email"className='absolute left-3 top-2 text-gray-500 pointer-events-none transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange-500 bg-white px-1'>
                                Email
                            </label>
                        </div>
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Password' className='py-2 px-3 bg-white custom_input_line focus:outline-none' />
                        </div>

                        {/*Submit*/}
                        <div className='flex justify-center mt-4'>
                            <button type='submit' className='bg-orange-500 px-6 py-2 rounded-full text-white shadow-lg hover:bg-orange-600 cursor-pointer'>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                {/*Link for Login*/}
                <div className='flex gap-2 mt-5'>
                    <p>No Account?</p>
                    <button onClick={() => setCurrentPage('register')} className='cursor-pointer hover:scale-110 transition-transform'>Register</button>
                </div>

                <div className='flex gap-2 mt-2'>
                    <button onClick={() => setCurrentPage('forgot')} className='cursor-pointer hover:scale-110 transition-transform'>Forgot Password</button>
                </div>

            </div>
        </div>
    )
}
