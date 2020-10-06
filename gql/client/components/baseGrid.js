import ApolloClient from 'apollo-boost'
import React,{useState} from 'react'
import {gql} from 'apollo-boost'



const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql'
 })





class Grid extends React.Component {

    constructor(params){
     super(params)
      this.state={
        startups:[]
      }
    }

  componentDidMount=()=>{
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
    }).then(result => this.setState({startups: result.data.allStartups}))
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }
    render(){
    
    console.log(this.props)

    

  return (
   
    <section className='basicGrid'>
     {this.state.startups.map((item, key)=>(
        <div className='card'
            key={key}
        >
            <img className='logo' src={this.state.startups[key].logo } alt={`startups`[key].name}/>
        </div>
     ))}
    </section>
 
  )};
}

export default Grid
