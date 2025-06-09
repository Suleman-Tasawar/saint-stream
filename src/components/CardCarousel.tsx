import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import PopularOfWeek from "./PopularOfWeek";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieCarouselProps ,settings} from "../utils/data";


const MovieCarousel: React.FC<MovieCarouselProps> = ({ movieData, movie, regular }) => {

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movie
          ? movieData.map(
              ({
                id,
                title,
                original_title,
                vote_average,
                genre_ids,
                poster_path,
              }) => (
                <div key={id} className="flex justify-center">
                  <MovieCard
                    Id={id}
                    Title={title || original_title}
                    Rating={vote_average}
                    Category={genre_ids ? genre_ids.join(", ") : "No Genre"}
                    Image={poster_path}
                    CardStyles={regular ? "w-[300px] h-[180px]" : "defaultCardStyle"}
                    regular={regular}
                  />
                </div>
              )
            )
          : movieData.map(
              ({
                id,
                name,
                title,
                vote_average,
                poster_path,
              }) => (
                <PopularOfWeek
                  key={id}
                  Id={id}
                  ranking={1}
                  ImgSrc={poster_path}
                  Pg="PG-13"
                  Rating={vote_average}
                  Title={title || name}
                  Type={title ? "Movie" : "Series"}
                  cardStyles={regular ? "w-[300px] h-[180px]" : "defaultCardStyle"}
                  isMovie={!!title} 
                />
              )
            )}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
