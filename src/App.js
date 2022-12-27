// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light") // wheter dark mode enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (meassage, type)=>{
    setAlert({
      msg: meassage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success")
      // document.title = "TextUtils - Home - Light Mode";
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042734';
      showAlert("Dark mode has been Enabled", "success")
      // document.title = "TextUtils - Home - Dark Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="ATexts" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} />}/> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
