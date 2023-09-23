import Typewriter from 'typewriter-effect'
import Confetti from 'react-confetti'
import { motion } from "framer-motion"
import useWindowSize from 'react-use/lib/useWindowSize'


function App() {
  const { width, height } = useWindowSize()
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

    <div className='w-screen h-screen text-center bg-black  text-white relative overflow-y-scroll  custom-cursor'
    //  style={{ background: `url(/bg.svg)` }}
     >
      <Confetti width={width} height={height} />

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 3, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div className='p-20'>
          <img src="/mutinho.png" alt="" className='w-40 mx-auto mb-6 mbfth' />

          <h1 className='text-6xl font-bold font-["Macondo"] ' >It's Mutesa's bd 🎉🎉</h1>
        </div>
      </motion.div>
      <p className='text-2xl px-[20vw]'>
        <Typewriter options={{ delay : 20}}
          onInit={(typewriter) => {
            typewriter.typeString('Happy Birthday! 🎂')
              .typeString("<br/>")
              .pauseFor(2500)
              .typeString('On this joyous day, I want to take a moment to celebrate you, the incredible person you are. 🌟')
              .typeString("<br/>")
              .typeString('May your day be filled with laughter, love, and unforgettable moments. May the coming year bring you endless opportunities, happiness, and success. 🌈')
              .pauseFor(2500)
              .typeString('May your heart be light, your smile be bright, and your spirit forever free. 🥳')
              .pauseFor(2500)
              .typeString("<br/>")
              .typeString("<br/>")
              .typeString('More dough 🤑, More blessings on your hustle 👧,  --@regis ')
              .typeString("<br/>")
              .typeString('HDB big DAWG..., More dollars, more h**s,MUTESA Shiesty😂   --@big_dush ')
              .typeString("<br/>")
              .typeString('Happy +1 Fav🥰 i appreciate and gotchuuu 4L🫂 --@hyguette ')
              .typeString("<br/>")
              .typeString('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
              .pauseFor(5000)
              .callFunction(() => {

              })
              .start()
          }}
        />
      </p>

      <div className='w-[20vw] h-[40vh] bg-red-500/10 absolute left-40 top-0 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-blue-200/20 absolute right-40 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-green-200 absolute bottom-10 left-40 blur-[200px]' />
      <img src="/ballons.png" alt="" className='w-36 fixed bottom-0 left-0 mbfth' />
      <img src="/skate.png" alt="" className='w-36 fixed top-16 right-16 mbfth' />
      <img src="/bouquet.webp" alt="" className='w-64 fixed bottom-0 right-10 mbfth ' />

      <p className='fixed w-full text-center bottom-0'>@MTX - 2023</p>
    </div>

  )
}

export default App
