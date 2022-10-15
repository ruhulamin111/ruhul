import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Sidebar from './components/Sidebar/Sidebar';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />

      </main>
    </>
  );
}

export default App;
