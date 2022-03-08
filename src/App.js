import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  

  
  

  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
   
    if(mode === 'light'){
      document.body.style.background = `black`;
      document.body.style.transition = 'all 1s'
      setMode('dark')
      showAlert('Enabled Dark Mode', 'Success')
    }else{
      setMode('light')
      document.body.style.transition = 'all 1s'
      document.body.style.background = 'white';
      showAlert('Disabled Dark Mode', 'Success')
    }
  }
  
  let animation = {
    transition: 'all 1s',
  }

  

  
  return (
  <Router>
  <> 
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} animation={animation}/>
    <Alert alert={alert} />
    <div className="container my-3">

   <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route> 

         <Route exact path="/"> 
          <Textform header="Enter the text to analyze below" mode={mode} animation={animation} showAlert={showAlert} />
           </Route>
        </Switch> 

    
    </div>
      </>
 </Router >
  );
}

export default App;

            