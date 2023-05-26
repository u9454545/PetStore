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
import PricingSection from './components/PricingSection'
import Card from './components/Card'



export default function Home() {
  return (
    <div className="bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center">
        
  
       
       <Navbar/> 
       <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">Trusted by</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-20">
          <div className="w-28 md:w-auto">
            <Image src={image} alt="Peta" width={100} height={50} />
          </div>
          <div className="w-28 md:w-auto">
            <Image src={image2} alt="awa" width={100} height={50} />
          </div>
          <div className="w-28 md:w-auto">
            <Image src={image3} alt="apwf" width={100} height={50} />
          </div>
          <div className="w-28 md:w-auto">
            <Image src={image4} alt="purina" width={100} height={50} />
          </div>
          <div className="w-28 md:w-auto">
            <Image src={image5} alt="petf" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
    
    <div className="flex items-center justify-center  ">
      <div className="max-w-2xl flex items-center ">
        <div className="w-2/3 p-4  bg-gray-200  ">
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
    

    <div className="flex items-center justify-center  ">
      <div className="max-w-2xl flex items-center">
        <div className="w-1/3">
          <img src="/path/to/picture.jpg" alt="Picture" className="rounded-full" />
        </div>
        <div className="w-2/3 p-4 bg-gray-200">
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
   
    <PricingSection></PricingSection>
    
    <div className="flex items-center justify-center max-w-screen-xl ">
      <div className="max-w-2xl flex items-center ">
        <div className="w-2/3 p-4  bg-gray-200  ">
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

    <div className="flex flex-col items-center justify-center w-screen">
      <div className="max-w-2xl p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Section Heading</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="flex justify-between">
          <div className="w-1/3">
            <img src="/path/to/picture1.jpg" alt="Picture 1" className="mb-2 rounded-full" />
            <div className="bg-gray-200 p-2">
              <p>Text in the box</p>
              <h3 className="text-xl font-bold">Box Heading</h3>
            </div>
            <div className="flex justify-between mt-2">
              <p>Date</p>
              <div className="flex items-center bg-gray-200 rounded-full p-1">
                <span className="bg-gray-700 text-white px-2 py-1 rounded-full">Some time</span>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <img src="/path/to/picture2.jpg" alt="Picture 2" className="mb-2 rounded-full" />
            <div className="bg-gray-200 p-2">
              <p>Text in the box</p>
              <h3 className="text-xl font-bold">Box Heading</h3>
            </div>
            <div className="flex justify-between mt-2">
              <p>Date</p>
              <div className="flex items-center bg-gray-200 rounded-full p-1">
                <span className="bg-gray-700 text-white px-2 py-1 rounded-full">Some time</span>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <img src="/path/to/picture3.jpg" alt="Picture 3" className="mb-2 rounded-full" />
            <div className="bg-gray-200 p-2">
              <p>Text in the box</p>
              <h3 className="text-xl font-bold">Box Heading</h3>
            </div>
            <div className="flex justify-between mt-2">
              <p>Date</p>
              <div className="flex items-center bg-gray-200 rounded-full p-1">
                <span className="bg-gray-700 text-white px-2 py-1 rounded-full">Some time</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            See more articles
          </button>
        </div>
      </div>
    </div>
    
    <LowerNavbar></LowerNavbar>

  </div>
  
  )
}





