'use client'
import { useState } from 'react';
import Image from 'next/image';

const collections = [
  { name: 'Series 10' },
  { name: 'Hermès' },
  { name: 'SE' },
];

const watches = {
  Aluminum: [
    { size: 42, img: '/images/aluminium-42.png' },
    { size: 46, img: '/images/aluminium-46.png' },
  ],
  Titanium: [
    { size: 42, img: '/images/titanium-42.png' },
    { size: 46, img: '/images/titanium-46.png' },
  ],
};

const bands = [
  { type: 'Solo Loop', styles: ['Blue', 'Green', 'Black', 'White'] },
  { type: 'Braided Loop', styles: ['Red', 'Yellow', 'Purple', 'Gray'] },
  { type: 'Sport Band', styles: ['Orange', 'Pink', 'Navy', 'Teal'] },
  { type: 'Leather', styles: ['Brown', 'Black', 'White', 'Tan'] },
  { type: 'Metal', styles: ['Silver', 'Gold', 'Graphite', 'Space Black'] },
];

export default function WatchCustomizer() {
  const [selectedCollection, setSelectedCollection] = useState(collections[0].name);
  const [selectedCase, setSelectedCase] = useState('Aluminum');
  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedBand, setSelectedBand] = useState(bands[0]);
  const [selectedStyle, setSelectedStyle] = useState(bands[0].styles[0]);

  const watchImage = watches[selectedCase].find((w) => w.size === selectedSize).img; 
  console.log(watchImage)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Apple Watch Customizer</h1>

      {/* Collections */}
      <div className="flex justify-center space-x-6 mb-10">
        {collections.map((col, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded ${col.name === selectedCollection ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCollection(col.name)}
          >
            {col.name}
          </button>
        ))}
      </div>

      {/* Watch Preview */}
      <div className="flex justify-center mb-10">
        <Image src={watchImage} alt="Watch Preview" width={300} height={300} />
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-8">
        {/* Size Selection */}
        <div>
          <h2 className="text-lg font-medium mb-4">Size</h2>
          <div className="flex space-x-4">
            {[42, 46].map((size) => (
              <button
                key={size}
                className={`px-6 py-2 rounded ${size === selectedSize ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}mm
              </button>
            ))}
          </div>
        </div>

        {/* Case Selection */}
        <div>
          <h2 className="text-lg font-medium mb-4">Case</h2>
          <div className="flex space-x-4">
            {['Aluminum', 'Titanium'].map((caseType) => (
              <button
                key={caseType}
                className={`px-6 py-2 rounded ${caseType === selectedCase ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedCase(caseType)}
              >
                {caseType}
              </button>
            ))}
          </div>
        </div>

        {/* Band Selection */}
        <div>
          <h2 className="text-lg font-medium mb-4">Band</h2>
          <div className="overflow-x-scroll flex space-x-4 pb-4">
            {bands.map((band, index) => (
              <div
                key={index}
                className={`cursor-pointer p-4 border rounded ${band.type === selectedBand.type ? 'border-blue-500' : 'border-gray-300'}`}
                onClick={() => setSelectedBand(band)}
              >
                <p>{band.type}</p>
                <div className="flex space-x-2 mt-2">
                  {band.styles.map((style, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full cursor-pointer ${style === selectedStyle ? 'ring-2 ring-blue-500' : ''}`}
                      style={{ backgroundColor: style.toLowerCase() }}
                      onClick={() => setSelectedStyle(style)}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
