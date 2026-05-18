"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import {
  BrainCircuit,
  MonitorSmartphone,
  Users,
  HeartPulse,
  Presentation,
  BookOpen,
  Wrench,
  Clock3,
  Target,
} from "lucide-react";

export function Platforms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="platforms" className="bg-background pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="features-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl pb-5  md:pb-10"
        >
          <span className="text-balance">Research Experience</span>
        </h2>
        <div className="space-y-10">
          {[
            {
              title: "Trove",
              color: "cyan",
              glow: "from-cyan-500/20 to-blue-500/10",
              border: "hover:border-cyan-500/30",
              iconBg: "bg-cyan-500/10",
              subtitle: "Human-Centered AI & Narrative Interaction",
              status: "Current Work",
              icon: BrainCircuit,
              question:
                "How can AI-supported interfaces help children create, preserve, and reflect on personal stories through physical objects?",
              theory:
                "Human-computer interaction, narrative interaction, storytelling systems, emotionally aware design.",
              method:
                "Reverse-engineered research concepts inspired by the University of Bristol, then expanded them into an interactive prototype focused on object-based storytelling and communicative interaction.",
              tech: [
                "React Native",
                "Expo",
                "NFC",
                "SQLite",
                "AI Interaction Design",
              ],
              timeline: [
                "Literature Review",
                "System Mapping",
                "Prototype Design",
                "Interaction Testing",
              ],
              outcome:
                "Developing Trove as a human-centered storytelling system connecting physical memory, interaction, and AI-supported communication.",
            },

            {
              title: "Front-End AI Research",
              color: "purple",
              glow: "from-purple-500/20 to-pink-500/10",
              border: "hover:border-purple-500/30",
              iconBg: "bg-purple-500/10",
              subtitle: "Client-Side AI & Accessibility",
              status: "Presented at SASE",
              icon: MonitorSmartphone,
              question:
                "How can AI models run directly in the browser to support privacy-preserving and accessible user experiences?",
              theory:
                "Client-side AI, privacy-preserving interaction, accessible AI systems, human-centered computing.",
              method:
                "Explored browser-based AI workflows under supervision from NextGen Justice and studied how local AI systems can reduce dependence on external data processing.",
              tech: [
                "TensorFlow.js",
                "Transformers.js",
                "React",
                "JavaScript",
                "Browser APIs",
              ],
              timeline: [
                "Model Exploration",
                "Frontend Prototype",
                "Optimization Study",
                "Conference Presentation",
              ],
              outcome:
                "Presented research and implementation findings at SASE connecting accessibility, interaction, and privacy-preserving AI.",
            },

            {
              title: "Organizational Communication Capstone",
              color: "emerald",
              glow: "from-emerald-500/20 to-teal-500/10",
              border: "hover:border-emerald-500/30",
              iconBg: "bg-emerald-500/10",
              subtitle: "Communication in Product-Oriented Teams",
              status: "Capstone Research",
              icon: Users,
              question:
                "How do communication structures shape collaboration, decision-making, and productivity within product-oriented teams?",
              theory:
                "Organizational communication, collaboration theory, team dynamics, communication systems.",
              method:
                "Conducted communication-focused capstone research analyzing interaction patterns, coordination structures, and collaborative workflows within organizational environments.",
              tech: [
                "Qualitative Research",
                "Communication Analysis",
                "Presentation Design",
                "Research Synthesis",
              ],
              timeline: [
                "Research Question",
                "Literature Review",
                "Analysis",
                "Capstone Presentation",
              ],
              outcome:
                "Strengthened interests in communication systems, collaboration, and the role of human interaction within technology-driven environments.",
            },

            {
              title: "Health Communication Research",
              color: "amber",
              glow: "from-amber-500/20 to-orange-500/10",
              border: "hover:border-amber-500/30",
              iconBg: "bg-amber-500/10",
              subtitle: "Public Communication & Social Impact",
              status: "Presented at University of Kentucky",
              icon: HeartPulse,
              question:
                "How can communication strategies improve public understanding and accessibility of health information?",
              theory:
                "Health communication, public communication, audience-centered messaging, social impact communication.",
              method:
                "Researched and presented health communication concepts with emphasis on accessibility, communication clarity, and effective information delivery.",
              tech: [
                "Research Presentation",
                "Public Speaking",
                "Communication Theory",
                "Visual Communication",
              ],
              timeline: [
                "Topic Research",
                "Communication Analysis",
                "Presentation Development",
                "University Presentation",
              ],
              outcome:
                "Expanded interests in accessible communication systems and socially responsible information design.",
            },

            {
              title: "Internship Poster Presentation",
              color: "rose",
              glow: "from-rose-500/20 to-red-500/10",
              border: "hover:border-rose-500/30",
              iconBg: "bg-rose-500/10",
              subtitle: "Professional Development & Technical Reflection",
              status: "Poster Presentation",
              icon: Presentation,
              question:
                "How did interdisciplinary internship experiences shape technical growth, collaboration, and communication practices?",
              theory:
                "Professional communication, interdisciplinary collaboration, reflective practice.",
              method:
                "Designed and presented an academic poster reflecting on internship experiences, collaboration, technical growth, and workplace communication.",
              tech: [
                "Poster Design",
                "Professional Communication",
                "Presentation",
                "Technical Reflection",
              ],
              timeline: [
                "Internship Experience",
                "Reflection",
                "Poster Development",
                "Academic Presentation",
              ],
              outcome:
                "Connected software development experience with communication, collaboration, and interdisciplinary professional growth.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-background/70 p-7 shadow-sm backdrop-blur transition-all duration-300 ${item.border}`}
              >
                {/* Glow Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Ambient Blur */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${item.iconBg} shadow-sm`}
                      >
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>

                      <div>
                        <div className="mb-2 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                          {item.status}
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Research Grid */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background/50 p-5 backdrop-blur">
                      <div className="mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-foreground" />
                        <h4 className="text-sm font-semibold text-foreground">
                          Research Question
                        </h4>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.question}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-5 backdrop-blur">
                      <div className="mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-foreground" />
                        <h4 className="text-sm font-semibold text-foreground">
                          Theory / Lens
                        </h4>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.theory}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-5 backdrop-blur">
                      <div className="mb-3 flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-foreground" />
                        <h4 className="text-sm font-semibold text-foreground">
                          Method
                        </h4>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.method}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-5 backdrop-blur">
                      <div className="mb-3 flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-foreground" />
                        <h4 className="text-sm font-semibold text-foreground">
                          Timeline
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.timeline.map((step) => (
                          <span
                            key={step}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5">
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Technologies & Tools
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition hover:scale-105"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5 backdrop-blur">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Outcome / Direction
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
