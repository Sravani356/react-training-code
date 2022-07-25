import { Link, useParams, Routes, Route } from "react-router-dom";
import { movies } from "./Movie";

  export function MovieList({ movies }) {
    return (
      <div>
        <h2>Movies</h2>
        <ul>
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

  export function MovieDetail() {
    let { id } = useParams();
    id = Number(id);
    const movie = movies.find((movie) => movie.id === id);
  
    return (
      <div>
        <h3>{movie.name}</h3>
        <p>{movie.description}</p>
      </div>
    );
  }