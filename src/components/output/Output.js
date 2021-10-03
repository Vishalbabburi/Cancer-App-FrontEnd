import { useState, useEffect,useRef } from "react";
import {ImCross} from 'react-icons/im'
import { IconContext } from 'react-icons';
import './Output.css'
import outputLogo from './cell.jpeg'

const Output =(props)=>{
    const [testResponse,setResponse]=useState(new FormData());
    useEffect(()=>{
        var mytestResponse=new FormData();
        mytestResponse.append("group",1)
        mytestResponse.append("count",50)
        console.log("use effect of Output"+testResponse.get("count"))
        setResponse(mytestResponse);
    },[] )

    return (
        <div>
        <div className="contentDiv shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="heading">Test results</h2>
            <div>
                <p><b>Group{" "+testResponse.get("group")+" "}</b> scenario</p>
                <p> <b> Total cell count{": "+testResponse.get("count")}</b></p>
                <img className="imgStyle" src={outputLogo}/>
            </div>
        </div>
        </div>
            
            

    )
}
  
export default Output;