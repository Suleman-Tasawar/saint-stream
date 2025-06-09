import { ImageSlideSrc } from "../components/Images";

export const ImageSlide = [
  {
    id: 1,
    image: ImageSlideSrc.amazon,
  },
  {
    id: 2,
    image: ImageSlideSrc.hboMaz,
  },
  {
    id: 3,
    image: ImageSlideSrc.hulu,
  },
  {
    id: 4,
    image: ImageSlideSrc.marvel,
  },
  {
    id: 5,
    image: ImageSlideSrc.nationalGeo,
  },
  {
    id: 6,
    image: ImageSlideSrc.netflix,
  },
  {
    id: 7,
    image: ImageSlideSrc.starwars,
  },
];

export interface MovieCarouselProps {
  movieData: any[];
  movie?: boolean;
  regular?: boolean;
}

export interface CarousalBoxProps{
    Image:string;
}


export interface HeroInfoItem {
  label: string;
  value: string;
}

export interface Movie {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export interface MovieCardProps {
  Id:number;
  Title: string;
  Rating: string;
  Category: string;
  Image: string;
  CardStyles: string;
  BoxStyle?: string;
  regular?: boolean;
}

export interface HeroProps {
  movieData: Movie[];
}

export interface NavbarProps {
  styles?: string;
}

export interface PopularOfWeekInterface {
  Id:number;
  ranking: number;
  ImgSrc: string;
  Pg: string;
  Title: string;
  Type: string;
  Rating: string;
  isMovie: boolean;
  cardStyles: string;
}

export const settings = {
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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const setting2 = {
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
