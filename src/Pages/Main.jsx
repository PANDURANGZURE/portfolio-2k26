import Cursor from "../Components/Cursor";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero"
import About from "../Components/About";
import Showcase from "../Components/Showcase";
import Achivements from "../Components/Achivements";

function App() {
  return (
    <>
    <Cursor/>
    <Header/>
    <Hero/>
    <About/>
    <Showcase/>
    <Achivements/>
    <div className="h-screen"></div>
    <Footer/>
    </>
  );
}

export default App;
