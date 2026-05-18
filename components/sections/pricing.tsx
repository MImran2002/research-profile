"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Check, ArrowRight } from "lucide-react"
import {
  Microscope,
  Presentation,
  Users,
  Globe,
  FileText,
  BookMarked,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For casual note-takers getting started.",
    featured: false,
    cta: "Get Started",
    features: [
      "Up to 50 notes",
      "Basic search & tagging",
      "Single device access",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$69",
    period: "/year",
    description: "For power users who need more.",
    featured: true,
    cta: "Upgrade to Pro",
    features: [
      "Unlimited notes & notebooks",
      "Advanced search & tagging",
      "Real-time collaboration",
      "Cloud sync across devices",
      "Priority email support",
    ],
  },
  {
    name: "Vision Pro",
    price: "$149",
    period: "/year",
    description: "For teams that think together.",
    featured: false,
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team dashboards & workspaces",
      "Admin roles & permissions",
      "Dedicated support manager",
      "Custom integrations",
    ],
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Publications & Conferences
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Research outputs, conference presentations, workshops, and preprints
              exploring human-centered AI, communication, accessibility, and
              socially responsible technology.
            </p>
          </div>

          <div className="grid gap-7">
            {[
              {
                title:
                  "Talks that Build: Exploring Communication Factors for the Success of Emerging Professionals in Product Teams",
                venue: "Preprint",
                type: "Preprint / Research Paper",
                icon: FileText,
                color: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
                iconBg: "bg-violet-500/10",
                description:
                  "A preprint exploring how communication practices, team interaction, feedback, and collaboration influence the success of emerging professionals in product-oriented teams.",
                tags: [
                  "Organizational Communication",
                  "Product Teams",
                  "Team Collaboration",
                  "Emerging Professionals",
                  "Research Writing",
                ],
              },
              {
                title:
                  "Trove: A Digitally Enhanced Memory Box for Looked-after and Adopted Children",
                venue: "TEI Conference — University of Chicago",
                type: "Workshop Attendance / Research Inspiration",
                icon: Globe,
                color: "from-cyan-500/20 via-blue-500/10 to-transparent",
                iconBg: "bg-cyan-500/10",
                description:
                  "Attended TEI workshops and research sessions to explore tangible interaction, human-centered technology, and interactive systems. These sessions helped inspire the conceptual direction of Trove.",
                tags: [
                  "Tangible Interaction",
                  "HCI",
                  "Narrative Technology",
                  "Interactive Systems",
                  "Research Inspiration",
                ],
              },
              {
                title: "Reverse Engineering Research Presentation",
                venue: "Berea College",
                type: "Research Presentation",
                icon: Presentation,
                color: "from-purple-500/20 via-pink-500/10 to-transparent",
                iconBg: "bg-purple-500/10",
                description:
                  "Presented a reverse engineering research project translating academic research concepts into an interactive human-centered technology exploration.",
                tags: [
                  "Research Analysis",
                  "Research Replication",
                  "HCI Exploration",
                  "Presentation",
                ],
              },
              {
                title:
                  "Optimization and Pruning of Building AI/ML Only on the Client Side in the Legal Sector",
                venue: "SASE — Society of Asian Scientists and Engineers",
                type: "Conference Presentation",
                icon: Microscope,
                color: "from-emerald-500/20 via-teal-500/10 to-transparent",
                iconBg: "bg-emerald-500/10",
                description:
                  "Presented research on optimizing and pruning AI/ML systems designed to run fully on the client side, with attention to privacy-sensitive legal-sector applications.",
                tags: [
                  "Client-Side AI",
                  "Model Optimization",
                  "Pruning",
                  "Privacy-Preserving AI",
                  "Frontend AI",
                ],
              },
              {
                title:
                  "Co-cultural Identities Impact on Appalachian College Student’s Health-Seeking Behaviors",
                venue: "Kentucky Conference on Health Communication",
                type: "Research Conference Presentation",
                icon: Users,
                color: "from-amber-500/20 via-orange-500/10 to-transparent",
                iconBg: "bg-amber-500/10",
                description:
                  "Presented communication research examining how co-cultural identities shape health-seeking behaviors among Appalachian college students.",
                tags: [
                  "Health Communication",
                  "Co-cultural Theory",
                  "Social Identity",
                  "Public Communication",
                ],
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/70 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-xl"
                >
                  {/* Animated soft glow */}
                  <motion.div
                    animate={{
                      opacity: [0.25, 0.55, 0.25],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                  />

                  {/* Floating decorative dot */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 8, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-8 top-8 h-20 w-20 rounded-full bg-white/5 blur-2xl"
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.08 }}
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${item.iconBg}`}
                        >
                          <Icon className="h-6 w-6 text-foreground" />
                        </motion.div>

                        <div>
                          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                            <Sparkles className="h-3 w-3" />
                            {item.type}
                          </div>

                          <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-foreground">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm text-muted-foreground">
                            {item.venue}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <BookMarked className="h-4 w-4 text-foreground" />
                        <h4 className="text-sm font-semibold text-foreground">
                          Overview
                        </h4>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ y: -3, scale: 1.04 }}
                          className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
