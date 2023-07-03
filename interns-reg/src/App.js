import React from "react";
import { Helmet } from 'react-helmet';
import InfoModal from "./components/Infomodal/Infomodal";
import ApplicationForm from './components/ApplicationForm/ApplicationForm'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ApplicationForm />} />
      </Routes>
      
      <Helmet>
        {/* <script src="js/main.js"></script> */}
        {/* <!-- Template created and distributed by Colorlib --> */}
      </Helmet>
  </>
  );
}

export default App;
