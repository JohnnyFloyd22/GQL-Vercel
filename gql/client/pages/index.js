
import react,{useState} from 'react'
import reactDom from 'react-dom'
import Navbar from "../components/Navbar"
import ApolloClient from 'apollo-boost'
import {gql} from 'apollo-boost'
import Grid from '../components/baseGrid'





export default function Home() {

  return (
   <> 
    <div>
      <Navbar></Navbar>
      <h1 href="wwww.incit.com.br">INCIT</h1>
     
    </div>
    <Grid></Grid>
    

  </>
  );
}

