import Cursor from "../Components/Cursor";
import Header from "../Components/Header";

import Hero from "../Components/Hero"
import About from "../Components/About";
import Showcase from "../Components/Showcase";
import Achivements from "../Components/Achivements";
import ContactForm from "../Components/Contact";
import End from "../Components/End";
import Education from "../Components/Education";
import Snowfall from 'react-snowfall';

function App() {
  return (
    <>
     <Snowfall
     color="#181800"
  snowflakeCount={200}
  radius={[0.5, 2.5]}
  speed={[0.5, 2]}
   ></Snowfall>
    <Cursor/>
    <Header/>
    <Hero/>
    <About/>
    <Education/>
    <Showcase/>
    <Achivements/>
    <ContactForm/>
    <End/> 
    </>
  );
}

export default App;
