import React from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

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

const UserList = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_USERS)

    if (loading) return <p>Loading users…</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data)

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
      </div>
    )
}

export default UserList