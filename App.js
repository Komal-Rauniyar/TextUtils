import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';
function App() {
  const [mode, setMode]=useState('dark');
  const [alert, setAlert]=useState(null);
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
        <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
        <Alert alert="This is alert"/>
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}/> 
        {/*<About/>*/}
        </div>
    </>
  
  );
}

export default App;
