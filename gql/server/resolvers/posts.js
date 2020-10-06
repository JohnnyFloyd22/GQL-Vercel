const { gql } = require("apollo-server-express");

//setting up firebase
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAtgMVUi8BZy3ZSBzFQCEPIRBnaI_6B_fI",
  authDomain: "graphql-d1354.firebaseapp.com",
  databaseURL: "https://graphql-d1354.firebaseio.com",
  projectId: "graphql-d1354",
  storageBucket: "graphql-d1354.appspot.com",
  messagingSenderId: "725785700399",
  appId: "1:725785700399:web:350c71195e1fa1825c7eda",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const totalStartups = () =>
  db
    .collection("startups")
    .get()
    .then(function (querySnapshot) {
        var count=0
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        count++
        console.log(count)
      });
      return count
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });


const allStartups = () =>
  db
    .collection("startups")
    .get()
    .then(function (querySnapshot) {
      const ret = []  
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
         ret.push(doc.data())
        console.log(querySnapshot);
      });
      return ret
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

const newStartup = (parent, args) => {
  console.log(args);
  const startup = {
    id: startups.length.toString(),
    name: args.input.name,
    cnpj: args.input.cnpj,
    socioId: args.input.socioId,
    logo: args.input.logo,
  };
  //push new post object to posts
  return () => db.collection("startups").doc(doc.id).set(startup);
};

module.exports = {
  Query: {
    totalStartups,
    allStartups,
  },

  Mutation: {
    newStartup,
  },
};
