import { useState } from 'react'

export function Inputs() {
    const [cssClasses, setCssClasses] = useState('')
    
    const toggleClass = (className) => {
        if (cssClasses.includes(className)) {
            setCssClasses(prev => prev.replace(className, '').replace(/\s+/g, ' ').trim())
        } else {
            setCssClasses(prev => (prev + ' ' + className).trim())
        }
    }
    
    return (
        <div className="flex gap-8 p-8">
            {/* Input Preview */}
            <div className="flex items-center justify-center w-1/2 bg-gray-100 rounded-lg p-8">
                <div className="w-full max-w-sm">
                    <input 
                        placeholder="Enter text here..."
                        className={cssClasses}
                    />
                </div>
            </div>
            
            {/* Controls */}
            <div className="w-1/2 space-y-4">
                <h2 className="text-xl font-bold">Input Customizer</h2>
                
                {/* Toggle Buttons */}
                <div>
                    <label className="block text-sm font-medium mb-2">Style Toggles</label>
                    
                    {/* Background */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Background</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('bg-white')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('bg-white') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                bg-white
                            </button>
                            <button 
                                onClick={() => toggleClass('bg-gray-50')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('bg-gray-50') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                bg-gray-50
                            </button>
                            <button 
                                onClick={() => toggleClass('bg-transparent')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('bg-transparent') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                bg-transparent
                            </button>
                        </div>
                    </div>
                    
                    {/* Text */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Text</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('text-gray-900')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('text-gray-900') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                text-gray-900
                            </button>
                            <button 
                                onClick={() => toggleClass('text-black')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('text-black') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                text-black
                            </button>
                            <button 
                                onClick={() => toggleClass('text-sm')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('text-sm') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                text-sm
                            </button>
                        </div>
                    </div>
                    
                    {/* Padding */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Padding</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('px-3')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('px-3') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                px-3
                            </button>
                            <button 
                                onClick={() => toggleClass('py-2')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('py-2') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                py-2
                            </button>
                            <button 
                                onClick={() => toggleClass('p-4')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('p-4') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                p-4
                            </button>
                        </div>
                    </div>
                    
                    {/* Border */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Border</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('border')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('border') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                border
                            </button>
                            <button 
                                onClick={() => toggleClass('border-2')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('border-2') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                border-2
                            </button>
                            <button 
                                onClick={() => toggleClass('border-gray-300')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('border-gray-300') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                border-gray-300
                            </button>
                        </div>
                    </div>
                    
                    {/* Border Radius */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Border Radius</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('rounded-md')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('rounded-md') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                rounded-md
                            </button>
                            <button 
                                onClick={() => toggleClass('rounded-full')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('rounded-full') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                rounded-full
                            </button>
                            <button 
                                onClick={() => toggleClass('rounded-none')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('rounded-none') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                rounded-none
                            </button>
                        </div>
                    </div>
                    
                    {/* Size */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Size</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('w-full')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('w-full') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                w-full
                            </button>
                            <button 
                                onClick={() => toggleClass('w-64')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('w-64') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                w-64
                            </button>
                            <button 
                                onClick={() => toggleClass('h-10')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('h-10') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                h-10
                            </button>
                        </div>
                    </div>
                    
                    {/* Shadows */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Shadows</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('shadow-lg')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('shadow-lg') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                shadow-lg
                            </button>
                            <button 
                                onClick={() => toggleClass('inset-shadow')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('inset-shadow') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                inset-shadow
                            </button>
                            <button 
                                onClick={() => toggleClass('shadow-sm')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('shadow-sm') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                shadow-sm
                            </button>
                        </div>
                    </div>
                    
                    {/* Focus States */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Focus States</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('focus:ring-2')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('focus:ring-2') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                focus:ring-2
                            </button>
                            <button 
                                onClick={() => toggleClass('focus:outline-none')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('focus:outline-none') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                focus:outline-none
                            </button>
                            <button 
                                onClick={() => toggleClass('focus:border-blue-500')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('focus:border-blue-500') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                focus:border-blue-500
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Live CSS Editor */}
                <div>
                    <label className="block text-sm font-medium mb-2">CSS Classes (Edit Live)</label>
                    <textarea 
                        value={cssClasses}
                        onChange={(e) => setCssClasses(e.target.value)}
                        className="w-full p-3 border rounded-md font-mono text-sm h-24 resize-none"
                        placeholder="Classes will appear here as you toggle them above..."
                    />
                </div>
                
                {/* Clear Button */}
                <button 
                    onClick={() => setCssClasses('')}
                    className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Clear All Classes
                </button>
            </div>
        </div>
    )
}