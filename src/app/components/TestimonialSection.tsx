'use client';
import React, { useEffect, useState } from 'react';
import john from '../components/john.png'
import johncompany from '../components/john company.png'
import alex from '../components/alex.png'
import alexcompany from '../components/alex company.jpeg'
import jane  from '../components/jane.png'
import janecompany from '../components/jane comapny.jpg'
import micheal from '../components/micheal.png'
import michealcomapny from '../components/micheal company.png'
import sarah from '../components/sarah.png'
import sarahcompany from '../components/sarah company.png'




const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      logo: '../components/john company.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus.',
      profilePic: '../components/john.png',
      fullName: 'John Doe',
      jobTitle: 'Web Developer'
    },
    {
      id: 2,
      logo: '../components/jane comapny.jpg',
      text: 'Nullam non neque et dolor rutrum tempor in a ligula. Sed id mauris eu dolor eleifend euismod.',
      profilePic: '../components/jane.png',
      fullName: 'Jane Smith',
      jobTitle: 'Graphic Designer'
    },
    {
      id: 3,
      logo: '../components/alex company.jpeg',
      text: 'Vestibulum consectetur elit at mi tempor, ut viverra lorem faucibus. Sed eleifend metus id nibh elementum feugiat.',
      profilePic: '../components/alex.png', 
      fullName: 'Alex Johnson',
      jobTitle: 'UX Designer'
    },
    {
      id: 4,
      logo: '../components/sarah company.png',
      text: 'Cras auctor mattis odio nec varius. Pellentesque at mi consectetur, congue nulla a, fermentum orci.',
      profilePic: '../components/sarah.png',
      fullName: 'Sarah Davis',
      jobTitle: 'Marketing Manager'
    },
    {
      id: 5,
      logo: '/path/to/logo5.png',
      text: 'Fusce rutrum elit eget dolor lobortis, in accumsan lectus pretium. Proin congue enim eu tincidunt feugiat.',
      profilePic: '/path/to/profile5.png',
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
      <div className="flex items-center flex-col">
        <img src={testimonial.logo} alt="Logo" className="w-10 h-10 mb-2" />
        <p className="text-lg font-bold">Testimonial</p>
        <div className="flex items-center mt-2">
          <button
            className="text-gray-500 mr-2"
            onClick={handlePrevTestimonial}
          >
            &lt;
          </button>
          <div className="flex-1">
            <p className="text-center">{testimonial.text}</p>
          </div>
          <button
            className="text-gray-500 ml-2"
            onClick={handleNextTestimonial}
          >
            &gt;
          </button>
        </div>
        </div>
      <div className="flex items-center mt-4">
        <img
          src={testimonial.profilePic}
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">{testimonial.fullName}</p>
          <p className="text-gray-500">{`- ${testimonial.jobTitle}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

     

