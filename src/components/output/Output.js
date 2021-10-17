import { useState, useEffect,useRef,useContext} from "react";
import AppContext from '../AppContext'
import './Output.css'
import { Dimmer, Loader, Segment} from "semantic-ui-react"
import Spinner from 'react-bootstrap/Spinner' ;
import { saveAs } from 'file-saver'
import { Link } from 'react-router-dom';
//import outputLogo from './cell.jpeg'
//<img className="imgStyle" src={Buffer.from(testResponse.out_img, 'base64')} alt="cancer_cell"/>


const Output =(props)=>{
   // const [testResponse,setResponse]=useState(new FormData());
    //const [key ,setKey]=useState("");
  const { testResponse, setShowOutputHandler,downloadfileAsync} = useContext(AppContext);
    useEffect(()=>{
        // var mytestResponse=new FormData();
        // mytestResponse.append("group",1)
        // mytestResponse.append("count",50)
        //console.log("use effect of Output"+testResponse.get("count"))
       // setResponse(mytestResponse);
    },[] )

    const downloadFile = (data) => {
        downloadfileAsync(data);
        //   .then(blob => saveAs(blob, 'file.csv'))
      }
      const testAgainHandler = () => {
            setShowOutputHandler(false);
      }

    //onClick={()=>downloadFile(testResponse.key)}

    //loading impl
    if (Object.keys(testResponse).length===0) 
    return (
        <div className="contentDiv shadow-lg p-3 mb-5 bg-white rounded"> 
            <Segment>
        <div className="">
        <Dimmer className="dimmedContent" active inverted size="massive">
        </Dimmer>
        <Spinner className = "spinner" animation="border" role="status" variant="danger"></Spinner>
        &nbsp;&nbsp;Loading...
        </div>
      
    </Segment>
       </div>
       
     );

     return (
        <div>
        <div className='rowC'>
        <div className="contentDiv  p-3 mb-5 bg-white rounded">
            <div>
                <img src= {`data:image/jpeg;charset=utf-8;base64,${testResponse.out_img}`} />
                <p> <b> {" "+testResponse.f_name +" "}</b></p>

            </div>
        </div>

        <div className="content_n shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="heading">Test Results</h2>
            <div>
                <br/>
                <p> Grade: <b>{" "+testResponse.group+" "}</b></p>
                <p>Interpretation: <b>{" "+testResponse.suggest+" "}</b></p>
                <p> Total Cell Count <b> {": " +testResponse.count}  </b></p>
                <br/>
                <a href={`http://localhost:5000/download?key=${testResponse.key}`}><button type='button'className="btn btn-success" >Download</button></a>
                <button onClick={() => window.location.reload(false)} className="btn btn-danger functionalButton" position = "absolute">  Log Out  </button>
                <button onClick={testAgainHandler} className="btn btn-info functionalButton" position = "absolute">  Test Again  </button>  

            </div>
        </div>

        <div className="content_r  p-3 mb-5 bg-white rounded">
            <div>
                <p> <b> Group Interpretation Table </b></p>
                
            </div>
        </div>


        </div>
        <div className="content_d p-0 mb-0 bg-white rounded">
            <p style= {{color:"red"}} > <b> Note: These results are valid with PAP Stain and 40X Magnification </b></p>
            
        </div>

        </div>


        
            
            

    )
}
  
export default Output;