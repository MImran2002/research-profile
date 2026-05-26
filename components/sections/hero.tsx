"use client"

import { motion } from "motion/react"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Cpu,
  Microscope,
  MessageCircle,
} from "lucide-react"

export function Hero() {

  return (
    <section className="px-4 pb-0 pt-24 md:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-foreground">
        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-mountain.jpg?v=2"
            alt=""
            fill
            className="object-cover object-bottom opacity-100"
            priority
            unoptimized
          />

          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center px-6 pb-20 pt-16 text-center md:pt-20 lg:pt-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="text-xs font-medium text-primary-foreground/70">
              #research
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">
              Nyan Lin Zaw (Imran)
            </span>
          </motion.h1>

          {/* Research Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex w-full max-w-5xl flex-col items-center"
          >
            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
              Exploring how client-side AI can support more accessible and human-centered communication technologies.
            </p>
            {/* Research Cards */}
            <div className="mt-10 grid w-full gap-4 md:grid-cols-3">
              <ResearchCard
                icon={Cpu}
                title="Technical"
                items={[
                  "JavaScript",
                  "Python",
                  "C++",
                  "TypeScript",
                  "R",
                  "React",
                  "Next.js",
                  "Nest.js",
                  "TensorFlow.js",
                  "Transformers.js",
                  "Linux",
                  "Git",
                  "HTML/CSS",
                  "SQL",
                  "PyTorch",
                  "OpenCV",
                ]}
              />

              <ResearchCard
                icon={Microscope}
                title="Research"
                items={[
                  "Human-centered Interaction",
                  "Accessibility",
                  "Responsible AI",
                  "Privacy",
                  "Browser-Based ML",
                  "Natural Language Processing",
                  "Conversational AI",
                  "Communication Technologies",
                  "Generative Models",
                ]}
              />

              <ResearchCard
                icon={MessageCircle}
                title="Communication"
                items={[
                  "Research Writing",
                  "Public Speaking",
                  "Communication Technologies",
                  "Research Communication",
                  "Storytelling Systems",
                  "Organizational Communication",
                  "Health Communication",
                  "Environmental Communication",
                ]}
              />
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/MImran2002"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-xl rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-3 text-primary-foreground/70 transition hover:scale-105 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/nyan-lin-zaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-xl rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-3 text-primary-foreground/70 transition hover:scale-105 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="mailto:nyanlinzaw56@gmail.com"
                className="backdrop-blur-xl rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-3 text-primary-foreground/70 transition hover:scale-105 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href="/transcript.pdf"
                className="backdrop-blur-xl rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-3 text-primary-foreground/70 transition hover:scale-105 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ResearchCard({
  icon: Icon,
  title,
  items,
}: {
  icon: any
  title: string
  items: string[]
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-left backdrop-blur-xl transition"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-2">
          <Icon className="h-4 w-4 text-primary-foreground/80" />
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.03 }}
            className="rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1 text-xs text-primary-foreground/70"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}