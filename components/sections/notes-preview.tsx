"use client"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import {
  Code2,
  MessageCircle,
  Lightbulb,
  Sparkles,
  Globe,
  Award,
  ExternalLink,
} from "lucide-react"
import Marquee from "react-fast-marquee";

export function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="AboutMe" aria-labelledby="features-heading" className="bg-background pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
            
            {/* Text Section */}
            <div className="max-w-2xl">
              <h2
                id="features-heading"
                className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              >
                <span className="text-balance">About Me</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I am a computer science graduate and aspiring researcher exploring the intersection of AI, human-centered interaction, communication, and responsible technology. My work focuses on accessible and privacy-preserving AI systems through projects involving client-side AI, adaptive learning tools, FERPA-focused systems, and interactive user experiences. Through research, leadership, and community initiatives, I combine technical development with communication, design thinking, and social impact. My goal is to advance human-centered AI that improves accessibility, education, and the way people interact with technology.
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

              {/* Secondary Glow */}
              <div className="absolute -inset-4 rounded-full bg-purple-500/10 blur-2xl" />

              {/* Animated Pulse Ring */}
              <div className="absolute inset-0 animate-pulse rounded-full border border-cyan-400/30" />

              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-full border border-white/10">
                <Image
                  src="/images/profiles.jpg"
                  alt="Profile"
                  width={224}
                  height={224}
                  className="h-56 w-56 rounded-full object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          {/* Section Header */}  
                    {/* Honors Marquee */}
          <div className="my-8">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Honors & Awards
              </h3>
            </div>

            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover
            >
              {[
                "$224,272 Berea College Full-Ride Scholarship",
                "Anna Mae & Phyllis Shumaker Labor Award",
                "Computer Science Department Award",
                "Dean’s List • Spring 2022",
                "Dean’s List • Fall 2023",
                "Dean’s List • Spring 2024",
                "Dean’s List • Fall 2024",
                "Dean’s List • Spring 2025",
                "Dean’s List • Fall 2025",
                "Dean’s List • Spring 2026",
              ].map((award) => (
                <div
                  key={award}
                  className="mx-3 rounded-full border border-border bg-white/70 px-5 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:bg-zinc-900/70"
                >
                  {award}
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          {/* Section Header */}
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Education
            </h3>
          </div>
          {/* Cards */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Computer Science */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-hidden rounded-2xl border border-border bg-background/60 shadow-sm"
            >
              {/* Header Bar */}
              <div className="relative border-b border-border bg-[#003DA5] px-6 py-4 pr-36">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Berea College
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Computer Science
                </h3>

                <a
                  href="https://www.parchment.com/lp/award/4025c2c7-854c-4838-8430-3e24d5b80810 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-6 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
                >
                  Diploma
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="p-6">
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/images/trove.png"
                    alt="Computer Science"
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                  />
                </div>

                {/* Section Header */}
                <div className="mb-3 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-foreground" />

                  <h4 className="text-xl font-semibold text-foreground">
                    Computer Science
                  </h4>
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  Major • Berea College • CGPA: 3.56
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Focused on AI systems, software engineering, computer security, and
                  human-centered computing with an emphasis on client-side and
                  privacy-preserving technologies. Coursework and research explored
                  accessible AI systems, adaptive educational tools, computational
                  modeling, and interactive technologies designed to support human
                  communication and user autonomy.
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Human-Centered Computing",
                    "AI Systems",
                    "Computer Security",
                    "Design Research",
                    "Theory of Computation",
                    "Computational Modeling",
                    "Software Engineering",
                    "Accessibility",
                    "Client-Side AI",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Communication */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-hidden rounded-2xl border border-border bg-background/60 shadow-sm"
            >
              {/* Header Bar */}
              <div className="relative border-b border-border bg-[#003DA5] px-6 py-4 pr-36">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Berea College
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Communication
                </h3>

                <a
                  href="https://www.parchment.com/lp/award/d8faca3d-a292-445e-a1c2-5c77f5399245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-6 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
                >
                  Diploma
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="p-6">
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/images/FF.png"
                    alt="Communication"
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                  />
                </div>

                {/* Header */}
                <div className="mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-foreground" />

                  <h4 className="text-xl font-semibold text-foreground">
                    Communication
                  </h4>
                  
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  Major • Berea College • CGPA: 3.56
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Focused on communication theory, storytelling, intercultural
                  communication, journalism, and public discourse. Academic work
                  examined how communication shapes human interaction, accessibility,
                  ethical technology design, and the societal impact of digital systems,
                  reinforcing interests in human-centered AI and communicative
                  technologies.
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Communication Theory",
                    "Broadcast Journalism",
                    "Ethics & Society",
                    "Interracial Communication",
                    "Research Communication",
                    "Organizational Communication",
                    "Health Communication",
                    "Environmental Communication",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Santa Clara */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-hidden rounded-2xl border border-border bg-background/60 shadow-sm"
            >
              {/* Header Bar */}
              <div className="relative border-b border-border bg-[#B30738] px-6 py-4 pr-36">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Santa Clara University
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Start-up Program
                </h3>
                <a
                  href="https://hyperstack.id/credential/4fd97847-7323-4026-9e54-7e5bd5cec345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-6 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
                >
                  Certicate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="p-6">
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/images/SC.jpg"
                    alt="Santa Clara University"
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-foreground" />

                  <h4 className="text-xl font-semibold text-foreground">
                    Silicon Valley Program
                  </h4>
                  
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  Santa Clara University
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Participated in a Silicon Valley startup and innovation program
                  centered on entrepreneurship, emerging technologies,
                  collaboration, and product development. The experience
                  strengthened my interest in building human-centered technologies
                  that connect technical innovation with accessibility,
                  communication, and real-world social impact.
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Entrepreneurship",
                    "Product Thinking",
                    "Innovation",
                    "Prototyping",
                    "Silicon Valley",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-zinc-100 via-white to-zinc-100 p-8 shadow-sm dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
        >
          {/* Soft background glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#60A5FA]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#DC2626]/10 blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-3 text-white shadow-lg">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Research Focus
                </p>

                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Human-centered AI & communication technologies
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              Exploring how client-side AI can support more accessible and human-centered communication technologies.
            </p>

            {/* Marquee */}
            <div className="mt-8">
              <Marquee
                speed={30}
                gradient={false}
                pauseOnHover
              >
                {[
                  "Client-Side AI",
                  "Human-Computer Interaction",
                  "Accessibility",
                  "Responsible AI",
                  "Privacy-Preserving Systems",
                  "Communication Technologies",
                  "Human-Centered Design",
                  "Educational Technology",
                  "Adaptive Interfaces",
                  "AI Ethics",
                  "Interactive Systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="mx-3 rounded-full border border-border bg-white/70 px-5 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:bg-zinc-900/70"
                  >
                    {item}
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
