import React from "react";
import Link from "next/link";
import Image from 'next/image'
import DropdownMenu from '../components/DropdownMenu';
import logo from '../components/logo.png'
import fbLogo from './icons/fb.svg';
import linkedInLogo from './icons/linkedIn.svg';
import youtubeLogo from './icons/youtube.svg';

const options = ['English', 'Spanish'];

const LowerNavbar = () => {
  return (
    <div className="bg-[#e2b2ff] text-gray-900 pt-20 px-5">
      <div className="flex flex-col mx-auto max-w-7xl lg:max-w-6xl md:max-w-3xl">
        <div className="flex flex-row items-start justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-10">
          <div className="flex items-start justify-start md:justify-start max-lg:order-1">
            <Image src={logo} alt="cat and dog" width={100} height={100} />
          </div>
          <div className="max-lg:order-2">
            <p className="font-bold text-md">Products</p>
            <p className="mt-4 text-sm">Features</p>
            <p className="mt-3 text-sm">Pricing</p>
          </div>
          <div className="max-lg:order-3">
            <p className="font-bold text-md">Resources</p>
            <p className="mt-4 text-sm">Blog</p>
            <p className="mt-3 text-sm">User Guides</p>
            <p className="mt-3 text-sm">Webinar</p>
          </div>
          <div className="max-lg:order-4">
            <p className="font-bold text-md">Company</p>
            <p className="mt-4 text-sm">About</p>
            <p className="mt-3 text-sm">Join Us</p>
          </div>
          <div className="max-lg:order-5 max-lg:col-span-2 max-xs:max-w-[100%] max-w-[350px]">
            <p className="font-bold text-md">Subscribe to our newsletter</p>
            <p className="mt-1 text-xs">For product and service announcements and exclusive insights</p>
            <div className="flex items-center mt-5 max-xs:flex-col max-xs:gap-2">
              <input
                type="text"
                placeholder="✉ Input your email"
                className="px-2 py-1 focus:outline-none text-md flex-grow max-xs:w-[100%]"
              />
              <button className="text-accent bg-black hover:bg-gray-600 hover:text-accent-600 px-4 py-1 w-max min-w-[110px] max-xs:flex max-xs:mx-0 max-xs:w-[100%] justify-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row lg:flex-row text-sm justify-between items-center py-4 mt-12 border-t border-t-solid border-t-[#fefced]">
          <div className="bg-[#fefced] py-2 px-4">
          <DropdownMenu options={options} placeholder="English" dropUp={true} />
          </div>
          <div className="flex text-sm items-center gap-1 max-md:mt-4 max-sm:flex-col max-sm:mt-5">
            <p className="hover: cursor-default max-sm:block">©2023 Pets.Inc</p>
            <div className="flex items-center gap-1">
              <span className="text-black text-xs max-sm:hidden">&bull;</span>
              <Link href="/privacy">
                <p className=" hover:text-gray-600">Privacy</p>
              </Link>
              <span className="text-black text-xs">&bull;</span>
              <Link href="/terms">
                <p className=" hover:text-gray-600">Terms</p>
              </Link>
              <span className="text-black text-xs">&bull;</span>
              <Link href="/sitemap">
                <p className=" hover:text-gray-600">Sitemap</p>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 max-md:mt-4">
            <Image src={fbLogo} width="24" alt="Follow us on Facebook" />
            <Image src={linkedInLogo} width="24" alt="Follow us on LinkedIn" />
            <Image src={youtubeLogo} width="24" alt="Follow us on Youtube" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LowerNavbar;