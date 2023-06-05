'use client';
// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenu from '../components/DropdownMenu';
import logo from '../components/logo.png';
import heroImage from '../components/slide-01.jpg';

const options = ['Pet food', 'Be the vet', 'Personalized tips, routine and medicines'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 bg-[#e2b2ff]">
        <nav className="flex items-center justify-between py-4 px-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <p>
                <Image src={logo} alt="Peta" width={100} height={50} />
              </p>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10">
            <Link href="/products">
              <p>
                <DropdownMenu options={options} placeholder="Products" />
              </p>
            </Link>
            <Link href="/pricing">
              <p className="hover:text-gray-600">Pricing</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-gray-600">About Us</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-600">Contact</p>
            </Link>
            <Link href="/blog">
              <p className="hover:text-gray-600">Blog</p>
            </Link>
          </div>
            
          <div className="hidden md:flex items-center space-x-5">
            
            <Link href="/signin">
              <p className="hover:text-gray-600">Sign In</p>
            </Link>
            <Link href="/signup">
              <p className="text-accent py-2 px-4 bg-black hover:bg-gray-600">Sign Up</p>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-8 space-y-4">
            <Link href="/products">
              <p className="font-bold hover:text-gray-600 block">Products</p>
            </Link>
            <Link href="/pricing">
              <p className="font-bold hover:text-gray-600 block">Pricing</p>
            </Link>
            <Link href="/about">
              <p className="font-bold hover:text-gray-600 block">About Us</p>
            </Link>
            <Link href="/contact">
              <p className="font-bold hover:text-gray-600 block">Contact</p>
            </Link>
            <Link href="/blog">
              <p className="font-bold hover:text-gray-600 block">Blog</p>
            </Link>
            <Link href="/signin">
              <p className="font-bold hover:text-gray-600 block">Sign In</p>
            </Link>
            <Link href="/signup">
              <p className="font-bold hover:text-gray-600 block">Sign Up</p>
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="flex flex-col mt-16 px-5 mx-auto items-center max-w-7xl lg:max-w-6xl md:max-w-3xl"
      >
        <div className="flex flex-col max-w-3xl mx-auto gap-y-6">
          <h1 className="text-6xl font-bold text-center">Welcome to our Pet Store!</h1>
          <h3 className="text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.</h3>
          <div className="flex gap-5 items-center justify-center">
            <Link href="/join">
              <p className="text-accent py-3 px-14 border-black border-solid border-2 bg-black hover:bg-gray-600 hover:border-gray-600 max-sm:text-sm max-sm:w-max max-sm:px-5 max-sm:min-w-[120px]">Join us now</p>
            </Link>
            <Link href="/demo">
              <p className="text-black py-3 px-14 border-black border-solid border-2 hover:text-gray-600 hover:border-gray-600 max-sm:text-sm max-sm:w-max max-sm:px-5 max-sm:min-w-[120px]">Request demo</p>
            </Link>
          </div>
        </div>
        <Image className="object-cover object-center h-full w-full mt-12" src={heroImage} alt="Hero Image" />
      </section>
    </div>
  );
};

export default Navbar;
