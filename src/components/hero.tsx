'use client'

import localFont from 'next/font/local'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ABCCameraFontStyled = localFont({
  src: '../app/fonts/ABCCameraVariable-Trial.ttf',
})

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute left-0 right-0 flex flex-col justify-center max-w-5xl min-h-screen px-8 mx-auto md:px-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="z-10 drop-shadow-2xl flex m-auto"
        >
          <h1 className="sr-only">Makers Hackathon</h1>
          <div className='flex flex-col items-center'>
            <Image
              src="/images/gradientisologo.png"
              alt="Makers Isologo"
              width={100}
              height={100}
            />
            <h2 className=" text-lg font-semibold">Make your closet dream reality</h2>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col justify-around max-w-5xl min-h-screen px-2 mx-auto text-6xl font-black text-transparent select-none sm:text-8xl md:text-9xl sm:opacity-20 opacity-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <Image
            className="absolute z-0 object-cover bg-center select-none opacity-70 brightness-75 pr-16 hidden md:block"
            src={"/images/blacklogo.png"}
            alt="Makers Logo"
            width={600}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            className="absolute z-0 object-cover bg-center select-none opacity-70 brightness-75 pr-16 md:hidden"
            src={"/images/blacklogo.png"}
            alt="Makers Logo"
            width={300}
            height={150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="z-10"
        >
          <p className={`${ABCCameraFontStyled.className} text-end drop-shadow-2xl text-zinc-500`}>Hackathon</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
