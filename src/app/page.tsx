import ParallaxText from "@/components/ParallaxText"
import Hero from "@/components/hero"
import Cta from "@/components/cta"
import Timeline from "@/components/timeline"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <main>
        <section className="relative min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-zinc-300 via-zinc-100 to-zinc-300">
          <Hero />
        </section>
        <section className="py-12 font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-zinc-300 via-zinc-100 to-zinc-300 md:text-6xl text-3xl shadow-lg">
          <ParallaxText baseVelocity={-5}>
            Makers Hackathon
          </ParallaxText>
        </section>
        <section id="join" className="min-h-screen flex flex-col justify-center">
          <Cta />
        </section>
        <section id="timeline" className="flex flex-col justify-center max-w-4xl mx-auto min-h-screen items-center relative">
          <Timeline />
        </section>
      </main>
      <Footer />
    </>
  )
}
