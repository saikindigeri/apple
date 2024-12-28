'use client'  
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const collections = [
  { name: 'Series 10' },
  { name: 'Hermès' },
  { name: 'SE' },
];

const cases = [
  { type: 'Aluminum', size: 42, img: '/images/aluminium-42.png' },
  { type: 'Aluminum', size: 46, img: '/images/aluminium-46.png' },
  { type: 'Titanium', size: 42, img: '/images/titanium-42.png' },
  { type: 'Titanium', size: 46, img: '/images/titanium-46.png' },
  { type: 'Aluminum', size: 44, img: '/images/aluminium-44.png' },
  { type: 'Titanium', size: 44, img: '/images/titanium-44.png' },
];

const bands = [
  { type: 'Solo Loop', styles: ['Blue', 'Green', 'Black', 'White'] },
  { type: 'Braided Loop', styles: ['Red', 'Yellow', 'Purple', 'Gray'] },
  { type: 'Sport Band', styles: ['Orange', 'Pink', 'Navy', 'Teal'] },
  { type: 'Leather', styles: ['Brown', 'Black', 'White', 'Tan'] },
  { type: 'Metal', styles: ['Silver', 'Gold', 'Graphite', 'Space Black'] },
];

export default function WatchCustomizer() {
  const [selectedCollection, setSelectedCollection] = useState(collections[0].name);
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [selectedBand, setSelectedBand] = useState(bands[0]);
  const [selectedStyle, setSelectedStyle] = useState(bands[0].styles[0]);
  const scrollRef = useRef(null);

  const handleCaseSelection = (selected) => {
    setSelectedCase(selected);
  };

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

      {/* Watch Preview and Cases */}
      <div className="flex justify-center space-x-10 items-center">
        <div className="grid grid-cols-3 gap-6">
          {cases.map((watch, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 border rounded transition-transform ${watch === selectedCase ? 'border-blue-500 transform scale-110' : 'border-gray-300'}`}
              onClick={() => handleCaseSelection(watch)}
            >
              <Image src={watch.img} alt={watch.type} width={150} height={150} className="mx-auto" />
              <p className="text-center mt-2">{watch.type} {watch.size}mm</p>
            </div>
          ))}
        </div>

        <div className="">
          <Image src={selectedCase.img} alt="Watch Preview" width={300} height={300} />
        </div>
      </div>

      {/* Band Selection */}
      <div className="grid grid-cols-2 gap-8 mt-10">
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
