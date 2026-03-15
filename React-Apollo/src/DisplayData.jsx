import React from 'react'
import { gql } from '@apollo/client'
import { useQuery, useLazyQuery } from '@apollo/client/react'

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users{
            id
            name
            age
            userName
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies{
        movies{
            id
            name
            yearOfPublication
        }
    }
`

const QUERY_MOVIE_BY_NAME = gql`
    query Movie($name: String!){
        movie(name: $name){
            id
            name
            yearOfPublication
        }
    }
`

const DisplayData = () => {
    const [movieSearched, setMovieSearched] = React.useState('')
    const { data, loading, error } = useQuery(QUERY_ALL_USERS)
    const { data: moviesData, loading: moviesLoading, error: moviesError } = useQuery(QUERY_ALL_MOVIES)
    const [fetchMovie, { data: movieSearchedData, loading: movieSearchedLoading, error: movieSearchedError }] = useLazyQuery(QUERY_MOVIE_BY_NAME)

    if (loading) return <p>Loading users…</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(moviesData);

    return (
      <div>
        <h1>UserList</h1>
        <ul>
          {data?.users?.map((user) => (
            <li key={user.id}>
              {user.name} ({user.userName}) - {user.age}
            </li>
          ))}
        </ul>

        <h1>MovieList</h1>
        <ul>
          {moviesData?.movies?.map((movie) => (
            <li key={movie.id}>
              {movie.name}
            </li>
          ))}
        </ul>

        <div>
            <input type="text" placeholder='enter movie name' onChange={(e)=>setMovieSearched(e.target.value)}/>
            <button onClick={() => fetchMovie({ variables: { name: movieSearched } })}>Fetch Movie</button>
            {movieSearchedLoading && <p>Loading movie...</p>}
            {movieSearchedError && <p>Error: {movieSearchedError.message}</p>}
            {movieSearchedData && (
                <div>
                    <h2>Movie Details:</h2>
                    <p>Name: {movieSearchedData.movie.name}</p>
                    <p>Year of Publication: {movieSearchedData.movie.yearOfPublication}</p>
                </div>
            )}
        </div>
      </div>
    )
}

export default DisplayData