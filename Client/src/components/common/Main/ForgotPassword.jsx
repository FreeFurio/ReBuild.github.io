import { useState } from 'react'
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

export function ForgotPassword({setCurrentPage}) {

    return (
        <div className='bg-orange-200 flex justify-center items-center w-full min-h-full'>

            {/*Card*/}
            <div className='bg-white text-black w-[25vw] rounded-2xl shadow-2xl flex justify-center items-center flex-col py-14 mb-10'>

                {/*Welcome*/}
                <div className='flex flex-col items-center gap-3'>
                    <span className='text-5xl font-["Righteous"]'>Forgot Password</span>
                    <span className='font-["Nunito"]'>"but do you remember one of us?"</span>
                    <span className='text-xs font-["Nunito"]'>Enter Email to Send Password Reset</span>
                </div>

                <div className=' flex flex-col gap-10 w-[20vw]  justify-center items-center'>

                    {/*Inputs*/}
                    <form className='flex flex-col  w-[18vw]  gap-6 mt-5' onSubmit={(e) => e.preventDefault()}>
                        <div className='relative'>
                            <input type="text" placeholder=' ' className='py-2 px-3 bg-white custom_input_line focus:outline-none peer w-full'/>
                            <label htmlFor="email" className='absolute left-3 top-2 text-gray-500 pointer-events-none transition-all duration-200 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange-500 peer-[:not(:placeholder-shown)]:left-2'>
                                Email
                            </label>
                        </div>

                        {/*Submit*/}
                        <div className='flex justify-center mt-4'>
                            <button type='submit' className='bg-orange-500 px-6 py-2 rounded-full text-white shadow-lg hover:bg-orange-600 cursor-pointer'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                {/*Link for Login*/}
                <div className='flex gap-2 mt-5'>
                    <p>Already have an Account?</p>
                    <button onClick={() => setCurrentPage('login')} className='cursor-pointer hover:scale-110 transition-transform'>Login</button>
                </div>

            </div>
        </div>
    )
}
