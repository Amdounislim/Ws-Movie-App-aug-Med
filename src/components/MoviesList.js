import React from 'react'
import MovieCard from './MovieCard/MovieCard'

const MoviesList = ({ movies }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}
        >
            {movies.map((movie, i) => <MovieCard movie={movie} key={i} />)}
        </div>
    )
}

export default MoviesList
