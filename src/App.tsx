import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Coctails } from './components/Coctails';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Coctails />
      <div className='h-dvh bg-blue-700' />
    </main>
  )
}

export default App;
