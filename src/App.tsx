import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Layout from './components/Layout';
import MoviePage from './components/MoviePage';
import SeriesPage from './routes/SeriesPage';
//import UnderConstruction from './routes/UnderConstruction';

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/movie/:id' element={<MoviePage />} />
         <Route path='/series/:id' element={<SeriesPage />} />
        {/* <Route path='/discover' element={<UnderConstruction />} />
        <Route path='/movie-release' element={<UnderConstruction />} />
        <Route path='/forum' element={<UnderConstruction />} /> */}
      </Routes>
    </div>
  );
}

export default App;
