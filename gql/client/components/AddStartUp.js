import ApolloClient from 'apollo-boost'
import react, { useState } from 'react'
import { gql } from 'apollo-boost'





function AddStartUp() {

    
   

    return (
        <>
            <div className="formCont">
                <form>
                    <h2>Cadastre Uma Start-Up</h2>
                    <div className="formStartData">
                        <br></br>
                        <label htmlFor="nameInput">Nome da empresa  </label>
                        <input className="nameInput" id="nameInput" type="text" placeholder="Nome da Startup"></input>
                        <br></br>
                        <label htmlFor="cnpjInput">   CNPJ   </label>
                        <input className="cnpjInput" id="cnpjInput" placeholder="CNPJ" type="number"></input>
                        <br></br>
                        <label htmlFor="socioInput">   Socio   </label>
                        <input className="socioInput" id="socioInput" placeholder="SocioId" type="number"></input>
                        <label htmlFor="logoInput">   logo  </label>
                        <input className="logoInput" id="logoInput" placeholder="logo" type="text"></input>
                        <br></br>


                    </div>
                   
                   
                    <div className="confirm">
                        <button className="addBtnName" type="button" onClick={Input}>Adcionar</button>
                    </div>
                  
                  
                </form>
            </div>

        </>

    )
   
}
function Input(){
    var name = document.getElementById("nameInput").value
    var cnpj = Number(document.getElementById("cnpjInput").value)
    var socioId = document.getElementById("socioInput").value
    var logo = document.getElementById("logoInput").value

    const client = new ApolloClient({
        uri: 'http://localhost:8000/graphql'
     })

   client.mutate({  mutation:gql`
    mutation Newstartup($input: startupInput!){
        newStartup(input:$input){
          name
          cnpj
          id
          logo
        }
      }
    `,variables :{
        input :{
            name, 
            cnpj,
            socioId,
            logo
        }
    }}).then(()=> alert("Startup Adcionada"))
       

     
    
}



export default AddStartUp