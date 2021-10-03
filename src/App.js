
import { useContext, useEffect } from 'react';
import './App.css';
import AppContext from './components/AppContext';
import Navbar from './components/navbar/navbar';
import Landing from './components/landing/landing'
import clogo from './iisc.png'
import footer from './footer.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainForm from './components/submissionform/MainForm/MainForm';
import Output from './components/output/Output';
function App() {
  const {loginstatus,showOutput}=useContext(AppContext);
  useEffect(()=>{
    console.log(showOutput);
  },[showOutput]);
  return (
    <Router>
    <div>
      <header>
      <Navbar></Navbar>
      </header>
      <div>
        {/* <Switch>
        <Route path="/Landing">
                {loginstatus ?<h1>Welcome</h1> : <Landing/>}
              </Route> 
        </Switch> */}
        {loginstatus? showOutput?<Output/>:<MainForm/>:<Landing/>}
      </div>
      <div className="logodiv">
      <img  className="logostyle" src={footer} alt="logo" />
      </div>
    
    </div>
    </Router>
  );
}

export default App;
