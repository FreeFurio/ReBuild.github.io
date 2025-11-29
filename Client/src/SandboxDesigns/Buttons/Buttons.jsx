import { useState } from 'react'

export function Button() {
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
            {/* Button Preview */}
            <div className="flex items-center justify-center w-1/2 bg-gray-100 rounded-lg p-8">
                <button className={cssClasses}>
                    Preview Button
                </button>
            </div>

            {/* Controls */}
            <div className="w-1/2 space-y-4">
                <h2 className="text-xl font-bold">Button Customizer</h2>

                {/* Toggle Buttons */}
                <div>
                    <label className="block text-sm font-medium mb-2">Style Toggles</label>

                    {/* Background */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Background</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={() => toggleClass('bg-blue-500')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('bg-blue-500') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                bg-blue-500
                            </button>
                            <button
                                onClick={() => toggleClass('bg-red-500')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('bg-red-500') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                bg-red-500
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
                                onClick={() => toggleClass('text-white')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('text-white') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                text-white
                            </button>
                            <button
                                onClick={() => toggleClass('text-black')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('text-black') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                text-black
                            </button>
                            <button
                                onClick={() => toggleClass('font-bold')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('font-bold') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                font-bold
                            </button>
                        </div>
                    </div>

                    {/* Padding */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Padding</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={() => toggleClass('px-4')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('px-4') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                px-4
                            </button>
                            <button
                                onClick={() => toggleClass('py-2')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('py-2') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                py-2
                            </button>
                            <button
                                onClick={() => toggleClass('p-6')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('p-6') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                p-6
                            </button>
                        </div>
                    </div>

                    {/* Border Radius */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Border Radius</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={() => toggleClass('rounded-lg')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('rounded-lg') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                rounded-lg
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
                                onClick={() => toggleClass('shadow-md')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('shadow-md') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                shadow-md
                            </button>
                            <button
                                onClick={() => toggleClass('shadow-none')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('shadow-none') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                shadow-none
                            </button>
                        </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-600 mb-1">Hover Effects</h4>
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={() => toggleClass('hover:bg-blue-600')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('hover:bg-blue-600') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                hover:bg-blue-600
                            </button>
                            <button
                                onClick={() => toggleClass('hover:scale-105')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('hover:scale-105') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                hover:scale-105
                            </button>
                            <button
                                onClick={() => toggleClass('cursor-pointer')}
                                className={`p-2 text-xs border rounded ${cssClasses.includes('cursor-pointer') ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            >
                                cursor-pointer
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
