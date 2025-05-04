import React from "react";
import { IoStarSharp } from "react-icons/io5";

interface MovieCardProps {
  Title: string;
  Rating: string;
  Category: string;
  Image: string;
  CardStyles: string;
}
const MovieCard: React.FC<MovieCardProps> = ({
  Title,
  CardStyles,
  Category,
  Image,
  Rating,
}) => {
  return (
    <div
      className={`relative ${CardStyles} bg-cover bg-center shadow-md shadow-black cursor-pointer`}
      style={{
        backgroundImage: `url(${Image})`,
        // Add the shadow beneath the card
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.7)", // black shadow at the bottom
      }}
    >
      <div className="absolute w-full bottom-0  bg-gradient-to-t from-black to-transparent p-4">
        <h2 className="text-white">{Title}</h2>
        <div className="flex justify-center items-center w-full">
          <IoStarSharp className="text-yellow-400 text-xl" />
          <h3 className="font-bold text-xl text-white">
            {Rating} |{" "}
          </h3>{" "}
          <span className="text-gray-700"> {Category}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
