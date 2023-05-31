import React from "react";
import Link from "next/link";
import Image from 'next/image'
import DropdownMenu from '../components/DropdownMenu';
import logo from '../components/logo.png'

const options = ['English', 'Spanish', 'Mandarin Chinese', 'Hindi', 'Arabic'];

const LowerNavbar = () => {
  return (
    <>
      <div className="bg-[#e2b2ff] text-gray-900">
      <div className="flex items-center justify-center md:justify-start">
          <Image src={logo} alt="cat and dog" width={100} height={100} />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 px-8 gap-4">
        
        <div className="md:space-y-2">
          <p className="font-bold">Products</p>
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div className="md:space-y-2">
          <p className="font-bold">Resources</p>
          <p>Blog</p>
          <p>User Guides</p>
        </div>
        <div className="md:space-y-2">
          <p className="font-bold">Company</p>
          <p>About</p>
          <p>Join Us</p>
        </div>
        <div className="md:space-y-2">
          <p className="font-bold">Subscribe to Our Newsletter</p>
          <p>For product and service announcements and exclusive insights</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <input
              type="text"
              placeholder="✉ Input your email"
              className="rounded-l px-2 py-1 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-r mt-2 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow flex flex-col md:flex-row items-center justify-between py-4 px-8">
      <div className="p-2">
        <DropdownMenu options={options} placeholder="English" />
      </div>
      <div className="flex flex-col items-center mx-auto ml-200">
    <div className="flex items-center space-x-4 ml-4">
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
  </div>
      <div className="flex items-center mt-4 md:mt-0 ml-auto">
  <Image src="/path/to/logo1.png" alt="Logo 1" width={24} height={24} />
  <Image src="/path/to/logo2.png" alt="Logo 2" width={24} height={24} />
  <Image src="/path/to/logo3.png" alt="Logo 3" width={24} height={24} />
</div>

    </div>
    </>
  );
};

export default LowerNavbar;
