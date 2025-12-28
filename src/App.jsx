import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Cursor from "./Components/Cursor";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import ProjectDetails from "./Components/ProjectDetails";
import Loader from "./Components/Loader";

/* Route change loader */
function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // loader duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500); // initial loader
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <Loader />;

  return (
    <Router>
      <Cursor />
      <Header />

      <RouteLoader>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </RouteLoader>

      <Footer />
    </Router>
  );
}

export default App;
