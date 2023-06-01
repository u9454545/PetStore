'use client';
import React from 'react';
import classNames from 'classnames';

interface CardProps {
  imageSrc: string;
  headingText: string;
  bodyText: string;
  buttonText: string;
  isReversed?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  headingText,
  bodyText,
  buttonText,
  isReversed = false,
}) => {
  const cardWidth = 'calc(100% - 2rem)'; // Assuming x = 100%, subtracting 2rem for the card width

  return (
    <div className={classNames('flex', isReversed ? 'flex-row-reverse' : 'flex-row')}>
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-xl mb-2">{headingText}</h2>
        <p className="mb-4">{bodyText}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-200 rounded-lg shadow-lg"
        style={{ width: cardWidth  }}
      >
        <img src={imageSrc} alt="Card Image" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Card;
