import React, { useState } from "react";
import axios from "axios";
//import { NotificationManager } from "react-notifications";
const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [loginstatus, setLoginStatus] = useState(false);
  const [testResponse, setTestResponse] = useState({});
  const[showOutput,setShowOutput]=useState(false);
  const loginAsync = (data) => {
      console.log(data);
    if(data==="1234") setLoginStatus(true);
    
  };

  const testAsync = (data) => {
    setShowOutput(true);
    console.log(data.get("organ"));
    axios.post("http://localhost:5000/final", data).then(
      (response) => {
        setTestResponse(response.data);
        console.log("response data: ", response.data[group]);
      },
      (error) => {
        console.log(error);
      }
    );
  };


  return (
    <AppContext.Provider
      value={{
        loginstatus,
        showOutput,
        loginAsync,
        testAsync
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;