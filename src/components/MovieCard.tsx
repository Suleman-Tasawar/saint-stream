import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MovieCardProps } from "../utils/data";

const MovieCard: React.FC<MovieCardProps> = ({
  Id,
  Title,
  CardStyles,
  Category,
  Image,
  Rating,
  BoxStyle,
  regular,
}) => {
  //uses the tmdb movie id to redirect to VidSrc api for streaming movie
  return (
    <Link to = {`/movie/${Id}`}>   
    <div
      className={`relative  rounded-3xl shadow-md shadow-black cursor-pointer`}
    >
      <div
        className={` bg-cover bg-center ${CardStyles}`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${Image})`,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.7)",
        }}
      ></div>
      <div
        className={`${
          regular !? " absolute  bottom-0" : "w-full max-w-3xl"
        } ${BoxStyle}  bg-gradient-to-t from-black to-transparent p-4`}
      >
        <h2 className="text-white">{Title}</h2>
        <div className="flex justify-center items-center w-full">
          <IoStarSharp className="text-yellow-400 text-xl" />
          <h3 className="font-bold text-xl text-white">{Rating} | </h3>{" "}
          <span className="text-gray-700"> {Category}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
