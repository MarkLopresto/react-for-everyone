import React, { useState, useEffect } from 'react'
import { Filter } from '../Filter'
import { Movie } from './Movie'

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=8931034512a66e4d1bdb0af8745ef221&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

export function MoviesList() {
  const [filter, setFilter] = useState("")
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL)
      const movies = await res.json()
      setMovies(movies.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        { movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) =>  (
            <Movie key={movie.id} movie={movie} />
          )
        )}
      </ul>
    </div>
  )
}
