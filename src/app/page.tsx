import Image, { StaticImageData } from 'next/image'
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
import p from './components/petswithowners.jpg'
import q from './components/vet.jpg'
import k from './components/dog-and-cat.jpg'
import App2 from './components/App2'
import heroImage from './components/slide-01.jpg';

interface Blog {
  title: string,
  picture: StaticImageData,
  category: string,
  date: string,
  duration: number,
}

export default function Home() {
  const blogs: Blog[] = [
    {
      category: 'Do consectetour',
      title: 'Peta',
      date: new Date().toLocaleDateString(),
      picture: image,
      duration: 3,
    },
    {
      category: 'Do consectetour',
      title: 'Awa',
      date: new Date().toLocaleDateString(),
      picture: image2,
      duration: 5,
    },
    {
      category: 'Do consectetour',
      title: 'Apfw',
      date: new Date().toLocaleDateString(),
      picture: image3,
      duration: 3,
    }
  ];

  return (

    <div className="relative ">
      <div className="relative bg-[#fefced] bg-hero bg-no-repeat bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[1400px]">
      <div>
        <Navbar />
         {/* Hero Section */}
      <section
        className="flex flex-col mt-16 mx-auto items-center max-w-7xl lg:max-w-6xl md:max-w-3xl max-sm:mt-12 w-full px-5 md:px-0"
      >
        <div className="flex flex-col max-w-3xl mx-auto gap-y-6">
          <h1 className="text-6xl max-xs:text-4xl font-bold text-center">Welcome to our Pet Store!</h1>
          <h3 className="text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.</h3>
          <div className="flex gap-5 items-center justify-center max-sm:gap-2 max-sm:flex-col">
            <Link href="/join" className='max-sm:w-[100%] text-center'>
              <p className="text-accent py-3 px-14 border-black border-solid border-2 max-sm:border bg-black hover:bg-gray-600 hover:border-gray-600 max-sm:px-5">Join us now</p>
            </Link>
            <Link href="/demo" className='max-sm:w-[100%] text-center'>
              <p className="text-black py-3 px-14 border-black border-solid border-2 max-sm:border hover:text-gray-600 hover:border-gray-600 max-sm:px-5">Request demo</p>
            </Link>
          </div>
        </div>
        <Image className="object-cover object-center h-full w-full mt-12" src={heroImage} alt="Hero Image" />
      </section>
        
          <section className="py-32 max-sm:py-16 bg-[#fefced]">
            <div className="container mx-auto px-5">
              <h2 className="text-2xl text-center font-bold my-14 max-sm:my-8">Trusted by</h2>
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
          
          <section className="py-20 bg-[#fefced] px-5 max-sm:bg-gray-100">
            <div className="container mx-auto flex max-w-7xl lg:max-w-6xl md:max-w-3xl max-sm:justify-center">
              <div className="flex grid-cols-2 gap-40 items-center max-sm:flex-col max-sm:max-w-[420px] max-sm:gap-5 max-md:gap-12">
                <div className="w-1/2 max-sm:w-full max-sm:order-2">
                  <h2 className="text-4xl font-bold">Section Heading</h2>
                  <p className="mt-14 max-sm:mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
                  </p>
                  <div className="flex flex-row mt-6 gap-2 items-start max-xs:flex-col max-xs:justify-center">
                    <Link href="/try" className='max-xs:w-[100%] max-xs:text-center'>
                      <p className="text-accent max-sm:px-5 max-md:px-4 py-3 px-8  bg-black hover:bg-gray-600 hover:text-accent-600">Try now</p>
                    </Link>
                    <Link href="/more" className='max-xs:w-[100%] max-xs:text-center'>
                      <p className="text-black max-sm:px-5 max-md:px-4 py-3 px-8  hover:text-gray-600">Learn more</p>
                    </Link>
                  </div>
                </div>
                <div className="w-1/2 max-sm:w-full max-sm:order-1">
                  <Image src={p} className="h-full w-full" alt="Picture" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#fefced] px-5">
            <div className="container flex mx-auto max-w-7xl lg:max-w-6xl md:max-w-3xl max-sm:justify-center">
              <div className="flex gap-40 items-center max-sm:flex-col max-sm:max-w-[420px] max-sm:gap-5 max-md:gap-12">
                <div className="w-1/2 max-sm:w-full">
                  <Image src={q} className="h-full w-full" alt="Picture" />
                </div>
                <div className="w-1/2 max-sm:w-full">
                  <h2 className="text-4xl font-bold">Section Heading</h2>
                  <p className="mt-14 max-sm:mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
                  </p>
                  <div className="flex flex-row mt-6 gap-2 items-start max-xs:flex-col">
                    <Link href="/try" className='max-xs:w-[100%] max-xs:text-center'>
                      <p className="text-accent max-sm:px-5 max-md:px-4 py-3 px-8  bg-black hover:bg-gray-600 hover:text-accent-600">Try now</p>
                    </Link>
                    <Link href="/more" className='max-xs:w-[100%] max-xs:text-center'>
                      <p className="text-black max-sm:px-5 max-md:px-4 py-3 px-8  hover:text-gray-600">Learn more</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className=" bg-[#faf2b5] pt-24 pb-20 px-5">
            <TestimonialSection />
          </div>

          <div className="bg-[#fefced] px-5">
            <PricingSection />
          </div>

          <section className="py-32 px-5 max-sm:bg-gray-100 max-sm:py-20">
            <div className="mx-auto flex max-w-7xl lg:max-w-6xl md:max-w-3xl max-sm:flex-col max-sm:max-w-[420px] max-sm:gap-5 border border-gray-300">
              <div className="flex w-1/2 max-sm:w-full max-sm:order-2">
                <div className="py-20 px-14 max-sm:py-5 max-sm:px-5">
                  <h2 className="text-5xl font-bold">Get started!</h2>
                  <p className="mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
                  </p>
                  <div className="flex mt-6">
                    <Link href="/signup">
                      <p className="text-accent py-4 px-8 bg-black hover:bg-gray-600 hover:text-accent-600">Sign up</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 max-sm:w-full max-sm:order-1">
                <Image src={k} alt="Picture" className='object-cover' />
              </div>
            </div>
          </section>

          <section className='bg-[#fefced] px-5'>
            <div className="flex flex-col items-center justify-center py-24 mx-auto max-w-1xl lg:max-w-6xl md:max-w-3xl">
              <div className="max-w-6xl">
                <h2 className="text-5xl font-bold text-center bg-[#fefced]">Whats new?</h2>
                <p className="mt-6 bg-[#fefced] text-center mx-auto max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar
                  tellus. Morbi sit amet sapien ac quam fermentum iaculis id at sem.
                </p>
                <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {
                    blogs.map(blog => (
                      <div key={blog.title} className="flex flex-col border-solid border-gray-300 border bg-white p-4 justify-between max-w-[420px]">
                        <div className='p-12 text-center items-center'><Image src={blog.picture} alt="Blog" /></div>
                        <div className='pb-4'>
                          <p className='text-md'>{blog.category}</p>
                          <h3 className="text-xl font-bold">{blog.title}</h3>
                          <div className="flex justify-between items-center mt-4">
                            <p className='text-sm'>{blog.date}</p>
                            <div className="flex items-center rounded-full">
                              <span className=" text-black text-xs px-2 py-1 border-solid border-gray-700 border rounded-full">{blog.duration} minutes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="flex justify-center">
                  <Link href="/more_articles">
                    <p className="text-accent py-2 px-4 mt-14 bg-black hover:bg-gray-600 hover:text-accent-600">See more articles</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <LowerNavbar />
        </div>
      </div>
     
    </div>
  );
}
