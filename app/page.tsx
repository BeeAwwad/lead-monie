import Features from "@/components/home/Features"
import Hero from "@/components/home/Hero"
import Nav from "@/components/home/Nav"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  )
}
