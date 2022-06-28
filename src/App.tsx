// import { Event } from './pages/Event';
import { ApolloProvider } from "@apollo/client";
// import { gql, useQuery } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';
import { client } from "./lib/apollo";
import { Router } from './Router';

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `

interface lesson {
  id: string,
  title: string,
}

function App() {
  // const { data } = useQuery<{ lessons: lesson[]}>(GET_LESSONS_QUERY);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    // <ul>
    //   {data?.lessons.map(lesson => {
    //     return <li key="{lesson.id}">{lesson.title}</li>
    //   })}
    // </ul>
  )
}

export default App
