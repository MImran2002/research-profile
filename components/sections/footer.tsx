"use client"

import { FileText, Github, Linkedin } from "lucide-react"
import Link from "next/link"

const links = [
  { label: "About Me", href: "#AboutMe" },
  { label: "Publications & Conferences", href: "#PubConf" },
  { label: "Research Experience", href: "#research-exp" },
  { label: "Explore More", href: "#ExploreMore" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-foreground" />
            <span className="font-display text-lg font-bold text-foreground">
              Nyan Lin Zaw
            </span>
          </Link>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Exploring client-side AI, HCI, accessibility, and responsible
            technology design.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/MImran2002"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/nyan-lin-zaw/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        © 2026 Nyan Lin Zaw. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  )
}