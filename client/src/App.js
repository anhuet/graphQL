import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,InMemoryCache, ApolloProvider,useQuery,gql

} from "@apollo/client";
const client = new ApolloClient({
  uri: 'localhost:4000',
  cache: new InMemoryCache()

});

function App() {
  return (
    <ApolloProvider client={client}>
      test
    </ApolloProvider>
  );
}

export default App;
