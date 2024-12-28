'use client'  
import { useState, useRef } from 'react';
import Image from 'next/image';

const cases = [
  { type: 'Aluminum', size: 42, img: '/images/aluminium-42.png' },
  { type: 'Aluminum', size: 46, img: '/images/aluminium-46.png' },
  { type: 'Titanium', size: 42, img: '/images/titanium-42.png' },
  { type: 'Titanium', size: 46, img: '/images/titanium-46.png' },
  { type: 'Aluminum', size: 44, img: '/images/aluminium-42.png' },
  { type: 'Titanium', size: 44, img: '/images/titanium-46.png' },
];

export default function WatchCustomizer() {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const scrollRef = useRef(null);

  const handleCaseSelection = (selected) => {
    setSelectedCase(selected);
    const selectedIndex = cases.findIndex((c) => c.type === selected.type && c.size === selected.size);
    const scrollAmount = selectedIndex * 200; // Adjust scrolling offset
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Apple Watch Customizer</h1>

      <div className="flex justify-center items-start space-x-8">
        {/* Watch Preview */}
        <div className="w-1/2 h-[400px] flex justify-center">
          <div className="relative w-full h-full">
            <Image
              src={selectedCase.img}
              alt="Watch Preview"
              layout="fill"
              objectFit="contain"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Watch Case List */}
        <div className="w-1/2">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {cases.map((watch, index) => (
              <div
                key={index}
                className={`cursor-pointer p-4 border rounded transition-transform hover:scale-105 ${
                  watch === selectedCase ? 'border-blue-500 transform scale-110' : 'border-gray-300'
                }`}
                onClick={() => handleCaseSelection(watch)}
              >
                <Image src={watch.img} alt={watch.type} width={150} height={150} className="mx-auto" />
                <p className="text-center mt-2">{watch.type} {watch.size}mm</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
