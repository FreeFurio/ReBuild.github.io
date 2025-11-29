import { useState } from 'react'

export function HeaderSystem() {
  const [activePage, setActivePage] = useState('Home')
  
  return (
    <div className='bg-blue-200 w-[100vw] h-[10vh] flex justify-center items-center'>
      <div className='bg-red-200 h-[5vh] w-[80vw] flex justify-between  items-center'>
        <div>LOGO</div>
        <div className='bg-red-200 flex justify-between w-[20vw]'>
        </div>
        <div>Support</div>
      </div>
    </div>
  )
}