import React, { useState, useEffect } from "react";
import { HeroInfoItem,HeroProps } from "../utils/data";
import Button from "./Button";


const Hero: React.FC<HeroProps> = ({ movieData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const currentMovie = movieData[currentIndex];

  const info: HeroInfoItem[] = [
    { label: "Release Date", value: currentMovie?.release_date || "N/A" },
    { label: "Rating", value: `${currentMovie?.vote_average || "N/A"}` },
  ];

  const bgImage = currentMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`
    : "/assets/images/2151061383.jpg";

  useEffect(() => {
    setIsImageLoaded(false);
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsImageLoaded(true);
  }, [bgImage]);

  return (
    <div className="relative w-full h-[750px] lg:h-[500px] px-10 lg:px-5">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="relative z-10 max-w-2xl px:5 lg:px-0 py-0 lg:py-14">
        <div className="w-14 bg-black text-white rounded-full">Movie</div>

        <div className="mt-10">
          <h1 className="mt-3 font-extrabold text-white text-3xl">
            {currentMovie?.title || "Loading..."}
          </h1>
        </div>

        <div className="mt-5">
          <ul className="flex flex-col lg:flex-row gap-4">
            {info.map((item, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-semibold text-white">{item.label}:</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-white">{currentMovie?.overview}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-10">
          <Button
            ButtonStyle="w-[200px] h-14 bg-green-700 text-white font-bold hover:bg-transparent hover:border-[1px] hover:border-white rounded-2xl"
            ButtonText="Watch Trailer"
          />
          <Button
            ButtonStyle="w-[200px] ml-5 h-14 bg-transparent text-white border-[1px] border-white font-bold hover:bg-green-500 rounded-2xl"
            ButtonText="Add Watchlist"
          />
        </div>
      </div>

      <div className="absolute top-[90%] right-10 flex gap-2 z-20">
        {movieData.slice(0, 4).map((_, index) => (
          <input
            key={index}
            type="radio"
            name="movie-selector"
            checked={index === currentIndex}
            onChange={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
