const {gql} = require('apollo-server-express')
const {startups} = require('../temp')


//setting up firebase
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');
require('firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAtgMVUi8BZy3ZSBzFQCEPIRBnaI_6B_fI",
    authDomain: "graphql-d1354.firebaseapp.com",
    databaseURL: "https://graphql-d1354.firebaseio.com",
    projectId: "graphql-d1354",
    storageBucket: "graphql-d1354.appspot.com",
    messagingSenderId: "725785700399",
    appId: "1:725785700399:web:350c71195e1fa1825c7eda"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


  const totalStartups= () => startups.length()
const allStartups = () => startups


const newStartup = (parent, args) =>{
    

    console.log(args);
    const startup = {
        id:startups.length,
        name:args.input.name,
        cnpj:args.input.cnpj,
        socioId:args.input.socioId,
        logo:args.input.logo
    }
    //push new post object to posts
    startups.push(startup)

    console.log("Total Startups : "+totalStartups())
    return startup
}

module.exports = {
    Query:{
        totalStartups,
        allStartups
    },

    Mutation:{
        newStartup
    }
}