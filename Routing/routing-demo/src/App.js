import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/contacts";
import Home from "./components/Home";
import { movies } from "./components/Movie";
// import { MovieList } from "./components/MovieList";
import NotFound from "./components/NotFound";
import Print from "./components/Print";

// const MovieList = lazy(() => import('./components/MovieList'))

const MovieList = lazy(() =>
   import('./components/MovieList').then(module => ({
      default: module.MovieList
   }))
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="links">Home</Link>
              </li>
              <li>
                <Link to="/about" className="links">About</Link>
              </li>
              <li>
                <Link to="/contacts" className="links">Contacts</Link>
              </li>
              <li>
                <Link to="/movies" className="links">Movies</Link>
              </li>
              <li>
                <Link to="/print" className="links">Print</Link>
              </li>
            </ul>
          </nav>

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />

              {/* Suspense enable you to perform route-based code-splitting without
               using an external package.
               You can simply convert the route components of your app to lazy
                components and wrap all the routes with a Suspense component */}
              
              <Route path="movies/*" element= {
              <Suspense> //
              <MovieList movies={movies} />
              </Suspense>
              }
              />

              {/* <Route path="movies/:id" element={<MovieDetail />} /> */}
              <Route path="print" element={<Print />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
