const { gql } = require("apollo-server-express");

module.exports = gql`
    type startups{
          id:ID!
          name:String!
          cnpj: Int!
          socioId: ID!
          logo:String!
    }    

    type Query{
        totalStartups:Int!
        allStartups:[startups]
       
    }

    input startupInput{
        name:String!
        cnpj:Int!
        socioId:ID!
        logo:String!
    }

   type Mutation{
        newStartup(input :startupInput!): startups !
   }


`;
