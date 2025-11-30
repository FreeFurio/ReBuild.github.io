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
                        <div className="grid grid-cols-2 gap-1">
                            <button 
                                onClick={() => toggleClass('bg-white')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('bg-white') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                {cssClasses.includes('bg-white') ? 'ON' : 'OFF'}
                            </button>
                            <span className="text-xs text-gray-500 flex items-center">bg-white</span>
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
                        <div className="grid grid-cols-2 gap-1">
                            <button 
                                onClick={() => toggleClass('border')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('border') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                {cssClasses.includes('border') ? 'ON' : 'OFF'}
                            </button>
                            <span className="text-xs text-gray-500 flex items-center">border</span>
                        </div>
                    </div>
                    
                    {/* Border Radius */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Border Radius</h4>
                        <div className="grid grid-cols-2 gap-1">
                            <button 
                                onClick={() => toggleClass('rounded-md')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('rounded-md') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                {cssClasses.includes('rounded-md') ? 'ON' : 'OFF'}
                            </button>
                            <span className="text-xs text-gray-500 flex items-center">rounded-md</span>
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
                    
                    {/* Shadow */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Shadow</h4>
                        <div className="grid grid-cols-2 gap-1">
                            <button 
                                onClick={() => toggleClass('shadow-lg')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('shadow-lg') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                {cssClasses.includes('shadow-lg') ? 'ON' : 'OFF'}
                            </button>
                            <span className="text-xs text-gray-500 flex items-center">shadow-lg</span>
                        </div>
                    </div>
                    
                    {/* Focus State */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Focus State</h4>
                        <div className="grid grid-cols-2 gap-1">
                            <button 
                                onClick={() => toggleClass('focus:ring-2')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('focus:ring-2') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                {cssClasses.includes('focus:ring-2') ? 'ON' : 'OFF'}
                            </button>
                            <span className="text-xs text-gray-500 flex items-center">focus:ring-2</span>
                        </div>
                    </div>
                    
                    {/* Overflow */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Overflow</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('overflow-hidden')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('overflow-hidden') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                overflow-hidden
                            </button>
                            <button 
                                onClick={() => toggleClass('overflow-scroll')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('overflow-scroll') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                overflow-scroll
                            </button>
                            <button 
                                onClick={() => toggleClass('overflow-auto')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('overflow-auto') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                overflow-auto
                            </button>
                        </div>
                    </div>
                    
                    {/* Hover Effects */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Hover Effects</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button 
                                onClick={() => toggleClass('hover:bg-gray-50')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('hover:bg-gray-50') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                hover:bg-gray-50
                            </button>
                            <button 
                                onClick={() => toggleClass('hover:border-blue-400')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('hover:border-blue-400') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                hover:border-blue-400
                            </button>
                            <button 
                                onClick={() => toggleClass('hover:shadow-md')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('hover:shadow-md') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                hover:shadow-md
                            </button>
                        </div>
                    </div>
                    
                    {/* Outline */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Outline</h4>
                        <div className="grid grid-cols-2 gap-1">
                            <button 
                                onClick={() => toggleClass('outline-none')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('outline-none') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                {cssClasses.includes('outline-none') ? 'ON' : 'OFF'}
                            </button>
                            <span className="text-xs text-gray-500 flex items-center">outline-none</span>
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