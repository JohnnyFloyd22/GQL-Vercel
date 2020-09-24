import ApolloClient from 'apollo-boost'
import react,{useState} from 'react'
import {gql} from 'apollo-boost'


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql'
 })

function Grid() {

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


  return (

    
    <div className='basicGrid'>
     {startups.map((item, key)=>(
        <div className='card'
            key={key}
        >
            <img src={(startups[key].logo)}/>
        </div>
     ))}
    </div>
 
  );
}

export default Grid
