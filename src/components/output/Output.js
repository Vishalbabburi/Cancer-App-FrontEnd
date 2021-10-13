import { useState, useEffect,useRef,useContext} from "react";
import AppContext from '../AppContext'
import './Output.css'
//import outputLogo from './cell.jpeg'

const Output =(props)=>{
   // const [testResponse,setResponse]=useState(new FormData());
    const { testResponse} = useContext(AppContext);
    useEffect(()=>{
        // var mytestResponse=new FormData();
        // mytestResponse.append("group",1)
        // mytestResponse.append("count",50)
        console.log("use effect of Output"+testResponse.get("count"))
       // setResponse(mytestResponse);
    },[] )

    return (
        <div>
        <div className="contentDiv shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="heading">Test results</h2>
            <div>
                <p><b>Group{" "+testResponse.group+" "}</b> scenario</p>
                <p> <b> Total cell count{": "+testResponse.count}</b></p>
                <img className="imgStyle" src={atob(testResponse.out_img)} alt="cancer_cell"/>
            </div>
        </div>
        </div>
            
            

    )
}
  
export default Output;