"use client"

import { motion } from "motion/react"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-lg"
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-foreground">
            IMRAN.POV
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link
            href="#AboutMe"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About Me 
          </Link>
          <Link
            href="#PubConf"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Publications & Conferences
          </Link>
          <Link
            href="#research-exp"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Research Experience
          </Link>
          <Link
            href="#ExploreMore"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore More
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="mailto:nyanlinzaw56@gmail.com"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
