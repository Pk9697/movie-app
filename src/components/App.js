import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
            <div className="tab">
              Movies
            </div>
            <div className="tab">
              Favourites
            </div>
        </div>

        <div className="list">
            {data.map(movie=>{
              return <MovieCard movie={movie}/> //passing each movie to MovieCard using props
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
