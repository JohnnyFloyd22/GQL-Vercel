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
      var count = 0;
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        count++;
      });
      return count;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

const allStartups = () =>
  db
    .collection("startups")
    .get()
    .then(function (querySnapshot) {
      const ret = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        ret.push(doc.data());
      });
      return ret;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

const allmeet = (parent, args) =>
  db
    .collection("meet")
    .where("startupId", "==", `${args.input}`)
    .get()
    .then(function (querySnapshot) {
      const ret4 = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        ret4.push(doc.data());
      });
      return ret4;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

const pickmeet = (parent, args) =>
  db
    .collection("meet")
    .where("id", "==", `${args.input}`)
    .get()
    .then(function (querySnapshot) {
      const ret2 = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots

        ret2.push(doc.data());
      });
      console.log(args);
      console.log(ret2);
      return ret2;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

const pickStartup = (parent, args) =>
  db
    .collection("startups")
    .where("id", "==", `${args.input}`)
    .get()
    .then(function (querySnapshot) {
      const ret1 = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots

        ret1.push(doc.data());
        return;
      });
      console.log(ret1);
      return ret1;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

const pickobjetivo = (parent, args) =>
  db
    .collection("objetivo")
    .where("meetId", "==", `${args.input}`)
    .get()
    .then(function (querySnapshot) {
      const ret3 = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots

        ret3.push(doc.data());
        return;
      });
      console.log(ret3);
      return ret3;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

var newStartup = async (parent, args) => {
  console.log(args);

  let id = (await totalStartups()) + 1;
  id = id.toString();
  console.log(await totalStartups());
  console.log(args.input.cnpj);
  let startup = {
    id,
    name: args.input.name,
    cnpj: args.input.cnpj,
    cpf: args.input.cpf,
    socio: args.input.socio,
    logo: args.input.logo,
    email: args.input.email,
    tel: args.input.tel,
    tel2: args.input.tel2,
    site: args.input.site,
    email: args.input.email,
    equipe: args.input.equipe,
    area: args.input.area,
  };

  //push new post object to posts
  db.collection("startups").doc().set(startup);
  return startup;
};

module.exports = {
  Query: {
    totalStartups,
    allStartups,
    pickStartup,
    pickmeet,
    pickobjetivo,
    allmeet,
  },

  Mutation: {
    newStartup,
  },
};
