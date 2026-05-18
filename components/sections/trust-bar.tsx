"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Microscope, FileUser, ChartNetwork, BookType } from "lucide-react"

const items = [
  { icon: Microscope, label: "Research Experience" },
  { icon: FileUser, label: "Publications & Conferences" },
  { icon: ChartNetwork, label: "Projects" },
  { icon: BookType, label: "Writings & Readings" },
]

export function TrustBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="border-b border-border bg-background py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 md:gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
