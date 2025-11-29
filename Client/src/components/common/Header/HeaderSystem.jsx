import { useState } from 'react'

export function HeaderSystem() {
  const [activePage, setActivePage] = useState('Home')
  
  return (
    <div className='bg-orange-200 w-[100vw] h-[13vh] flex justify-center items-center'>
      <div className='h-[5vh] w-[80vw] flex justify-between  items-center'>
        <div className='text-3xl font-["Fredoka_One"]'>LOGO</div>
        <button className='bg-orange-500 px-6 py-2 rounded-full text-white shadow-lg hover:bg-orange-600 cursor-pointer'>Support</button>
      </div>
    </div>
  )
}