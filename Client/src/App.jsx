import { useState } from 'react'
import { UIShowcase } from './UIs/UIShowcase'
import { HeaderLanding } from './components/common/Header/HeaderLanding.jsx'
import { HeaderSystem } from './components/common/Header/HeaderSystem.jsx'
import { FooterLanding } from './components/common/Footer/FooterLanding.jsx'  // Footer exists, not FooterMain
import { Register } from './components/common/Main/Register/RegisterV1.jsx'  // Named export, not default
import { Button } from './SandboxDesigns/Buttons/Buttons.jsx'
import { Card } from './SandboxDesigns/Cards/Card.jsx'
import { Inputs } from './SandboxDesigns/Inputs/Inputs.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const isShowcase = window.location.hash === '#showcase'
  const isDesign = window.location.hash === '#design'

  if (isShowcase) {
    return <UIShowcase />
  }

  if (isDesign) {
    return (
    <div className='bg-gray-200 flex min-h-screen justify-center items-center'>
      <Button />
    </div>
    )
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
