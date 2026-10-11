import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Coctails } from './components/Coctails';
import { About } from "./components/About";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Coctails />
      <About />
    </main>
  )
}

export default App;
