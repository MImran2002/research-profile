"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import {
  FileText,
  Globe,
  Presentation,
  Microscope,
  Users,
  Sparkles,
  ArrowUpRight,
  BookMarked,
  Clock3,
  Target,
  Wrench,
  Lightbulb,
  ExternalLink,
  ChevronDown
} from "lucide-react"

const publications = [
  {
    title:
      "Trove: Reconstructing Tangible Interaction Research into a Functional Interactive Prototype",
    venue:
      "ACM-TEI Conference — University of Chicago • Research Expo — Berea College",
    type:
      "Research Reconstruction / Reverse Engineering of Published HCI Research",
    imageOne: "/images/trove.png",
    imageTwo: "/images/trello.png",
    icon: Globe,
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-cyan-500/10",
    description:
      "This project is not an original research contribution, but a research reconstruction inspired by the paper 'Trove: A Digitally Enhanced Memory Box for Looked-after and Adopted Children' presented at the ACM Conference. By closely analyzing the publication, interaction concepts, and system behaviors described in the paper, this project reverse engineered and translated those ideas into a functional prototype to better understand tangible interaction design, storytelling systems, and human-centered technology.",
    timeline: [
      "Research Paper Analysis",
      "Interaction Breakdown",
      "Concept Reconstruction",
      "System Translation",
      "Prototype Development",
    ],
    researchFocus:
      "Human-Computer Interaction (HCI), tangible interaction, narrative technology, research-to-prototype translation.",
    method:
      "Affinity mapping, Interaction decomposition, functional flow analysis, user-flow reconstruction, sprint planning, UI/UX translation, implementation experimentation, low-fidelity prototyping, high-fidelity prototyping.",
    dataCollection:
      "Published research papers, workshop observations, interaction examples, system descriptions, and design documentation presented within the original TEI research materials.",
    researchQuestion:
      "How can the interaction concepts described in tangible interaction research papers be reconstructed into a working digital prototype?",
    novelty:
      "Rather than proposing a novel research contribution, this work focuses on reconstructing and translating an existing HCI research concept into a functioning prototype as a learning and exploratory exercise.",
    impact:
      "Demonstrates the ability to critically analyze academic research, extract interaction principles, and transform theoretical descriptions into an implemented interactive system.",
    evidence: [
      { label: "Original Research Paper", href: "https://dl.acm.org/doi/10.1145/3311927.3325305" },
      { label: "Reconstruction Documentation", href: "https://sites.google.com/view/bereatrove/home" },
    ],
    tags: [
      "Research Reconstruction",
      "Reverse Engineering",
      "Human-Computer Interaction",
      "Tangible Interaction",
      "Interactive Systems",
      "Prototype Translation",
      "Research Analysis",
    ],
  },
  {
    title:
      "Talks that Build: Exploring Communication Factors for the Success of Emerging Professionals in Product Teams",
    venue: "ArXiv Preprint",
    type: "Preprint / IRB-approved Research Paper",
    imageOne: "/images/FF.png",
    imageTwo: "/images/Td.png",
    icon: FileText,
    color: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    iconBg: "bg-violet-500/10",
    description:
      "This research explores how communication shapes the success of emerging professionals in product design teams, finding that curiosity, inclusivity, documentation, and accessible communication are more important than prior experience. Using surveys and interviews, the study shows that flexible communication structures and supportive team environments help younger professionals overcome challenges like high turnover, limited experience, and context switching.",
    timeline: [
      "Research Proposal",
      "Research Conduct",
      "Thesis Defense",
      "Preprint Draft",
    ],
    researchFocus:"Communicative Constitution of Organization",
    dataCollection:"Opportunistic, snowball sampling, textual analysis, survey (n=45), interview (n=6)",
    researchQuestion:
      "What variables and strategies within a product team influence the success of a product when the team includes emerging professionals?",
    method:
      "Phonetic Iterative Qualitative Data Analysis, Thematic coding ",
    novelty:
      "Connects organizational communication theory with product team collaboration and early-career professional development.",
    impact:
      "Strengthened my research direction around communication systems, collaboration, and human-centered technology teams.",
    evidence: [
      { label: "Preprint", href: "https://arxiv.org/abs/2601.02421" },
      { label: "Thesis Defense Slides", href: "https://canva.link/gpnl4wed8mmaqws" },],
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
      "Optimization and Pruning of Client-Side AI/ML Systems for Privacy-Preserving Legal Workflows",
    venue:
      "SASE Connect National Conference — Society of Asian Scientists and Engineers",
    type:
      "Research Conference Presentation",
    imageOne: "/images/NG1.jpg",
    imageTwo: "/images/NG2.jpg",
    icon: Microscope,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    description:
      "This research explores how AI/ML systems can be optimized to run entirely on the client side for privacy-sensitive legal applications. Using TensorFlow.js and a browser-based LegalBERT NER pipeline, the research investigates pruning, quantization, distillation, caching, and architectural optimization strategies to reduce memory usage, improve inference speed, and maintain responsive user experiences within browser constraints.",
    timeline: [
      "Legal Workflow Research",
      "Client-Side NER Exploration",
      "Optimization & Pruning",
      "Experimental Benchmarking",
      "SASE Conference Presentation",
    ],
    researchQuestion:
      "How can transformer-based AI/ML systems be optimized to run efficiently within browser environments for privacy-sensitive legal workflows?",
    researchFocus:
      "Client-side AI, edge ML, browser-based NLP, privacy-preserving systems.",
    dataCollection:
      "Browser benchmarking data including inference speed, memory usage, model load time, UI responsiveness.",
    method:
      "TensorFlow.js experimentation, LegalBERT optimization, pruning, quantization, caching, and browser performance testing.",
    novelty:
      "Explores browser-native NLP systems as a privacy-preserving alternative to server-side AI pipelines.",
    impact:
      "Demonstrates the feasibility of deploying optimized transformer-based NER systems directly within browser environments, reducing reliance on centralized infrastructure while improving privacy and accessibility for legal-sector AI workflows.",
    evidence: [
      { label: "Conference Research Paper", href: "https://docs.google.com/document/d/1XAQJyrKeq2FJy-h7KUQk97Hy_fAJvdQd9XcIty9dcFU/edit?usp=sharing" },
      { label: "SASE Presentation", href: "https://canva.link/hpbcve45wf2izry" },
    ],
    tags: [
      "Client-Side AI",
      "Edge AI",
      "TensorFlow.js",
      "Transformer Optimization",
      "Legal AI",
      "NER",
      "Privacy-Preserving AI",
      "Frontend ML",
      "Browser AI",
    ],
  },
  {
    title:
      "Co-Cultural Identities and Appalachian College Students’ Health-Seeking Behaviors",
    venue:
      "Kentucky Conference on Health Communication",
    type:
      "Research Conference Presentation",
    imageOne: "/images/kchc.jpeg",
    imageTwo: "/images/kchcp.png",
    icon: Users,
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-amber-500/10",
    description:
      "Collaborative qualitative research exploring how co-cultural identities and Appalachian cultural norms influence healthcare-seeking behaviors among college students.",
    timeline: [
      "Literature Review",
      "Qualitative Research",
      "Thematic Analysis",
      "KCHC Presentation",
    ],
    researchQuestion:
      "How do co-cultural identities influence Appalachian college students’ health-seeking behaviors?",
    researchFocus:
      "Health communication, co-cultural theory, Appalachian identity, sociocultural healthcare behaviors.",
    dataCollection:
      "Qualitative interviews and surveys examining healthcare perceptions, communication patterns, treatment-seeking experiences.",
    method:
      "Literature review, criterion sampling, qualitative interviewing, thematic coding, communication analysis.",
    novelty:
      "Examines the intersection of co-cultural identity and Appalachian healthcare communication within a college student population.",
    impact:
      "Expanded understanding of culturally informed communication, accessibility, socially sensitive information delivery.",

    evidence: [
      {
        label: "Conference Information",
        href: "https://comm.uky.edu/kchc/program/schedule/2024/paperposter/2197",
      },
      { label: "Poster", href: "https://drive.google.com/file/d/1KumnSO4m1znlzzSZlvbnKh5ysykTtMrJ/view?usp=sharing" },
    ],

    tags: [
      "Health Communication",
      "Qualitative Research",
      "Co-Cultural Theory",
      "Appalachian Studies",
      "Social Identity",
    ],
  },
]

