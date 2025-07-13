import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import { useEffect, useState } from 'react'


function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme , setTheme] = useState(current_theme? current_theme : 'dark');

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
     <div className={`container ${theme}`}>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar theme={theme} setTheme={setTheme}/>
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
