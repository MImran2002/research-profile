import { SmoothScroll } from "@/components/smooth-scroll"
import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { AboutMe } from "@/components/sections/notes-preview"
import { ResearchExp } from "@/components/sections/platforms"
import { PubConf } from "@/components/sections/pricing"
import { Explore } from "@/components/sections/features"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <PubConf />
        <ResearchExp />
        <Explore />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
