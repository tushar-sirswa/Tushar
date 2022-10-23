// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light') // whether dark mode is enabled or not 
  const [alert,setAlert]= useState(null);
  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is enabled ","success")
      // document.title='TextUtils-Dark Mode'
      // setInterval(() => {
      //   document.title = ' TextUtils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("Light mode is enabled ","success")
      // document.title='TextUtils-Light Mode'


    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
    {/* <Navbar/> */}
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
       <Route exact path="/" element ={ */}
         <TextForm showAlert={showAlert} heading="Enter the text to analyze below "  mode={mode}/>
         {/* }/> */}
       {/* <Route exact path="/about" element= {<About/>}/>
      </Routes> */}
    
         
    
    {/* <About/> */}
    </div>
    {/* </BrowserRouter> */}
    
   
    </>
  );
}

export default App;
