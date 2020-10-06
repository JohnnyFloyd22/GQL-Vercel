const { gql } = require("apollo-server-express");

module.exports = gql`
    type startups{
          id:String!
          name:String!
          cnpj: Int!
          socioId: String!
          logo:String!
    }    

    type Query{
        totalStartups:Int!
        allStartups:[startups!]
       
    }

    

    input startupInput{
        name:String!
        cnpj:Int!
        socioId:String!
        logo:String!
    }

   type Mutation{
        newStartup(input :startupInput!): startups !
   }


`;
