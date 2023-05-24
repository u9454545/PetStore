import React from "react";
import Link from "next/link";
import Image from 'next/image'
import image2 from '../components/logo.png'
import DropdownMenu from '../components/DropdownMenu';

const options = [
  'English',
  'Spanish',
  'Mandarin Chinese',
  'Hindi',
  'Arabic'
]

const LowerNavbar = () => {
  return (
    <>
    <div className="grid grid-flow-col  flex flex-col h-5 bg-yellow-400 text-gray-900 mb-8 absolute inset-x-0 bottom-0 h-16 ... ">
    <Image src={image2} alt="cat and dog" width={50} height={10}  />
    <div>
    <p><b>Products</b></p>
    <p>features</p>
    <p>pricing</p>
    </div>

    <div>
    <p><b>Resources</b></p> 
    <p>Blog</p>
    <p>user guides</p>
    </div>

    <div>
    <p><b>Company</b></p> 
    <p>About</p>
    <p>Join us</p>
    </div>
    
    <div>
    <p><b>Subscribe to our newsletter</b></p> 
    <p>For product and service announcements and exclusive insights</p>
    <input type="text"/>✉ Input your email
    <button>Subscribe</button>
    </div>
     

    

</div>
<div className=" top-0 z-50 bg-white shadow flex items-center justify-center">
<div className="p-2">
        <DropdownMenu options={options} placeholder="English"/>
        </div>
        
      <nav className="flex  items-center justify-between py-4 px-8">
        <div className="flex items-center space-x-4">
          
            <p className="font-bold hover:text-gray-600">©2023 Pets.Inc</p>
          <Link href="/privacy">
            <p className="font-bold hover:text-gray-600">Privacy</p>
          </Link>
          <Link href="/terms">
            <p className="font-bold hover:text-gray-600">Terms</p>
          </Link>
          <Link href="/sitemap">
            <p className="font-bold hover:text-gray-600">Sitemap</p>
          </Link>
        </div>
      </nav>
    </div> 
    

      </>
  );
};
export default LowerNavbar;