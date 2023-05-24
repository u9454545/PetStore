import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from "./components/Navbar"
import LowerNavbar from './components/LowerNavbar'
import image from './components/peta.png'
import image2 from './components/awa.png'
import image3 from './components/apwf.png'
import image4 from './components/purina.png'
import image5 from './components/petf.png'



export default function Home() {
  return (
    <div className="bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center"> 
      <Navbar/>  

    <section className="py-10 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">Trusted by</h2>
        <div className="flex justify-center gap-4">
        <Image src={image} alt="Peta" width={100} height={50}  />
        <Image src={image2} alt="awa" width={100} height={50}  />
        <Image src={image3} alt="apwf" width={100} height={50}  />
        <Image src={image4} alt="purina" width={100} height={50}  />
        <Image src={image5} alt="petf" width={100} height={50}  />
        </div>
      </div>
    </section>

      <footer className=" top-0 z-50 bg-white shadow flex items-center justify-center">
      
    </footer> 
  </div>
  )
}
