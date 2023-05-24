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
import TestimonialSection from './components/TestimonialSection'


export default function Home() {
  return (
    <div className="bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center"> 
       
       <Navbar/> 
<section className="py-10  bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">Trusted by</h2>
        <div className="flex justify-center gap-20">
        <Image src={image} alt="Peta" width={100} height={50}  />
        <Image src={image2} alt="awa" width={100} height={50}  />
        <Image src={image3} alt="apwf" width={100} height={50}  />
        <Image src={image4} alt="purina" width={100} height={50}  />
        <Image src={image5} alt="petf" width={100} height={50}  />
        </div>
      </div>
    </section>
    
    <div className="flex items-center justify-center   bg-gray-200">
      <div className="max-w-2xl flex items-center ">
        <div className="w-2/3 p-4 ">
          <h2 className="text-2xl font-bold">Section Heading</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
          </p>
          <div className="mt-4">
            <button className="bg-gray-700 text-white px-4 py-2 mr-2">Button 1</button>
            <button className="text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
          </div>
        </div>
        <div className="w-1/3">
          <img src="/path/to/picture.jpg" alt="Picture" className="rounded-full" />
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center  bg-gray-200">
      <div className="max-w-2xl flex items-center">
        <div className="w-1/3">
          <img src="/path/to/picture.jpg" alt="Picture" className="rounded-full" />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-bold">Section Heading</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
          </p>
          <div className="mt-4">
            <button className="text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
            <button className="bg-gray-700 text-white px-4 py-2">Button 2</button>
          </div>
        </div>
      </div>
    </div> 
    <div className=' bg-gray-200'>
    <TestimonialSection></TestimonialSection>
    </div>
    
  </div>
  )
}
