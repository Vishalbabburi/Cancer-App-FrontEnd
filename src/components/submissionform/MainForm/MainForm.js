import { useState, useEffect,useRef,useContext } from "react";
import {ImCross} from 'react-icons/im'
import { IconContext } from 'react-icons';
import AppContext from "../../AppContext";
import './MainForm.css'

const MainForm =(props)=>{
    const [organs,setOrgans]=useState(["Reactive Meso","Ptc","Pleural Fluid Nhl","Ascitic Fluid Adeno", "Ascitic Fluid Peritoneal","CA Breast"]);
    const { testResponse, testAsync } = useContext(AppContext);
    const [selectedOrgan,setSelectedOrgan]=useState("");
    const [file, setFile] = useState(null);
    const buttonRef = useRef(null);
    const fileRef = useRef(null);
    useEffect(()=>{
        file && file.length !== 0 ? buttonRef.current.disabled = false : buttonRef.current.disabled = true;
        console.log(file);
    },[file, setFile] )

    const organChangeHandler =(event)=>{
        fileRef.current.disabled = false;
        setSelectedOrgan(event.target.value);
       // console.log(event.target.value);
    }
    const onFileChange= event=>{
        console.log(event.target.files[0]);
        if(typeof event.target.files[0] === 'undefined'){
            setFile(null);
        }
        setFile(event.target.files);
        console.log(file)
        // console.log(file.name)
    }

    const uploadHandler =(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("testphoto", file[0]);
        formData.append("f_name", file[0].name);
        formData.append("organ",selectedOrgan);
        console.log(file)
        console.log(file[0].name)
        
       // event.stopPropagation();
       console.log(formData.get("organ"))
       testAsync(formData);
       //event.stopPropagation();
      // event.nativeEvent.stopImmediatePropagation();
        
        // axios.post("api/uploadfile", formData);
    }

    const unselectFileHandler =()=>{
        setFile(()=>null);
        fileRef.current.value="";
        console.log(file);
    } 
    return (
        <div>
        <div className="contentPiv shadow-lg p-3 mb-5 bg-white rounded">
            <form>

            <select className="dropdown"  onChange={organChangeHandler}>
                <option selected disabled defaultValue="" className="dropdown-item">Select lesion</option>
                {organs.map((organ)=>{
                    return(
                        <option value={organ}>{organ} </option>
                    );
                })}
            </select>

            <label htmlFor="file-upload" className="formControl">Choose Image: &nbsp;</label>
            <input id="file-upload" disabled ref={fileRef} type="file" accept=".jpeg" onChange={onFileChange} />

            {file && typeof file[0] !== 'undefined'? 
                <div className="fileName">
                    {file[0].name}
                    <IconContext.Provider value={{size: '10px' }}> 
                    <span className="crossIcon" onClick={unselectFileHandler}>
                        <ImCross />
                    </span>
                    </IconContext.Provider>
                </div> 
                : 
                null}
            
            <br/>
            <br/>
            <div className="buttonDiv">
            <button id="submit-button" ref={buttonRef} className="btn btn-primary" onClick={uploadHandler}>Start Test</button>
            </div>
            </form>
        </div>

        <div className="content_d p-0 mb-0 bg-white rounded">
        <p style= {{color:"red"}} > <b> Note: Please select PAP stained image at 40X Magnification </b></p>

        </div>
        </div>
            
            

    )
}
  
export default MainForm;