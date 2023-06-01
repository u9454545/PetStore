'use client';
import React, { MouseEvent } from 'react';
import image from '../components/headturn.jpg'

const Animation: React.FC = () => {
  const start = (event: MouseEvent<HTMLDivElement>) => {
    const img = event.currentTarget;
    const pos = (1715 / event.clientX).toFixed(0);
    const val = 876 * Number(pos);
    img.style.backgroundPosition = `${val}px`;
  };

  return (
    <>
      <div
        id="img"
        className="w-876 h-390 m-2 mx-auto bg-url('headturn.jpg')"
        onMouseMove={start}
      ></div>
      <div className="text-gray-500">
        Move your cursor to see in 3D
      </div>
    </>
  );
};

export default Animation;
