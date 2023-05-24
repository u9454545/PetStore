import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from "./components/Navbar"
import LowerNavbar from './components/LowerNavbar'
//import image from './components/slide-01.jpg'


export default function Home() {
  return (
    <div className="bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center"> 
      <Navbar/>  
      <footer className=" top-0 z-50 bg-white shadow flex items-center justify-center">
      <nav className="flex items-center justify-between py-4 px-8">
        
        <div className="flex items-center space-x-4">
          <Link href="/products">
            <p className="font-bold hover:text-gray-600">Trusted by</p>
          </Link>
          
          <Link href="/pricing">
            <p className="font-bold hover:text-gray-600">Peta</p>
          </Link>
          <Link href="/about">
            <p className="font-bold hover:text-gray-600">Terms</p>
          </Link>
          <Link href="/contact">
            <p className="font-bold hover:text-gray-600">Sitemap</p>
          </Link>
          </div>
      </nav>
    </footer> 
  </div>
  )
}
