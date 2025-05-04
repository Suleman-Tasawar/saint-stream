import React from "react";
import Button from "./Button";
import { ImageSlideSrc } from "./Images";
interface HeroInfoItem {
  label: string;
  value: string;
}

interface HeroProps {
  Type: string;
  Title: string;
  info: HeroInfoItem[];
  Desc: string;
}
//bg-[url('/assets/images/2151061383.jpg')]

const Hero: React.FC<HeroProps> = ({ Type, Title, info, Desc }) => {
  return (
    <div
    className="relative w-full h-[750px] lg:h-[500px] px-10 lg:px-5 bg-cover bg-center"
    style={{ backgroundImage: `url(${ImageSlideSrc.hero})` }}
  >
      <div className=" max-w-2xl px:5 lg:px-0 py-0 lg:py-14 ">
        <div className="w-14 bg-black text-white rounded-full">{Type}</div>

        <div className="mt-10">
          <h1 className="mt-3 font-extrabold text-white text-3xl">{Title}</h1>
        </div>

        <div className="mt-5">
          <ul className="flex flex-col lg:flex-row gap-4">
            {info?.map((item, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-semibold text-white">{item.label}:</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-white">{Desc}</p>
        </div>
        <div className="flex flex-col lg:flex-row  items-center mt-10">
          <Button
            ButtonStyle="w-[200px] h-14 bg-green-700 text-white font-bold  hover:bg-transparent hover:border-[1px] hover:border-white rounded-2xl"
            ButtonText="Watch Trailer"
          />
          <Button
            ButtonStyle="w-[200px] ml-5 h-14 bg-transparent text-white border-[1px] border-white font-bold hover:bg-green-500 rounded-2xl"
            ButtonText="Add Watchlist"
          />
        </div>
      </div>
      <div className="absolute top-[90%] right-10">
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />

      </div>
    </div>
  );
};

export default Hero;