export function ResearchExp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="research-exp" className="bg-background pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Research Experience
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Research outputs, presentations, workshops, and academic experiences
            that shaped my work in AI, HCI, communication, accessibility, and
            human-centered technology.
          </p>
        </div>

        <div className="space-y-10">
          {publications.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-xl"
              >
                {/* Animated glow */}
                <motion.div
                  animate={{
                    opacity: [0.18, 0.42, 0.18],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                />

                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
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

                        <h3 className="max-w-4xl text-2xl font-semibold tracking-tight text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.venue}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {/* Horizontal Two-Image Block */}
                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    <ImageBlock src={item.imageOne} alt={`${item.title} visual 1`} />
                    <ImageBlock src={item.imageTwo} alt={`${item.title} visual 2`} />
                  </div>

                  {/* Overview */}
                  <InfoBlock
                    icon={BookMarked}
                    title="Overview"
                    text={item.description}
                  />
                  {/* Expandable Details */}
                  <details className="group mt-6 rounded-2xl border border-border bg-background/50 transition-all">
                    <summary className="flex cursor-pointer list-none items-center justify-between p-5">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          Research Details
                        </h3>

                        <p className="mt-1 text-xs text-muted-foreground">
                          Timeline, methodology, contribution, impact, and evidence
                        </p>
                      </div>

                      <div className="transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </summary>

                    <div className="border-t border-border p-5">
                      {/* Explicit Timeline */}
                      <div className="rounded-2xl border border-border bg-background/50 p-5">
                        <div className="mb-4 flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-foreground" />

                          <h4 className="text-sm font-semibold text-foreground">
                            Research Timeline
                          </h4>
                        </div>

                        <div className="relative py-6">
                          {/* Timeline line */}
                          <div className="absolute left-0 right-0 top-11 h-px bg-border" />

                          <div
                            className="relative grid items-start"
                            style={{
                              gridTemplateColumns: `repeat(${item.timeline.length}, minmax(0, 1fr))`,
                            }}
                          >
                            {item.timeline.map((step, stepIndex) => (
                              <div
                                key={step}
                                className="relative flex flex-col items-center text-center"
                              >
                                {/* Node */}
                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-sm font-medium shadow-sm">
                                  {stepIndex + 1}
                                </div>

                                {/* Caption */}
                                <p className="mt-4 max-w-36 text-xs leading-relaxed text-muted-foreground">
                                  {step}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Research Details */}
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <InfoBlock
                          icon={Target}
                          title="Research Question"
                          text={item.researchQuestion}
                        />

                        <InfoBlock
                          icon={Wrench}
                          title="Method"
                          text={item.method}
                        />

                        <InfoBlock
                          icon={Target}
                          title="Research Theory / Focus"
                          text={item.researchFocus || "N/A"}
                        />

                        <InfoBlock
                          icon={Target}
                          title="Data Collection"
                          text={item.dataCollection || "N/A"}
                        />

                        <InfoBlock
                          icon={Lightbulb}
                          title="Novelty / Contribution"
                          text={item.novelty}
                        />

                        <InfoBlock
                          icon={Sparkles}
                          title="Impact"
                          text={item.impact}
                        />
                      </div>

                      {/* Tags */}
                      <div className="mt-5">
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                          Research Areas
                        </h4>

                        <div className="flex flex-wrap gap-2">
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

                      {/* Evidence Links */}
                      <div className="mt-6 border-t border-border pt-5">
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                          Evidence / More Details
                        </h4>

                        <div className="flex flex-wrap gap-3">
                          {item.evidence.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                            >
                              {link.label}

                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-muted/30">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  )
}

function InfoBlock({
  icon: Icon,
  title,
  text,
}: {
  icon: any
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/50 p-5">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-foreground" />
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}