import ParallaxText from "@/components/ParallaxText"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main className="">
      <section className="relative min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-zinc-300 via-zinc-100 to-zinc-300">
        <Hero />
      </section>
      <section className="py-12 font-extrabold">
        <ParallaxText baseVelocity={-5}>
          Makers Hackathon
        </ParallaxText>
      </section>
      <section>
      </section>
    </main>
  )
}
