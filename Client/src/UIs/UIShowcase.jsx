import { useState } from "react"
import {HeadlessUI } from "./HeadlessUI"
import {JoyUI } from "./JoyUI"
import { MaterialUI } from "./MaterialUI"

export function UIShowcase() {
    const [currentUI,setCurrentUI] = useState('headless')

    const renderCurrentUI = () => {
        switch (currentUI) {
            case 'headless':
                return <HeadlessUI/>
            case 'material':
                return <MaterialUI/>
            case 'joy':
                return <JoyUI/>
            default:
                return <HeadlessUI/>
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
      <div className="bg-red-100 p-2 text-center text-red-800 font-bold">
        🔧 DEVELOPMENT UI SHOWCASE - Not for production
      </div>
      
      <div className="flex justify-center gap-4 p-4 bg-white shadow-sm">
        <button 
          onClick={() => setCurrentUI('headless')}
          className={`px-4 py-2 rounded ${currentUI === 'headless' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Headless UI
        </button>
        <button 
          onClick={() => setCurrentUI('joy')}
          className={`px-4 py-2 rounded ${currentUI === 'joy' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Joy UI
        </button>
        <button 
          onClick={() => setCurrentUI('material')}
          className={`px-4 py-2 rounded ${currentUI === 'material' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Material UI
        </button>
      </div>

      <main className="flex-1">
        {renderCurrentUI()}
      </main>
    </div>
    )
}