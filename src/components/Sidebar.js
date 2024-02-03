import React from 'react'
import { animate, motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <motion.div className='mobileBar' initial={{width:0 , height:0}} animate={{ width: '100vw' , height: '400px' }}>
        <ul className='mobileView'>
          <motion.li initial={{scale:1}} whileHover={{translateX: 5}}>Home</motion.li>
          <motion.li initial={{scale:1}} whileHover={{translateX: -5}}>About</motion.li>
          <motion.li initial={{scale:1}} whileHover={{translateX: 5}}>Blog</motion.li>
        </ul>
    </motion.div>
  )
}

export default Sidebar