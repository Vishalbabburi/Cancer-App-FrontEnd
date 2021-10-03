import { useContext, useState, useEffect } from "react"
import AppContext from "../AppContext"
import logo from '../../iisc.png'

const Landing=(props)=> {
   const [password,setPassword]= useState("");
    const {loginstatus,loginAsync}=useContext(AppContext);
    useEffect(()=>{console.log(loginstatus, "is status, "+password+" is password" )});
    const loginhandler=()=>{
        loginAsync(password);
    }
    const onChangeHandler=(event)=>{
        setPassword(event.target.value);
        loginAsync(password);
    }
    const divStyle={
        marginTop:"20px",  
        textAlign:"center",
    }
    const logoStyle={
        width:"400px",
        marginBottom:"20px",
    }
    return (
    <div style={divStyle}>
        <img style={logoStyle} src={logo} alt="logo" />
        <div className="container-sm p-6 my-3 ">
        <label htmlFor="userPassword" className="form-label mb-2">Enter Password:&nbsp;&nbsp;</label>
        <input id="userPassword" className="" type="password" onChange={onChangeHandler} defaultValue={password}></input><br/>
        <button className="btn btn-primary" type="submit" onClick={loginhandler}>login</button>
      </div>
    </div>
      
    );
  }
  
  export default Landing;