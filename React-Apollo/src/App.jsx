import './App.css'
import UserList from './UserList'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { HttpLink } from '@apollo/client/link/http'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: 'http://localhost:4000/' }),
  })

  return (
    <ApolloProvider client={client}>
      <UserList />
    </ApolloProvider>
  )
}

export default App
