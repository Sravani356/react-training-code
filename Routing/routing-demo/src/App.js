import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/contacts";
import Home from "./components/Home";
import { movies } from "./components/Movie";
import { MovieDetail, MovieList } from "./components/MovieList";
import NotFound from "./components/NotFound";
import Print from "./components/Print";

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
              <Route path="movies/*" element={<MovieList movies={movies} />} />
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
