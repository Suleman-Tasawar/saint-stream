import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Carousal from "../components/Carousal";
import MovieCarousel from "../components/CardCarousel";
import {
  getMoviesData,
  getSeriesData,
  getJustReleaseData,
} from "../utils/API/movieApi";

const Home = () => {
  const [justRelease, setJustRelease] = useState<any>([]);
  const [movieData, setMovieData] = useState<any>([]);
  const [seriesData, setSeriesData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMoviesData();
      const series = await getSeriesData();
      const latest = await getJustReleaseData();

      setMovieData(movies);
      setSeriesData(series);
      setJustRelease(latest);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Hero movieData={movieData.slice(0, 4)} />

      <section className="bg-[#0D0C0F] pt-5">
        <Carousal />
      </section>

      <section className="bg-[#0D0C0F] h-[500px] pt-2">
        <h1 className="text-2xl font-black text-white">Just Released</h1>
        <MovieCarousel movieData={justRelease} />
      </section>

      <section className="bg-[#0D0C0F] h-[500px] pt-2">
        <h1 className="text-2xl font-black text-white">Popular of the Week</h1>
        <MovieCarousel movieData={seriesData} />
      </section>

      <section className="bg-[#0D0C0F] h-[500px] pt-2">
        <h1 className="text-2xl font-black text-white">Movies</h1>
        <MovieCarousel movieData={movieData} movie regular />
      </section>

      <section className="bg-[#0D0C0F] h-[500px] pt-2">
        <h1 className="text-2xl font-black text-white">Series</h1>
        <MovieCarousel movieData={seriesData} />
      </section>
    </div>
  );
};

export default Home;
