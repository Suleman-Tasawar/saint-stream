import React from 'react';
import Slider from "react-slick";
import MovieCard from './MovieCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel: React.FC = () => {
    const movieData = [
        {
            id: 1,
            Title: 'Inception',
            Rating: '8.8',
            Category: 'Sci-Fi',
            Image: 'https://placehold.co/250x350?text=Inception',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 2,
            Title: 'The Dark Knight',
            Rating: '9.0',
            Category: 'Action',
            Image: 'https://placehold.co/250x350?text=The+Dark+Knight',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 3,
            Title: 'Interstellar',
            Rating: '8.6',
            Category: 'Adventure',
            Image: 'https://placehold.co/250x350?text=Interstellar',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 4,
            Title: 'The Matrix',
            Rating: '8.7',
            Category: 'Action',
            Image: 'https://placehold.co/250x350?text=The+Matrix',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 5,
            Title: 'Parasite',
            Rating: '8.6',
            Category: 'Drama',
            Image: 'https://placehold.co/250x350?text=Parasite',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 6,
            Title: 'The Shawshank Redemption',
            Rating: '9.3',
            Category: 'Drama',
            Image: 'https://placehold.co/250x350?text=Shawshank+Redemption',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 7,
            Title: 'Forrest Gump',
            Rating: '8.8',
            Category: 'Drama',
            Image: 'https://placehold.co/250x350?text=Forrest+Gump',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 8,
            Title: 'The Godfather',
            Rating: '9.2',
            Category: 'Crime',
            Image: 'https://placehold.co/250x350?text=The+Godfather',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 9,
            Title: 'Gladiator',
            Rating: '8.5',
            Category: 'Action',
            Image: 'https://placehold.co/250x350?text=Gladiator',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 10,
            Title: 'Fight Club',
            Rating: '8.8',
            Category: 'Drama',
            Image: 'https://placehold.co/250x350?text=Fight+Club',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 11,
            Title: 'The Lion King',
            Rating: '8.5',
            Category: 'Animation',
            Image: 'https://placehold.co/250x350?text=The+Lion+King',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 12,
            Title: 'Pulp Fiction',
            Rating: '8.9',
            Category: 'Crime',
            Image: 'https://placehold.co/250x350?text=Pulp+Fiction',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 13,
            Title: 'The Dark Knight Rises',
            Rating: '8.4',
            Category: 'Action',
            Image: 'https://placehold.co/250x350?text=The+Dark+Knight+Rises',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 14,
            Title: 'Avatar',
            Rating: '7.8',
            Category: 'Sci-Fi',
            Image: 'https://placehold.co/250x350?text=Avatar',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 15,
            Title: 'Joker',
            Rating: '8.4',
            Category: 'Thriller',
            Image: 'https://placehold.co/250x350?text=Joker',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 16,
            Title: 'The Avengers',
            Rating: '8.0',
            Category: 'Action',
            Image: 'https://placehold.co/250x350?text=The+Avengers',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 17,
            Title: 'The Social Network',
            Rating: '8.0',
            Category: 'Biography',
            Image: 'https://placehold.co/250x350?text=The+Social+Network',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 18,
            Title: 'Whiplash',
            Rating: '8.5',
            Category: 'Drama',
            Image: 'https://placehold.co/250x350?text=Whiplash',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 19,
            Title: 'Django Unchained',
            Rating: '8.4',
            Category: 'Western',
            Image: 'https://placehold.co/250x350?text=Django+Unchained',
            CardStyles: 'w-[250px] h-[350px]',
        },
        {
            id: 20,
            Title: 'Blade Runner 2049',
            Rating: '8.0',
            Category: 'Sci-Fi',
            Image: 'https://placehold.co/250x350?text=Blade+Runner+2049',
            CardStyles: 'w-[250px] h-[350px]',
        },
    ];
    
   const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className= "slider-container">
            <Slider {...settings}>
                {movieData.map(({ id, Title, Rating, Category, Image, CardStyles }) => (
                    <div key={id} className="flex justify-center">
                        <MovieCard 
                            Title={Title}
                            Rating={Rating}
                            Category={Category}
                            Image={Image}
                            CardStyles={CardStyles}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCarousel;
