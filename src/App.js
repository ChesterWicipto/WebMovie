import { useEffect, useState } from "react";
import "./App.css";
import Moviebox from "./Moviebox";

import "animate.css";

const App = () => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=367f5b629a0d846efc84ee8735fe85fc";

  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [tes, setTes] = useState("Loading...");

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/movie/popular`, {
  //       params: {
  //         api_key: "367f5b629a0d846efc84ee8735fe85fc",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setMovie(res.data.results)
  //     });
  // }, []);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovie(data.results);
      });
  }, []);
  // get trending movies for home page
  // axios.get(API_URL).then((res) => {
  //   const result = res.results;
  //   // this.setState({
  //   //   status: "top-movies",
  //   //   movies: result,
  //   // });
  //   // setMovie(results.results);
  //   console.log(result);
  // });

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching ");

    if (query.length == 0) {
      alert("No Data Search");
    } else {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=367f5b629a0d846efc84ee8735fe85fc&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.results.length == 0) {
          setTes("Not Found ");
        }

        setMovie(data.results);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <nav className="navbar fix-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand fw-bold">Movies App</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold fs-3" aria-current="page" href="/">
                  Trending
                </a>
              </li>
            </ul>
            <form className="d-flex " onSubmit={searchMovie}>
              <input className="form-control me-2" type="search" value={query} onChange={changeHandler} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        {movie.length > 0 ? (
          <div className="content mt-5">
            <div className="container  ">
              <div className="card-group row row-cols-1 row-cols-lg-5 g-4 g-lg-5  justify-content-center ">
                {movie.map((moviereq) => {
                  // console.log(moviereq);
                  return (
                    // <p key={moviereq.id}>{moviereq.title}</p>
                    <Moviebox key={moviereq.id} {...moviereq} />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center ">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-white fw-bold mt-5">{tes}</h1>
          </div>
        )}
      </div>
      {/* <div className="container">
        <div className="grid ">
          {movie.map((moviereq) => {
            // console.log(moviereq);
            return (
              // <p key={moviereq.id}>{moviereq.title}</p>
              <Moviebox key={moviereq.id} {...moviereq} />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default App;
