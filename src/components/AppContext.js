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
//,{headers: {'Content-Type': 'multipart/form-data'}}

  const testAsync = (data) => {
    setShowOutput(true);
    console.log(data.get("testphoto"));
    axios.post("http://localhost:5000/final", data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      (response) => {
        setTestResponse(response.data);
        console.log("response data: ", response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const downloadfileAsync = async (outputKey) => {
    console.log(outputKey+" is being sent for /download")
    let data={key:outputKey}
  //   return axios.post('http://localhost:5000/download',data, {
  //       responseType: 'blob',
  //   })
  //   .then(response => response.blob())
  // }
  // return axios.post('http://localhost:5000/download',data)
  //             .then(response=>{console.log(response.data)})
  // }
  return axios.get('http://localhost:5000/download')
             .then(response=>{console.log(response.data)})
  }


  const setShowOutputHandler = (shouldDisplay) => {
    console.log("should show output "+shouldDisplay);
  setShowOutput(shouldDisplay);
  
};

  return (
    <AppContext.Provider
      value={{
        loginstatus,
        showOutput,
        testResponse,
        setTestResponse,
        loginAsync,
        testAsync,
        downloadfileAsync,
        setShowOutputHandler
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;