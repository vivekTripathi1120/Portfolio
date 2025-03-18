import { BrowserRouter } from "react-router-dom"
import{About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import { useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";   
import TechStack from "./components/TechStack";
function App() {
  
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About  />
    {/* <TechStack /> */}
    <Tech />
    <Experience  />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas  />
    </div>
    </div>
   </BrowserRouter>
  )
}

export default App
