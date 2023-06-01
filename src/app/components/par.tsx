'use client';
import React from 'react';
import moon from '../components/moon.png';
import land from '../components/l.png';
import cat from '../components/cat.gif';
import Image from 'next/image';

import { useRef } from 'react';


function App() {
  const ref = useRef(null);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-[url('./components/moon.png')] "
          style={{ backgroundImage: `url(${moon})` }}
        />

        <div className="relative flex-1 w-full">
          <div className="absolute inset-0 bg-no-repeat bg-cover bg-[url('./components/l.png"  style={{ backgroundImage: `url(${land})` }}/ >
         

          <div className="sticky top-0 py-8 text-center" style={{ zIndex: 100 }}>
            <Image src={cat} alt='cat' />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-8">Welcome to our pet store </h2>
            <button
              className="text-lg px-4 py-2 rounded-lg bg-blue-500 text-white"
              onClick={() => ref.current.scrollTo(3)}
            >
              Scroll to Hi Mom!
            </button>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-8">Hi There</h2>
            <button
              className="text-lg px-4 py-2 rounded-lg bg-blue-500 text-white"
              onClick={() => ref.current.scrollTo(0)}
            >
              Scroll to Welcome
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
