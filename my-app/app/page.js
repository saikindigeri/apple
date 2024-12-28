'use client'





import { useState } from 'react';
import Image from 'next/image';

const sizes = [42, 46]; // Only the size values

const cases = [
  { type: 'Aluminum', img: '/images/case1.png' },
  { type: 'Aluminum', img: '/images/case2.png' },
  { type: 'Aluminum', img: '/images/case3.png' },
  { type: 'Titanium', img: '/images/case6.png' },
  { type: 'Titanium',  img: '/images/case5.png' },
  { type: 'Titanium',  img: '/images/case4.png' },
];

const bands = [
 
  { type: 'Band 1', img: '/images/band11.png' },
  { type: 'Band 1', img: '/images/band12.png' },
  { type: 'Band 1', img: '/images/band13.png' },
  { type: 'Band 2', img: '/images/band21.png' },
  { type: 'Band 2', img: '/images/band22.png' },
  { type: 'Band 2', img: '/images/band23.png' },
  { type: 'Band 3', img: '/images/band31.png' },
  { type: 'Band 3', img: '/images/band32.png' },
  { type: 'Band 3', img: '/images/band33.png' },
];

export default function WatchCustomizer() {
  const [selectedSize, setSelectedSize] = useState(42); // Default size 42mm
  const [selectedCase, setSelectedCase] = useState(cases[0]); // Default case (Aluminum 42mm)
  const [selectedBand, setSelectedBand] = useState(bands[0]); // Default band

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleCaseSelection = (selectedCase) => {
    setSelectedCase(selectedCase);
  };

  const handleBandSelection = (band) => {
    setSelectedBand(band);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Apple Watch Customizer</h1>

      <div className="flex justify-center items-center space-x-8">
        {/* Watch Preview */}
        <div className="relative w-1/2 h-[400px] flex justify-center">
          {/* Watch Image */}
          <div className="relative">
            {/* Case Image */}
            <Image
              src={selectedCase.img} // Case image is applied here based on selected case
              alt="Watch Preview"
              width={selectedSize === 42 ? 200 : selectedSize === 46 ? 220 : 210} // Adjust size dynamically
              height={selectedSize === 42 ? 200 : selectedSize === 46 ? 220 : 210}
              objectFit="contain"
            />
            {/* Band Image */}
            <Image
              src={selectedBand.img} // Band image is applied based on selected band
              alt={selectedBand.type}
              width={150}
              height={150}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4"
            />
          </div>
        </div>

        {/* Customizer Options */}
        <div className="overflow-hidden w-1/2">
          <div className="space-y-8">
            {/* Size Selection */}
            <div className="flex space-x-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`p-4 border rounded transition-all ${selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                >
                  {size}mm
                </button>
              ))}
            </div>

            {/* Case Selection */}
            <div className="space-x-4 flex overflow-x-auto scrollbar-hide">
              {cases.map((watch) => (
                <div
                  key={watch.type + watch.size}
                  className={`cursor-pointer p-4 border rounded transition-transform ${watch === selectedCase ? 'border-blue-500 transform scale-110' : 'border-gray-300'}`}
                  onClick={() => handleCaseSelection(watch)}
                >
                  <Image
                    src={watch.img}
                    alt={`${watch.type} ${watch.size}mm`}
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                  <p className="text-center mt-2">{watch.type} {watch.size}mm</p>
                </div>
              ))}
            </div>

            {/* Band Selection */}
            <div className="space-x-4 flex overflow-x-auto scrollbar-hide">
              {bands.map((band) => (
                <div
                  key={band.type}
                  className={`cursor-pointer p-4 border rounded transition-transform ${band === selectedBand ? 'border-blue-500 transform scale-110' : 'border-gray-300'}`}
                  onClick={() => handleBandSelection(band)}
                >
                  <Image
                    src={band.img}
                    alt={band.type}
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                  <p className="text-center mt-2">{band.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
