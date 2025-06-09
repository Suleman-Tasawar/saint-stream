import React from "react";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { PopularOfWeekInterface } from "../utils/data";

const PopularOfWeek: React.FC<PopularOfWeekInterface> = ({
  Id,
  ranking,
  ImgSrc,
  Pg,
  Title,
  Type,
  Rating,
  isMovie,
  cardStyles,
}) => {
  return (
    <Link to = {`/series/${Id}`}>
      <div className={`${cardStyles} w-full max-w-xl flex justify-center items-center`}>
      <div>
        <h1 className="text-white font-black text-4xl">{ranking}</h1>
      </div>
      <div className="flex justify-center items-center ml-2">
        <div className="w-[150px] h-[200px]">
          <img
            className="w-full h-full object-contain rounded-3xl"
            src={`https://image.tmdb.org/t/p/w500${ImgSrc}`}
            alt={Title}
          />
        </div>
        <div className="">
          <div className="w-20 h-10 border-[1px] border-gray-500 rounded-2xl p-0.5 text-gray-300 text-center">
            {Pg}
          </div>
          <div className="mt-2">
            <h1 className="text-white text-2xl font-bold">{Title}</h1>
          </div>
          <div className="mt-2">
            <h3 className="text-gray-500 text-md">{Type}</h3>
          </div>

          <div className="flex justify-left mt-2">
            <IoStarSharp className="text-yellow-400 text-xl"/>
            <p className="text-white">{Rating} | </p>
            <p className="text-gray-500">{isMovie ? " Movie" : " Series"}</p>
          </div>
        </div>
      </div>
     </div>
    </Link>
  );
};

export default PopularOfWeek;
