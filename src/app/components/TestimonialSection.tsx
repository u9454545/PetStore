'use client';
import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      logo: '/path/to/logo1.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus.',
      profilePic: '/path/to/profile1.png',
      fullName: 'John Doe',
      jobTitle: 'Web Developer'
    },
    {
      id: 2,
      logo: '/path/to/logo2.png',
      text: 'Nullam non neque et dolor rutrum tempor in a ligula. Sed id mauris eu dolor eleifend euismod.',
      profilePic: '/path/to/profile2.png',
      fullName: 'Jane Smith',
      jobTitle: 'Graphic Designer'
    },
    {
      id: 3,
      logo: '/path/to/logo3.png',
      text: 'Vestibulum consectetur elit at mi tempor, ut viverra lorem faucibus. Sed eleifend metus id nibh elementum feugiat.',
      profilePic: '/path/to/profile3.png',
      fullName: 'Alex Johnson',
      jobTitle: 'UX Designer'
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center flex-col">
        <img src={testimonial.logo} alt="Logo" className="w-10 h-10 mb-2" />
        <p className="text-lg font-bold">Testimonial</p>
        <div className="flex items-center mt-2">
          <button className="text-gray-500 mr-2" onClick={handlePrevTestimonial}>
            &lt;
          </button>
          <div className="flex-1">
            <p className="text-center">{testimonial.text}</p>
          </div>
          <button className="text-gray-500 ml-2" onClick={handleNextTestimonial}>
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
