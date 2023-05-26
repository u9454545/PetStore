import React from "react";
import Link from "next/link";
import Image from 'next/image'
import DropdownMenu from '../components/DropdownMenu';
import logo from '../components/logo.png'

const options = ['English', 'Spanish', 'Mandarin Chinese', 'Hindi', 'Arabic'];

const LowerNavbar = () => {
  return (
    <>
      <div className="bg-yellow-400 text-gray-900">
        <div className="grid md:grid-cols-4 py-4 px-8 gap-4">
          <div className="flex items-center md:w-300">
            <Image src={logo} alt="cat and dog" width={100} height={100} />
          </div>
          <div className="md:space-y-2">
            <p className="font-bold">Products</p>
            <p>features</p>
            <p>pricing</p>
          </div>
          <div className="md:space-y-2">
            <p className="font-bold">Resources</p>
            <p>Blog</p>
            <p>user guides</p>
          </div>
          <div className="md:space-y-2">
            <p className="font-bold">Company</p>
            <p>About</p>
            <p>Join us</p>
          </div>
          <div className="md:space-y-2">
            <p className="font-bold">Subscribe to our newsletter</p>
            <p>For product and service announcements and exclusive insights</p>
            <div className="flex">
              <input
                type="text"
                placeholder="✉ Input your email"
                className="rounded-l px-2 py-1 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-1 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow flex flex-col md:flex-row items-center justify-center py-4 px-8">
      <div className="p-2">
        <DropdownMenu options={options} placeholder="English" />
      </div>
      <nav className="flex items-center space-x-4 md:ml-4">
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
      </nav>
      <div className="flex items-center mt-4 md:mt-0">
        <Image src="/path/to/logo1.png" alt="Logo 1" width={24} height={24} />
        <Image src="/path/to/logo2.png" alt="Logo 2" width={24} height={24} />
        <Image src="/path/to/logo3.png" alt="Logo 3" width={24} height={24} />
      </div>
    </div>
    </>
  );
};

export default LowerNavbar;
