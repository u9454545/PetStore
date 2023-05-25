//'use client';
// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import DropdownMenu from '../components/DropdownMenu';
import logo from '../components/logo.png'

const options = ['Pet food', 'Be the vet', 'personalized tips,routine and medicines'];

const Navbar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="flex items-center justify-between py-4 px-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image src={logo} alt="Peta" width={100} height={50} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/products">
              <DropdownMenu options={options} placeholder="Products" />
            </Link>
            <Link href="/pricing">
              <p className="font-bold hover:text-gray-600">Pricing</p>
            </Link>
            <Link href="/about">
              <p className="font-bold hover:text-gray-600">About Us</p>
            </Link>
            <Link href="/contact">
              <p className="font-bold hover:text-gray-600">Contact</p>
            </Link>
            <Link href="/blog">
              <p className="font-bold hover:text-gray-600">Blog</p>
            </Link>
            <Link href="/signin">
              <p className="font-bold hover:text-gray-600">Sign In</p>
            </Link>
            <Link href="/signup">
              <p className="font-bold hover:text-gray-600">Sign Up</p>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <button className="text-gray-600 focus:outline-none">
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
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen" style={{ backgroundImage: 'url("/path/to/image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-4xl font-bold">Welcome to our Pet Store!</h1>
      </section>
    </div>
  );
};

export default Navbar;

