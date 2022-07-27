import { Link, Routes, Route } from "react-router-dom";
// import { movies } from "./Movie";
import MovieDetail from "./MovieDetail";

  export function MovieList({ movies }) {
    return (
      <div>
        <h2>Movies</h2>
        <ul className="movie">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link className="links" to={`./${movie.id}`}>{movie.name}</Link>
            </li>
          ))}
        </ul>

        <div style={{marginLeft: "40px"}}>
            <Routes>
                <Route path=":id" element={<MovieDetail/>}>

                </Route>
            </Routes>
        </div>
      </div>
    );
  }

 