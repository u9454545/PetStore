'use client';
import React, { useState } from 'react';

interface PricingOption {
  id: string;
  label: string;
  price: string;
  features: string[];
}

const PricingSection: React.FC = () => {
  const pricingOptions: PricingOption[] = [
    {
      id: 'monthly',
      label: 'Monthly',
      price: '$10',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 'yearly',
      label: 'Yearly',
      price: '$90',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    }
  ];

  const [selectedOption, setSelectedOption] = useState<string>(pricingOptions[0].id);

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const renderFeatures = () => {
    const selectedPricingOption = pricingOptions.find((option) => option.id === selectedOption);

    if (selectedPricingOption) {
      return selectedPricingOption.features.map((feature, index) => (
        <div key={index} className="flex items-center mb-2 bg-[#fefced]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.707 7.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 14.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <p>{feature}</p>
        </div>
      ));
    }

    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#fefced] p-4">
      <p className="text-lg font-bold mb-4">Pricing</p>
      <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
        {pricingOptions.map((option) => (
          <button
            key={option.id}
            className={`py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedOption === option.id ? 'bg-white text-gray-800' : 'bg-gray-200 text-gray-500'
            }`}
            onClick={() => handleOptionChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 bg-[#fefced]">
        {pricingOptions.map((option) => (
          <div
            key={option.id}
            className={`bg-white rounded-md shadow-md p-4 ${
              selectedOption === option.id ? 'border-2 border-[#fefced]' : ''
            }`}
            >
            <p className="text-lg font-bold mb-2">{option.label}</p>
            <p className="text-gray-500 mb-2">{option.price} / user / month</p>
            {renderFeatures()}
            <div className="flex items-center mt-4">
            <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-4 w-4 text-green-500 mr-2"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                       >
            <path
                           fillRule="evenodd"
                           d="M17.707 7.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 14.586l7.293-7.293a1 1 0 011.414 0z"
                           clipRule="evenodd"
                         />
            </svg>
            <p className="text-green-500 mr-2">Some text</p>
            <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-4 w-4 text-red-500 mr-2"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                       >
            <path
                           fillRule="evenodd"
                           d="M13.707 6.293a1 1 0 010 1.414L8.414 12l5.293 5.293a1 1 0 01-1.414 1.414L7 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L5.586 12 .293 6.707A1 1 0 011.707 5.293L7 10.586l5.293-5.293a1 1 0 011.414 0z"
                           clipRule="evenodd"
                         />
            </svg>
            <p className="text-red-500">Some text</p>
            </div>
            </div>
            ))}
            </div>
            <button className="py-2 px-4 bg-gray-500 text-white rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300">
            Upgrade
            </button>
            </div>
            );
            };
            
            export default PricingSection;
