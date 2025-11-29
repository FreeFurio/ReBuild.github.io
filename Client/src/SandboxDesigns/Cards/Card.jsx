import { useState } from 'react'

export function Card() {
    const [bgColor, setBgColor] = useState('bg-white')
    const [textColor, setTextColor] = useState('text-gray-900')
    const [padding, setPadding] = useState('p-6')
    const [rounded, setRounded] = useState('rounded-lg')
    const [shadow, setShadow] = useState('shadow-md')
    const [border, setBorder] = useState('')
    const [borderColor, setBorderColor] = useState('border-gray-300')
    const [width, setWidth] = useState('w-80')
    
    const cardClass = `${bgColor} ${textColor} ${padding} ${rounded} ${shadow} ${border} ${border ? borderColor : ''} ${width}`
    
    return (
        <div className="flex gap-8 p-8">
            {/* Card Preview */}
            <div className="flex items-center justify-center w-1/2 bg-gray-100 rounded-lg p-8">
                <div className={cardClass}>
                    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                    <p className="text-sm mb-4">This is a sample card description. You can customize the appearance using the controls.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">Action</button>
                </div>
            </div>
            
            {/* Controls */}
            <div className="w-1/2 space-y-4">
                <h2 className="text-xl font-bold">Card Customizer</h2>
                
                {/* Background Color */}
                <div>
                    <label className="block text-sm font-medium mb-2">Background Color</label>
                    <select value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full p-2 border rounded">
                        <option value="bg-white">White</option>
                        <option value="bg-gray-50">Light Gray</option>
                        <option value="bg-blue-50">Light Blue</option>
                        <option value="bg-green-50">Light Green</option>
                        <option value="bg-red-50">Light Red</option>
                        <option value="bg-yellow-50">Light Yellow</option>
                    </select>
                </div>
                
                {/* Text Color */}
                <div>
                    <label className="block text-sm font-medium mb-2">Text Color</label>
                    <select value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full p-2 border rounded">
                        <option value="text-gray-900">Dark Gray</option>
                        <option value="text-black">Black</option>
                        <option value="text-blue-900">Dark Blue</option>
                        <option value="text-green-900">Dark Green</option>
                    </select>
                </div>
                
                {/* Padding */}
                <div>
                    <label className="block text-sm font-medium mb-2">Padding</label>
                    <select value={padding} onChange={(e) => setPadding(e.target.value)} className="w-full p-2 border rounded">
                        <option value="p-2">Small (p-2)</option>
                        <option value="p-4">Medium (p-4)</option>
                        <option value="p-6">Large (p-6)</option>
                        <option value="p-8">Extra Large (p-8)</option>
                    </select>
                </div>
                
                {/* Width */}
                <div>
                    <label className="block text-sm font-medium mb-2">Width</label>
                    <select value={width} onChange={(e) => setWidth(e.target.value)} className="w-full p-2 border rounded">
                        <option value="w-64">Small (w-64)</option>
                        <option value="w-80">Medium (w-80)</option>
                        <option value="w-96">Large (w-96)</option>
                        <option value="w-full">Full Width</option>
                    </select>
                </div>
                
                {/* Border Radius */}
                <div>
                    <label className="block text-sm font-medium mb-2">Border Radius</label>
                    <select value={rounded} onChange={(e) => setRounded(e.target.value)} className="w-full p-2 border rounded">
                        <option value="rounded-none">None</option>
                        <option value="rounded-sm">Small</option>
                        <option value="rounded-md">Medium</option>
                        <option value="rounded-lg">Large</option>
                        <option value="rounded-xl">Extra Large</option>
                        <option value="rounded-2xl">2X Large</option>
                    </select>
                </div>
                
                {/* Shadow */}
                <div>
                    <label className="block text-sm font-medium mb-2">Shadow</label>
                    <select value={shadow} onChange={(e) => setShadow(e.target.value)} className="w-full p-2 border rounded">
                        <option value="">None</option>
                        <option value="shadow-sm">Small</option>
                        <option value="shadow-md">Medium</option>
                        <option value="shadow-lg">Large</option>
                        <option value="shadow-xl">Extra Large</option>
                        <option value="shadow-2xl">2X Large</option>
                    </select>
                </div>
                
                {/* Border */}
                <div>
                    <label className="block text-sm font-medium mb-2">Border Style</label>
                    <select value={border} onChange={(e) => setBorder(e.target.value)} className="w-full p-2 border rounded">
                        <option value="">None</option>
                        <option value="border">Solid Border</option>
                        <option value="border-2">Thick Border</option>
                        <option value="border-dashed">Dashed Border</option>
                        <option value="border-dotted">Dotted Border</option>
                    </select>
                </div>
                
                {/* Border Color */}
                {border && (
                    <div>
                        <label className="block text-sm font-medium mb-2">Border Color</label>
                        <select value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="w-full p-2 border rounded">
                            <option value="border-gray-300">Light Gray</option>
                            <option value="border-gray-500">Gray</option>
                            <option value="border-blue-500">Blue</option>
                            <option value="border-green-500">Green</option>
                            <option value="border-red-500">Red</option>
                        </select>
                    </div>
                )}
                
                {/* Generated Code */}
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <label className="block text-sm font-medium mb-2">Generated CSS Classes:</label>
                    <code className="text-sm break-all">{cardClass}</code>
                </div>
            </div>
        </div>
    )
}