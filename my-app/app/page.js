'use client'  
import { useState, useRef } from 'react';
import Image from 'next/image';

const sizes = [
  { size: 42, img: '/images/aluminium-42.png' },
  { size: 46, img: '/images/aluminium-46.png' },
  { size: 42, img: '/images/titanium-42.png' },
  { size: 46, img: '/images/titanium-46.png' },
  
  
];

const cases = [
  { type: 'Aluminum', size: 42, img: '/images/case1.png.png' },
  { type: 'Aluminum', size: 46, img: '/images/case2.png.png' },
  { type: 'Aluminum', size: 42, img: '/images/case3.png.png' },
  { type: 'Titanium', size: 46, img: '/images/case4.png.png' },
  { type: 'Titanium', size: 44, img: '/images/case5.png.png' },
  { type: 'Titanium', size: 44, img: '/images/case6.png.png' },
];

const bands = [
  { type: 'Band 1', img: '/images/band11.png.jpeg' },
  { type: 'Band 2', img: '/images/band12.png.jpeg' },
  { type: 'Band 3', img: '/images/band13.png.jpeg' },
  { type: 'Band 4', img: '/images/band21.png.jpeg' },
  { type: 'Band 5', img: '/images/band22.png.jpeg' },
  { type: 'Band 6', img: '/images/band23.png.jpeg' },
  { type: 'Band 7', img: '/images/band31.png.jpeg' },
  { type: 'Band 8', img: '/images/band32.png.jpeg' },
  { type: 'Band 9', img: '/images/band33.png.jpeg' },
];

export default function WatchCustomizer() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [selectedBand, setSelectedBand] = useState(bands[0]);

  const scrollRefSize = useRef(null);
  const scrollRefCase = useRef(null);
  const scrollRefBand = useRef(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    const selectedIndex = sizes.findIndex((s) => s.size === size.size);
    const scrollAmount = selectedIndex * 200; // Adjust scrolling offset
    scrollRefSize.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCaseSelection = (watchCase) => {
    setSelectedCase(watchCase);
    const selectedIndex = cases.findIndex((c) => c.img === watchCase.img);
    const scrollAmount = selectedIndex * 200; // Adjust scrolling offset
    scrollRefCase.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };
  const handleBandSelection = (band) => {
    setSelectedBand(band);
    const selectedIndex = bands.findIndex((b) => b.img === band.img);
    const scrollAmount = selectedIndex * 200; // Adjust scrolling offset
    scrollRefBand.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };
console.log(selectedCase)
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Apple Watch Customizer</h1>

      <div className="flex justify-center items-start space-x-8">
        {/* Watch Preview */}
        <div className="w-1/2 h-[400px] flex justify-center">
          <div className="relative w-full h-full">
            <Image
              src={selectedSize.img}
              alt="Watch Preview"
              layout="fill"
              objectFit="contain"
              className="mx-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src={selectedCase.img}
                alt="Watch Case "
               
                width={200}
                height={200}
                className="absolute"
              />
              <Image
                src={selectedBand.img}
                alt="Watch Band"
                width={200}
                height={200}
                className="absolute"
              />
            </div>
          </div>
        </div>

        {/* Selection Controls */}
        <div className="w-1/2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Size</h2>
            <div className="flex space-x-8 overflow-x-auto" ref={scrollRefSize}>
              {sizes.map((size) => (
                <button
                  key={size.size}
                  className={`cursor-pointer p-4 border rounded transition-transform hover:scale-105 ${
                    size.size === selectedSize.size ? 'border-blue-500 transform scale-110' : 'border-gray-300'
                  }`}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size.size}mm
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Case</h2>
            <div className="flex space-x-8 overflow-x-auto" ref={scrollRefCase}>
              {cases.map((watchCase) => (
                <button
                  key={watchCase.img}
                  className={`cursor-pointer p-4 border rounded transition-transform hover:scale-105 ${
                    watchCase.img === selectedCase.img ? 'border-blue-500 transform scale-110' : 'border-gray-300'
                  }`}
                  onClick={() => handleCaseSelection(watchCase)}
                >
                  <Image src={watchCase.img} alt={watchCase.type} width={100} height={100} />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Band</h2>
            <div className="flex space-x-8 overflow-x-auto" ref={scrollRefBand}>
              {bands.map((band) => (
                <button
                  key={band.img}
                  className={`cursor-pointer p-4 border rounded transition-transform hover:scale-105 ${
                    band.img === selectedBand.img ? 'border-blue-500 transform scale-110' : 'border-gray-300'
                  }`}
                  onClick={() => handleBandSelection(band)}
                >
                  <Image src={band.img} alt={band.type} width={100} height={100} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
