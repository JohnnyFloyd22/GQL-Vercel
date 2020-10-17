const { gql } = require("apollo-server-express");


module.exports = gql`
    type startups{
          id:String!
          name:String!
          cnpj: String!
          socio: String!
          logo:String!
          cpf:String
          email:String
          tel:String
          tel2:String
          site:String
          equipe:String
          area:String
          
    }    

    type meet{
        id:String!
        msg:String!
        startupId:String!
        dataInit:String!
    }
    
    type objetivo{
        eixo:[Int]
        meetId:String!
    }

    type Query{
        totalStartups:Int!
        allStartups:[startups!]
        allmeet(input:String!):[meet]
        pickStartup(input:String!):[startups!]
        pickmeet(input:String!):[meet]
        pickobjetivo(input: String!):[objetivo!]
       
    }
    

    

    input startupInput{
        name:String!
        cnpj:String!
        socio:String!
        logo:String!
        cpf:String
        email:String
        tel:String
        tel2:String
        site:String
        equipe:String
        area:String
    }

   type Mutation{
        newStartup(input :startupInput!): startups!
   }


`;
