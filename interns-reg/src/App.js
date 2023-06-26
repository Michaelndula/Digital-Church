import React from "react";
import { Helmet } from 'react-helmet';
import ApplicationForm from './components/ApplicationForm/ApplicationForm'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ApplicationForm />} />
      </Routes>
      
      <Helmet>
        {/* <!-- JQUERY --> */}
        <script src="js/jquery-3.3.1.min.js"></script>
        {/* <!-- JQUERY STEP --> */}
        <script src="js/jquery.steps.js"></script>
        <script src="js/main.js"></script>
        {/* <!-- Template created and distributed by Colorlib --> */}
      </Helmet>
  </>
  );
}

export default App;
