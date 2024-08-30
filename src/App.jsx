import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech,
  Works, StarsCanvas} from './components';

const App= () => {
  return (
    <BrowserRouter>
    <div className = "relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <div className = "text-center mt-4 text-secondary text-justify text-2xl flex flex-col items-center">
        My Current Solution Stack
      </div>
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App
