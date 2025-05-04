import React from 'react';
import { FaTools } from 'react-icons/fa';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6 animate-bounce">
          <FaTools className="text-yellow-400 text-6xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Under Construction</h1>
        <p className="text-gray-300 mb-6 text-lg">
          We're working hard to bring you something awesome. This page will be ready soon!
        </p>
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold shadow hover:shadow-lg transition duration-300">
            🚧 Please check back later!
          </span>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
