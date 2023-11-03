import './App.css';
import NavBar from './Component/Navbar';
import Home from './Component/Home';
// import SocialLinks from './Component/socialLinks';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { Link } from "react-scroll";
import { useState, useEffect } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a scroll event listener to track the scroll position.
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position. You can adjust the threshold (e.g., 100) as needed.
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <div className={`arrowbutton ${isVisible ? 'visible' : 'hidden'}  bg-gray-500`} >
        <Link
          to="home"
          smooth
          duration={500}
        >
          < MdKeyboardArrowUp />
        </Link>
      </div>

      {/* <SocialLinks /> */}

    </div>
  );
}

export default App;
