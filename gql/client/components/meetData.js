import ApolloClient from "apollo-boost";
import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import ReactTable from "react-table-6";
import RadarChart from "react-svg-radar-chart";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});



export default function startupData(props) {
  const [meet, setState] = useState([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query Allmeet($input: String!) {
            allmeet(input: $input) {
              msg
              dataInit
              id
              eixo
            }
          }
        `,
        variables: { input: props.id },
      })
      .then((result) => setState(result.data.allmeet))
      .then(console.log(meet))
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Mesagem",
      accessor: "msg",
    },
    {
      Header: "Data",
      accessor: "dataInit",
    },
    
  ];
  const data = [
    {
      data: {
        battery: 0.7,
        design: 0.8,
        useful: 0.9,
        speed: 0.67,
        weight: 0.8,
      },
      meta: { color: "blue" },
    },
    {
      data: {
        battery: 0.6,
        design: 0.85,
        useful: 0.5,
        speed: 0.6,
        weight: 0.7,
      },
      meta: { color: "red" },
    },
  ];

  const captions = {
    // columns
    battery: "Battery Capacity",
    design: "Design",
    useful: "Usefulness",
    speed: "Speed",
    weight: "Weight",
  };

  return (
    <>
      <section className="mainData">
     

        <div className="secondRow" style={{
          display:"flex",
          justifyContent:"center"
        }}>
          <ReactTable columns={columns} data={meet} />

          <RadarChart captions={captions} data={data} size={450} />
        </div>
      </section>
    </>
  );
}
