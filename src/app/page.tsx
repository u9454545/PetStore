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
import Animation from './components/Animation'
import p from './components/pets with owners.jpg'
import q from './components/vet.jpg'
import k from './components/dog-and-cat.jpg'
import App2 from './components/App2'

export default function Home() {
  return (
    
    <div className="relative  ">
     <div className="relative bg-[#fefced] bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
      <Navbar/>
      <div className="overflow-auto" style={{ height: 'calc(100vh - 64px)' }}>
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center font-bold mb-6">Trusted by</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-20">
            <div className="w-28 md:w-auto">
              <Image src={image} alt="Peta" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image2} alt="awa" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image3} alt="apwf" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image4} alt="purina" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image5} alt="petf" width={150} height={50} />
            </div>
          </div>
        </div>
      </section>

  <section className="py-10">
  <div className="container mx-auto flex justify-end">
    <div className="max-w-2xl">
      <div className="w-2/3 p-4 bg-[#fefced]">
        <h2 className="text-2xl font-bold">Section Heading</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="mt-4">
          <button className="bg-[#e2b2ff] text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
          <button className="bg-[#faf2b5] text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
        </div>
      </div>
    </div>
    <div className="w-1/3">
      <Image src={p} alt="Picture"  />
    </div>
  </div>
</section>





      <section className="py-10">
  <div className="container mx-auto flex justify-between">
    <div className="w-1/3">
      <Image src={q} alt="Picture"  />
    </div>
    <div className="max-w-2xl">
      <div className="w-2/3 p-4 bg-[#fefced]">
        <h2 className="text-2xl font-bold">Section Heading</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="mt-4">
          <button className="bg-[#e2b2ff] text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
          <button className="bg-[#faf2b5] text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className=" bg-[#fefced]">
        <TestimonialSection></TestimonialSection>
      </div>

      <PricingSection></PricingSection>

        <section className="py-10 ">
  <div className="container mx-auto flex justify-end">
    <div className="max-w-2xl">
      <div className="w-2/3 p-4 bg-[#fefced]">
        <h2 className="text-2xl font-bold">Section Heading</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="mt-4">
          <button className="bg-[#e2b2ff] text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
          <button className="bg-[#faf2b5] text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
        </div>
      </div>
    </div>
    <div className="w-1/3">
      <Image src={k} alt="Picture"  />
    </div>
  </div>
</section>

      <div className="flex flex-col items-center justify-center w-screen bg-[#fefced]">
        <div className="max-w-2xl p-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-[#fefced]">Section Heading</h2>
          <p className="mb-4 bg-[#fefced]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar
            tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
          </p>
          <div className="flex justify-between">
            <div className="w-1/3">
              <img src="/path/to/picture1.jpg" alt="Picture 1" className="mb-2 rounded-full" />
              <div className="bg-[#fefced] p-2">
                <p>Text in the box</p>
                <h3 className="text-xl font-bold">Box Heading</h3>
              </div>
              <div className="flex justify-between mt-2">
                <p>Date</p>
                <div className="flex items-center bg-[#fefced] rounded-full p-1">
                  <span className="bg-[#faf2b5] text-gray-700 px-2 py-1 rounded-full">Some time</span>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <img src="/path/to/picture2.jpg" alt="Picture 2" className="mb-2 rounded-full" />
              <div className="bg-[#fefced] p-2">
                <p>Text in the box</p>
                <h3 className="text-xl font-bold">Box Heading</h3>
              </div>
              <div className="flex justify-between mt-2">
                <p>Date</p>
                <div className="flex items-center bg-[#fefced] rounded-full p-1">
                  <span className="bg-[#faf2b5] text-gray-700 px-2 py-1 rounded-full">Some time</span>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <img src="/path/to/picture3.jpg" alt="Picture 3" className="mb-2 rounded-full" />
              <div className="bg-[#fefced] p-2">
                <p>Text in the box</p>
                <h3 className="text-xl font-bold">Box Heading</h3>
              </div>
              <div className="flex justify-between mt-2">
                <p>Date</p>
                <div className="flex items-center bg-[#fefced] rounded-full p-1">
                  <span className="bg-[#faf2b5] text-gray-700 px-2 py-1 rounded-full">Some time</span>
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
    </div>
  
    </div> 
  );
}
/*
<div className="relative bg-[#fefced] bg-[url('./components/slide-01.jpg')] bg-hero bg-no-repeat bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
      <Navbar/>
      <div className="overflow-auto" style={{ height: 'calc(100vh - 64px)' }}>
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center font-bold mb-6">Trusted by</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-20">
            <div className="w-28 md:w-auto">
              <Image src={image} alt="Peta" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image2} alt="awa" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image3} alt="apwf" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image4} alt="purina" width={150} height={50} />
            </div>
            <div className="w-28 md:w-auto">
              <Image src={image5} alt="petf" width={150} height={50} />
            </div>
          </div>
        </div>
      </section>

  <section className="py-10">
  <div className="container mx-auto flex justify-end">
    <div className="max-w-2xl">
      <div className="w-2/3 p-4 bg-[#fefced]">
        <h2 className="text-2xl font-bold">Section Heading</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="mt-4">
          <button className="bg-[#e2b2ff] text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
          <button className="bg-[#faf2b5] text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
        </div>
      </div>
    </div>
    <div className="w-1/3">
      <Image src={p} alt="Picture"  />
    </div>
  </div>
</section>





      <section className="py-10">
  <div className="container mx-auto flex justify-between">
    <div className="w-1/3">
      <Image src={q} alt="Picture"  />
    </div>
    <div className="max-w-2xl">
      <div className="w-2/3 p-4 bg-[#fefced]">
        <h2 className="text-2xl font-bold">Section Heading</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="mt-4">
          <button className="bg-[#e2b2ff] text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
          <button className="bg-[#faf2b5] text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className=" bg-[#fefced]">
        <TestimonialSection></TestimonialSection>
      </div>

      <PricingSection></PricingSection>

        <section className="py-10 ">
  <div className="container mx-auto flex justify-end">
    <div className="max-w-2xl">
      <div className="w-2/3 p-4 bg-[#fefced]">
        <h2 className="text-2xl font-bold">Section Heading</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
        </p>
        <div className="mt-4">
          <button className="bg-[#e2b2ff] text-gray-700 border border-gray-700 px-4 py-2 mr-2">Button 1</button>
          <button className="bg-[#faf2b5] text-gray-700 border border-gray-700 px-4 py-2">Button 2</button>
        </div>
      </div>
    </div>
    <div className="w-1/3">
      <Image src={k} alt="Picture"  />
    </div>
  </div>
</section>

      <div className="flex flex-col items-center justify-center w-screen bg-[#fefced]">
        <div className="max-w-2xl p-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-[#fefced]">Section Heading</h2>
          <p className="mb-4 bg-[#fefced]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar
            tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
          </p>
          <div className="flex justify-between">
            <div className="w-1/3">
              <img src="/path/to/picture1.jpg" alt="Picture 1" className="mb-2 rounded-full" />
              <div className="bg-[#fefced] p-2">
                <p>Text in the box</p>
                <h3 className="text-xl font-bold">Box Heading</h3>
              </div>
              <div className="flex justify-between mt-2">
                <p>Date</p>
                <div className="flex items-center bg-[#fefced] rounded-full p-1">
                  <span className="bg-[#faf2b5] text-gray-700 px-2 py-1 rounded-full">Some time</span>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <img src="/path/to/picture2.jpg" alt="Picture 2" className="mb-2 rounded-full" />
              <div className="bg-[#fefced] p-2">
                <p>Text in the box</p>
                <h3 className="text-xl font-bold">Box Heading</h3>
              </div>
              <div className="flex justify-between mt-2">
                <p>Date</p>
                <div className="flex items-center bg-[#fefced] rounded-full p-1">
                  <span className="bg-[#faf2b5] text-gray-700 px-2 py-1 rounded-full">Some time</span>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <img src="/path/to/picture3.jpg" alt="Picture 3" className="mb-2 rounded-full" />
              <div className="bg-[#fefced] p-2">
                <p>Text in the box</p>
                <h3 className="text-xl font-bold">Box Heading</h3>
              </div>
              <div className="flex justify-between mt-2">
                <p>Date</p>
                <div className="flex items-center bg-[#fefced] rounded-full p-1">
                  <span className="bg-[#faf2b5] text-gray-700 px-2 py-1 rounded-full">Some time</span>
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
    </div>
*/

