import { useEffect } from "react"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import AOS from 'aos';
import 'aos/dist/aos.css';

 
 const App = () => {
  
  useEffect(() => {
      AOS.init({duration: 2000})
  },[])

   return (
     <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
     </div>
   )
 }
 
 export default App
 