import './App.css';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setOpen] = useState(false)
  const [display , setDisplay] = useState(false)
  return (
    <div className="App">
      <motion.nav className='navbar'>  
        <h1>LOGO</h1>
        <ul className='desktopView'>
          <motion.li initial={{scale:1}} whileHover={{translateX: 5}}>Home</motion.li>
          <motion.li initial={{scale:1}} whileHover={{translateX: -5}}>About</motion.li>
          <motion.li initial={{scale:1}} whileHover={{translateX: 5}}>Blog</motion.li>
        </ul>

        <div className='menu'>
          <Hamburger size={20} rounded toggled={isOpen} toggle={setOpen}  color='orangered' className='menu' onToggle={toggled => {
            if (toggled) {
              setDisplay(!display)
            } else{
              setDisplay(false)
            }
          }}/>
        </div>
      </motion.nav>
          {
            display === true ? <Sidebar/> : null
          }
      <Home/>
    </div>
  );
}

export default App;
