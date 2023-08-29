"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Timeline = () => {
  return (
    <>
      <motion.h3
        // show when in view
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl w-full pb-5"
      >
        Timeline
      </motion.h3 >
      <motion.ol
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative border-l border-gray-200 dark:border-gray-700"
      >
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 28th, 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Announcing the Makers Hackathon</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">You&apos;ve got 3 weeks to assemble your team, brainstorm an idea, and register for the hackathon. Remember, action speaks louder than words! Don&apos;t overthink, you can change your idea after registration.</p>
          <Link href="https://chat.whatsapp.com/HC3ajlBUK11AbRSdzeC5Hk" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Find your team<svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg></Link>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 22nd, 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hackathon Begins!</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">With your team and idea set, it&apos;s time to dive into the challenge. Let&apos;s transform dreams into reality. Innovate and set things in motion!</p>
        </li>
        <li className="ml-4 mb-10">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 24th, 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Final 24 Hours of Building</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">The finish line is near.  Let&apos;s make these final moments count!</p>
        </li>
        <li className="ml-4 mb-10">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 25th, 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ended</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">The Makers Hackathon will conclude on this day. We eagerly await the culmination of all your hard work and innovative ideas. Congrats!</p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Last week of September, 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Awards Celebration 🎉</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">The verdict is in! Join us for a live stream as we unveil the champions of the hackathon.</p>
        </li>
      </motion.ol>
    </>
  )
}

export default Timeline
