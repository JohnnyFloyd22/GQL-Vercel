import ApolloClient from 'apollo-boost'
import React, { useState, useEffect } from "react";
import { gql } from 'apollo-boost'




const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
  });
  
export default  function startupData(props) {

    const [startup,setState]=useState([])

    useEffect(()=> {
      client
          .query({
            query: gql`
                query Pickstartup($input: String!) {
                pickStartup(input: $input) {
                  name
                  cnpj
                  socio
                  logo
                  cpf
                  tel
                  site
                  equipe
                  email
                  area

              }
            }`,
              variables: { input:props.id}
          })
          .then(result => setState(result.data.pickStartup[0]))
          .then(console.log({startup})).catch(function (error) {
            console.log("Error getting documents: ", error);
          })
    },[])

    return (
        <>
      <div style={{textAlign:"center"}}>
       
        <h1>{startup.name}</h1>
      </div>
      <div
        className="MainGrid"
        style={{
          flexDirection: "row",
          backgroundColor: "red",
        }}
      >
        <div
          className="FirstRow"
          style={{
            textAlign: "center",
            backgroundColor: "blue",
            display: "flex",
            marginLeft: "280px",
          }}
        >
          <div className="Logo">
            <img
              src={startup.logo}
              style={{
                padding: "50px",
                height: "350px",
                width:"400px"
                
              }}
            />
          </div>
            <div className="formCont" style={{
                display: "flex",
                backgroundColor: "white",
                textAlign: "left",
                padding: "3rem",
                margin: "0.5rem",
              }}>
                <form >
                    
                    <div className="formStartData"style={{
                  display:"colomn",
                  columnCount:2,
                  padding:"1rem"
                }}>
                      <ul>
                        <label >Nome da empresa :{startup.name} </label>
                        <br></br>
                        <label >   CNPJ :{startup.cnpj}  </label>
                        <br></br>
                        <label >   Socio  :{startup.socio} </label>
                        <br></br>
                        <label htmlFor="cpfInput">CPF Socio :{startup.socio}</label>
                        <br></br>
                        <label htmlFor="emailInput">   E-mail :{startup.email}   </label>
                        <br></br>
                        <label htmlFor="telInput">   Telefone :{startup.tel}  </label>
                        <br></br>
                        <label htmlFor="tel2Input">   Telefone(2) :{startup.tel2}   </label>
                        <br></br>
                        <label htmlFor="siteInput">   site :{startup.site}   </label>
                        <br></br>
                        <label htmlFor="teamInput" >   Tamanho da Equipe :{startup.equipe}   </label>
                        <br></br>
                        <label htmlFor="areaInput">   Area de Atuacao : {startup.area}</label>
                        </ul>
                    </div>

                </form>
                
            </div>
          </div>
        </div>

    </>
    )  
}

