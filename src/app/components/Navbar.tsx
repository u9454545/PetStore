//'use client';
// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import image1 from '../components/slide-01.jpg'
import image2 from '../components/f2.png'
import image3 from '../components/dog.png'

const Navbar = () => {
  return (
    <>
    <div className=" grid grid-flow-col bg-yellow-400  sticky top-0 ">
    
  <Image src={image3} alt="cat and dog" width={50} height={10}  />
  <input></input>
  <Link href="/pricing" className="margin-center">Pricing</Link>   
  <Link href="/contact">Contact</Link>    
  <Link href="/about">About us</Link>

    </div>
      <div className="flex justify-center">
      <div className="max-w-screen-xl">
     <Image src={image1} alt="Two dogs" width={1000} height={800} className="w-full" />
    </div>
</div>


</>
    
      
  );
};
export default Navbar;
