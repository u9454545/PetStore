import Image from 'next/image'
//import Link from 'next/link'
import Head from 'next/head'
import Navbar from "./components/Navbar"
import LowerNavbar from './components/LowerNavbar'
//import image from './components/slide-01.jpg'


export default function Home() {
  return (
    <div className="bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center"> 
      <Navbar/>  

     <LowerNavbar/>
  </div>
  )
}
