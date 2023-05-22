import React from "react";
import Link from "next/link";
import Image from 'next/image'
import image2 from '../components/dog.png'
//"bg-gray-900 text-gray-300 mb-8
//grid grid-flow-col

const LowerNavbar = () => {
  return (
    <>
    <div className="grid grid-flow-col  flex flex-col h-5 bg-yellow-400 text-gray-900 mb-8 absolute inset-x-0 bottom-0 h-16 ... ">
    <Image src={image2} alt="cat and dog" width={50} height={10}  />
    <div>
    <p><b>Products</b></p>
    <p>features</p>
    <p>pricing</p>
    </div>

    <div>
    <p><b>Resources</b></p> 
    <p>Blog</p>
    <p>user guides</p>
    </div>

    <div>
    <p><b>Company</b></p> 
    <p>About</p>
    <p>Join us</p>
    </div>
    
    <div>
    <p><b>Subscribe to our newsletter</b></p> 
    <p>For product and service announcements and exclusive insights</p>
    <input type="text"/>✉ Input your email
    <button>Subscribe</button>
    </div>
     

    

</div>
    <footer className="bg-yellow-400">
        <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center">
        <ul className="bg-yellow-400 grid grid-cols-4 absolute bottom-0 center-0 ...">
        <li>©2023 Pets.Inc</li>
        <li>
         Privacy
        </li>   
        <li>    
        Terms
        </li>
        <li>
        Sitemap
        </li>
        </ul>
        <img></img>
        </div>
        </footer>

      </>
  );
};
export default LowerNavbar;