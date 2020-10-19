import StartupData from "../../components/startupData";
import MeetData from "../../components/meetData";
import {useRouter} from "next/router";
import ApolloClient from "apollo-boost";
import Navbar from "../../components/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});






  


function OnePage (){
  const router = useRouter()
  const id = router.query.slug;

 

    
  return ( 
    <>
    <Navbar></Navbar>
    <div className="mainGrid" style={{
      flexDirection:"row"
    }}> 
       <div className="firstRow">
         <StartupData id={id}></StartupData>
       </div>
      
        <div className="SecondRow"  >
        <MeetData id={id}></MeetData>

       </div>

    </div>
    
    
    </>
  )
}




export default OnePage;
