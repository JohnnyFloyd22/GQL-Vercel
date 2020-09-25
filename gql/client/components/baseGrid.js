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
   
    <section className='basicGrid'>
     {startups.map((item, key)=>(
        <div className='card'
            key={key}
        >
            <img className='logo'src={startups[key].logo } alt={startups[key].name}/>
        </div>
     ))}
    </section>
 
  );
}

export default Grid
