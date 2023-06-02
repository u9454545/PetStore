'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import john from './john.png'
import johncompany from './john_company.png'
import alex from './alex.png'
import alexcompany from './alex_company.jpeg'
import jane from './jane.png'
import janecompany from './jane_company.jpg'
import micheal from './rsz_micheal.png'
import michealcomapny from './micheal_company.png'
import sarah from './sarah.png'
import sarahcompany from './sarah_company.png'




const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      logo: johncompany,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus.',
      profilePic: john,
      fullName: 'John Doe',
      jobTitle: 'Web Developer'
    },
    {
      id: 2,
      logo: janecompany,
      text: 'Nullam non neque et dolor rutrum tempor in a ligula. Sed id mauris eu dolor eleifend euismod.',
      profilePic: jane,
      fullName: 'Jane Smith',
      jobTitle: 'Graphic Designer'
    },
    {
      id: 3,
      logo: alexcompany,
      text: 'Vestibulum consectetur elit at mi tempor, ut viverra lorem faucibus. Sed eleifend metus id nibh elementum feugiat.',
      profilePic: alex,
      fullName: 'Alex Johnson',
      jobTitle: 'UX Designer'
    },
    {
      id: 4,
      logo: sarahcompany,
      text: 'Cras auctor mattis odio nec varius. Pellentesque at mi consectetur, congue nulla a, fermentum orci.',
      profilePic: sarah,
      fullName: 'Sarah Davis',
      jobTitle: 'Marketing Manager'
    },
    {
      id: 5,
      logo: michealcomapny,
      text: 'Fusce rutrum elit eget dolor lobortis, in accumsan lectus pretium. Proin congue enim eu tincidunt feugiat.',
      profilePic: micheal,
      fullName: 'Michael Wilson',
      jobTitle: 'Product Manager'
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center flex-col h-xl">
        <div className="h-16">
         <Image src={testimonial.logo} alt="Logo" className="w-20" />
        </div>
        <p className="font-bold text-lg mt-5">Torquent</p>
        <div className="flex items-center mt-10 h-20 gap-24">
          <button
            className="text-black text-1xl py-5 px-6 bg-black bg-opacity-5 text-center"
            onClick={handlePrevTestimonial}
          >
            &lt;
          </button>
          <div className="flex-1 max-w-3xl">
            <p className="text-center text-3xl">{testimonial.text}</p>
          </div>
          <button
            className="text-black text-1xl py-5 px-6 bg-black bg-opacity-5 text-center"
            onClick={handleNextTestimonial}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <div>
          <Image
            src={testimonial.profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-2"
          />
        </div>
        <div className='ml-3'>
          <span className="font-bold">{testimonial.fullName} - </span>
          <span>{testimonial.jobTitle}</span>
        </div>
      </div>
    </div>

  );
};

export default TestimonialSection;



