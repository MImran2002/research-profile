"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Microscope,
  Presentation,
  Users,
  Globe,
  FileText,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const outputs = [
  {
    title:
      "Talks that Build: Exploring Communication Factors for Emerging Professionals in Product Teams",
    venue: "Preprint / Research Paper",
    type: "Publication",
    icon: FileText,
    color: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    iconBg: "bg-violet-500/10",
    description:
      "Mixed-method research preprint examining communication dynamics and organizational factors in product design teams.",
    links: [{ label: "Read Paper", href: "https://arxiv.org/abs/2601.02421" }],
    tags: ["Org Communication", "Mixed Methods", "Communication Technologies"],
  },
  {
    title:
      "Trove: Reconstructing Tangible Interaction Research into a Prototype",
    venue: "TEI Conference — University of Chicago",
    type: "Workshop / Research Inspiration",
    icon: Globe,
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-cyan-500/10",
    description:
      "Explored tangible interaction research through workshop attendance and prototype reconstruction.",
    links: [
      { label: "Original Research Paper", href: "https://dl.acm.org/doi/10.1145/3311927.3325305" },
      { label: "Reconstruction Documentation", href: "https://sites.google.com/view/bereatrove/home" },
    ],
    tags: ["HCI", "Tangible Interaction"],
  },
  {
    title:
      "Optimization and Pruning of Client-Side AI/ML for Legal Workflows",
    venue: "SASE Connect National Conference",
    type: "Conference Presentation",
    icon: Microscope,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    description:
      "Presented research on browser-based AI optimization for privacy-sensitive legal applications.",
    links: [
      { label: "Paper", href: "https://docs.google.com/document/d/1XAQJyrKeq2FJy-h7KUQk97Hy_fAJvdQd9XcIty9dcFU/edit?usp=sharing" },
    ],
    tags: ["Client-Side AI", "Legal AI", "Optimization", "Privacy"],
  },
  {
    title:
      "Co-Cultural Identities and Appalachian College Students’ Health-Seeking Behaviors",
    venue: "Kentucky Conference on Health Communication",
    type: "Conference Presentation",
    icon: Users,
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-amber-500/10",
    description:
      "Presented collaborative qualitative research on culture, identity, and healthcare communication.",
    links: [
      {
          label: "Conference Information",
          href: "https://comm.uky.edu/kchc/program/schedule/2024/paperposter/2197",
        },
        { label: "Poster", href: "https://drive.google.com/file/d/1KumnSO4m1znlzzSZlvbnKh5ysykTtMrJ/view?usp=sharing" },
    ],
    tags: ["Health Communication", "Qualitative Research"],
  },
];

export function PubConf() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="PubConf"
      aria-labelledby="publications-heading"
      className="bg-background pt-20 md:pt-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2
              id="publications-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Publications & Conferences
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Selected research outputs, conference presentations, workshops, and
              publications. Full research details are available in the&nbsp;
              <a href="#research-exp" className="text-primary hover:underline">
                Research Experience
              </a>
               &nbsp;section.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {outputs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70`}
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 ${item.iconBg}`}
                      >
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>

                      <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                          <Sparkles className="h-3 w-3" />
                          {item.type}
                        </div>

                        <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.venue}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                      {item.links.map((link) => (
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
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}