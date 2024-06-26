import React from 'react';

const PicCards = ({ icon, title, description }) => {
  return (
    <div className="w-full sm:w-1/5 flex text-center flex-col items-center">
      <img src={icon} alt={title} className="w-20 h-20 mb-4" />
      <h2 className="font-montserrat text-lg font-semibold mb-2">{title}</h2>
      <p className="font-montserrat text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default PicCards;