
import react,{useState} from 'react'
import reactDom from 'react-dom'
import Navbar from "../components/Navbar" 
import AddStartUp from "../components/AddStartUp"






export default function Home() {
  return (
  <>
    <div>
      <Navbar></Navbar>
      <h1 href="wwww.incit.com.br">INCIT</h1>
      
    </div>
    <AddStartUp></AddStartUp>
  </>
  );
}

