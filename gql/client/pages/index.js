
import react,{useState} from 'react'
import reactDom from 'react-dom'
import Navbar from "../components/Navbar"
import ApolloClient from 'apollo-boost'
import {gql} from 'apollo-boost'


const client = new ApolloClient({
   uri: 'http://localhost:8000/graphql'
})



export default function Home() {
  const [startups, setStartups] = useState([])
  client.query({
    query:gql`
    {
      allStartups{
                   id
                   name
                   cnpj
                   socioId
                 }      
   }
    `
  }).then(result => setStartups(result.data.allStartups))
    
  

  return (
    <div>
      <Navbar></Navbar>
      <h1 href="wwww.incit.com.br">INCIT</h1>
      <p>{JSON.stringify(startups)}</p>
    </div>
  );
}

