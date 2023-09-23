import Typewriter from 'typewriter-effect'
import Confetti from 'react-confetti'
import { motion } from "framer-motion"
import useWindowSize from 'react-use/lib/useWindowSize'


function App() {
  const { width , height } =  useWindowSize()
  document.addEventListener('mousemove', (e) => {
    const rotatingWishes = document.querySelectorAll('.rotating-wish');

    rotatingWishes.forEach((wish) => {
      const rect = wish.getBoundingClientRect();
      const centerX = rect.left + rect.width / 6;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const rotation = angle * (180 / Math.PI); 
    });

  });


  return (
    
    <div className='w-screen h-screen text-center  relative overflow-y-scroll  custom-cursor' style={{ background: `url(/bg.svg)` }}>
      <Confetti width={width} height={height}/>
  
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 3, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 2 }}
      >
        <div className='p-20'>
          <img src="/mutinho.png" alt="" className='w-40 mx-auto mb-6 mbfth' />

          <h1 className='text-6xl font-bold font-["Macondo"] ' >It's Mutesa's bd 🎉🎉</h1>
        </div>
      </motion.div>
      <p className='text-2xl'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hey Mutesa!')
              .pauseFor(2500)
              .typeString(' Today is your birthday')
              .typeString(' Today is your birthday')
              .pauseFor(2500)
              .callFunction(() => {
                console.log('I wish you a great day and a great year ahead');
              })
              .start();
          }}
        />
      </p>

      <div className='w-[20vw] h-[20vh] bg-blue-200 absolute right-40 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-green-200 absolute bottom-10 left-40 blur-[200px]' />
      <img src="/ballons.png" alt="" className='w-36 fixed bottom-0 left-0 mbfth' />
      <img src="/skate.png" alt="" className='w-36 fixed top-16 right-16 mbfth' />
      <img src="/bouquet.webp" alt="" className='w-64 fixed bottom-0 right-10 mbfth ' />

      <p className='fixed w-full text-center bottom-0'>@MTX - 2023</p>
    </div>
    
  )
}

export default App
