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
                </div>

                <div className=' flex flex-col gap-10 w-[20vw]  justify-center items-center'>

                    {/*Inputs*/}
                    <form className='flex flex-col  w-[18vw]  gap-6 mt-5' onSubmit={(e) => e.preventDefault()}>
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Email' className='py-2 px-3 bg-white custom_input_line focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Password' className='py-2 px-3 bg-white custom_input_line focus:outline-none' />
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
