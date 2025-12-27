import Cursor from "./Components/Cursor";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero"
import About from "./Components/About";
import Showcase from "./Components/Showcase";
import Main from "./Pages/Main"
import ProjectDetails from './Components/ProjectDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
