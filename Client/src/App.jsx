import { useState } from 'react'
import { UIShowcase } from './UIs/UIShowcase'
import { HeaderLanding } from './components/common/Header/HeaderLanding.jsx'
import { HeaderSystem } from './components/common/Header/HeaderSystem.jsx'
import { FooterLanding } from './components/common/Footer/FooterLanding.jsx'  // Footer exists, not FooterMain
import { Register } from './components/common/Main/Register/RegisterV1.jsx'  // Named export, not default

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const isShowcase = window.location.hash === '#showcase'
  const isDesign = window.location.hash === '#design'
  
  if (isShowcase) {
    return <UIShowcase/>
  }

  if(isDesign) {
    return <UIDesign/>
  }
  
  return (
     <div className="min-h-screen flex flex-col">
      <HeaderSystem />
      <main className="flex-1 flex bg-gray-100">
        <Register />
      </main>
      <FooterLanding />
    </div>
  )
}

export default App
