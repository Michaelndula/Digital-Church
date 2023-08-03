import React from "react";
import { Helmet } from 'react-helmet';
import InfoModal from "./components/Infomodal/Infomodal";
import ApplicationForm from './components/ApplicationForm/ApplicationForm'
import Dashboard from './components/Admin/Dashboard'
import Login from "./components/Admin/Adminlogin";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Register from "./components/Admin/Adminregister";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ApplicationForm />} />
        <Route exact path="/admin" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      <Helmet>
        {/* <script src="js/main.js"></script> */}
        {/* <!-- Template created and distributed by Colorlib --> */}
      </Helmet>
  </>
  );
}

export default App;
