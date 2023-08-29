import Image from 'next/image'
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Cta = () => {
  return (
    <div className="gap-8 items-center pb-16 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
      {/* Add image here */}
      <div className="mt-4 md:mt-0">
        <h3 className="mb-4 text-4xl tracking-tight font-extrabold">Exclusively built for Makers Fellows.</h3>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Just like that forgotten shirt in your closet, we all have a project but we put it off until it is forgotten in a small space in our brain. Time to turn this project into reality.
          <br />
          <br />
          <b><i>48 hours</i></b>.
          <br />Starting{" "}
          <b><i>September 22nd</i></b>.
          <br />
          <b><i>Prizes</i></b>
          {" "}and more coming...
        </p>
        <Link href="https://chat.whatsapp.com/HC3ajlBUK11AbRSdzeC5Hk" target="_blank" className={`${buttonVariants({ variant: "outline" })}`}>Join the hackathon</Link>
      </div>
      <Image className="md:block hidden rounded shadow-lg" src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" alt="" width="400" height="700" />
    </div>
  )
}

export default Cta
