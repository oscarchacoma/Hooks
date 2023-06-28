import React, { useState, useEffect, useRef } from "react";
import noPoster from "../assets/images/404.jpg";

function SearchMovies() {
      const [keywords, setKeywords] = useState("");
      const apiKey = "e2519acb";
      const [movies, setMovies] = useState({ error: false, data: [] });
      const inputRef = useRef(null);

      useEffect(() => {
            fetch(`http://www.omdbapi.com/?s=${keywords}&apikey=${apiKey}`)
                  .then((res) => res.json())
                  .then((response) => {
                        setMovies({
                              error: response.Error || false,
                              data: response.Search || [],
                        });
                  });
      }, [keywords]);

      function searchMovie(e) {
            e.preventDefault();
            setKeywords(inputRef.current.value);
      }

      return (
            <div className="container-fluid">
                  {apiKey !== "" ? (
                        <>
                              <div className="row my-4">
                                    <div className="col-12 col-md-6">
                                          <form onSubmit={searchMovie}>
                                                <div className="form-group">
                                                      <label htmlFor="searchInput">Buscar por título:</label>
                                                      <input type="text" className="form-control" id="searchInput" ref={inputRef} />
                                                </div>
                                                <button className="btn btn-info">Search</button>
                                          </form>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-12">
                                          <h2>Películas para la palabra: {keywords}</h2>
                                    </div>
                                    {movies.error ? (
                                          <div className="col-12">
                                                <div className="alert alert-warning text-center">No se encontraron películas</div>
                                          </div>
                                    ) : (
                                          movies.data.map((movie, i) => (
                                                <div className="col-sm-6 col-md-3 my-4" key={i}>
                                                      <div className="card shadow mb-4">
                                                            <div className="card-header py-3">
                                                                  <h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                  <div className="text-center">
                                                                        <img
                                                                              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                                              src={movie.Poster !== "N/A" ? movie.Poster : noPoster}
                                                                              alt={movie.Title}
                                                                              style={{
                                                                                    width: "90%",
                                                                                    height: "400px",
                                                                                    objectFit: "cover",
                                                                              }}
                                                                        />
                                                                  </div>
                                                                  <p>{movie.Year}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))
                                    )}
                              </div>
                        </>
                  ) : (
                        <div className="alert alert-danger text-center my-4 fs-2">Ey ¿pusiste tu apikey?</div>
                  )}
            </div>
      );
}

export default SearchMovies;
