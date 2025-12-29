import Cursor from "../Components/Cursor";
import Header from "../Components/Header";

import Hero from "../Components/Hero"
import About from "../Components/About";
import Showcase from "../Components/Showcase";
import Achivements from "../Components/Achivements";
import ContactForm from "../Components/Contact";
import End from "../Components/End";

function App() {
  return (
    <>
    <div className="h-screen w-screen">
      <Cursor/>
    <Header/>
    <Hero/>
    <About/>
    <Showcase/>
    <Achivements/>
    <ContactForm/>
    <End/>
    </div>
    
    </>
  );
}

export default App;
