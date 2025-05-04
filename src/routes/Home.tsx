import Hero from "../components/Hero";
import Carousal from "../components/Carousal";
import MovieCarousel from "../components/CardCarousel";
const Home = () => {
  return (
    <div>
      <Hero
        Type="Movie"
        Title="The Saint Chronicles"
        info={[
          { label: "Category", value: "Action / Thriller" },
          { label: "Year", value: "2025" },
          { label: "Duration", value: "2h 13min" },
          { label: "Rating", value: "PG-13" },
        ]}
        Desc="A gripping tale of justice, rebellion, and secrets lost in time. Follow the journey of a former priest turned vigilante who uncovers a conspiracy within the highest ranks of the church."
      />
      <section className="bg-[#0D0C0F] pt-5">
        <Carousal />
      </section>
      <section className="bg-[#0D0C0F] h-[500px] pt-5">
        <h1 className="text-2xl font-black text-white">Movies</h1>
      <MovieCarousel/>
      </section>
    </div>
  );
};

export default Home;
