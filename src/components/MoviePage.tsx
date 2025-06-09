import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#0D0C0F] h-screen w-full">
      <iframe
        src={`https://vidsrc.io/embed/movie?tmdb=${id}`}
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
        referrerPolicy="origin"
        allowFullScreen
        title="Movie Player"
      />
    </div>
  );
};

export default MoviePage;
