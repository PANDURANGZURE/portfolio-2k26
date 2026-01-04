import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cursor from "./Components/Cursor";
import Main from "./Pages/Main";
import ProjectDetails from "./Components/ProjectDetails";
import Loader from "./Components/Loader";
import ScrollToTop from "./Components/ScrollToTop";
import Resume from "./Components/Resume";

/* Route change loader */

function App() {
  

  return (
    <Router>
      <Cursor />
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/Resume" element={<Resume/>} />
        </Routes>
    </Router>
  );
}

export default App;
