
import react,{useState} from 'react'
import reactDom from 'react-dom'
import Navbar from "../components/Navbar"
import ApolloClient from 'apollo-boost'
import {gql} from 'apollo-boost'
import Grid from '../components/baseGrid'


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
                   logo
                 }      
   }
    `
  }).then(result => setStartups(result.data.allStartups))
    
  var startupsdisplay = JSON.stringify(startups);

  return (
   <> 
    <div>
      <Navbar></Navbar>
      <h1 href="wwww.incit.com.br">INCIT</h1>
      <p>{startupsdisplay}</p>
      
    </div>
    <Grid></Grid>

  </>
  );
}

