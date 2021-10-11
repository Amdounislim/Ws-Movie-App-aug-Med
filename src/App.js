import React, { useState } from "react"
import './App.css';
import AddMovie from "./components/AddMovie/AddMovie";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList";
import { moviesData } from "./MoviesData"

function App() {

  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState("")
  const [searchRate, setSearchRate] = useState(0)

  const addNewMovie = (x) => {
    setMovies([...movies, x])
  }

  return (
    <div className="App">
      <Header setSearch={setSearch} setSearchRate={setSearchRate} searchRate={searchRate} />
      <MoviesList movies={movies.filter(el => el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
                                              el.rating >= searchRate)} />
      <AddMovie addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
