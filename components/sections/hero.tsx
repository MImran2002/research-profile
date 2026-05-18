"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import {
  Bold,
  Italic,
  List,
  AlignLeft,
  AlignCenter,
  Moon,
  Sun,
  Users,
  Underline,
  Strikethrough,
  ChevronDown,
} from "lucide-react"

type StylePreset = {
  label: string
  fontClass: string
  sizeClass: string
  trackingClass: string
  description: string
}

export function Hero() {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)
  const [isList, setIsList] = useState(false)
  const [alignment, setAlignment] = useState<"left" | "center">("center")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeStyle, setActiveStyle] = useState(0)
  const [showStyleMenu, setShowStyleMenu] = useState(false)

  const subtitleText =
    "Human-Centered AI • Accessibility • Privacy-Preserving Systems."

  return (
    <section className="px-4 pt-24 pb-0 md:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-foreground">
        {/* Mountain Image - positioned at bottom */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-mountain.jpg?v=2"
            alt=""
            fill
            className="object-cover object-bottom opacity-100"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-16 pb-40 text-center md:pt-20 md:pb-52 lg:pt-24 lg:pb-64">
          {/* Social Proof Badge */}
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

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">
              Nyan Lin Zaw (Imran)
              <br />
            </span>
          </motion.h1>

          {/* Highlighted Subheadline - looks like selected text in an editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mx-auto mt-6 max-w-xl transition-all duration-300 ${
              isList ? "list-item list-inside list-disc" : ""
            } ${alignment === "left" ? "text-left" : "text-center"}`}
          >
            <span
              className={`leading-loose text-primary-foreground/80 transition-all duration-300 [box-decoration-break:clone] bg-primary-foreground/15 px-1.5 py-0.5 rounded-sm`}
            >
              {subtitleText}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="rounded-full bg-primary-foreground px-7 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ToolbarButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`rounded-md p-1.5 transition-all duration-200 ${
        active
          ? "bg-primary-foreground/20 text-primary-foreground shadow-sm"
          : "text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground/80"
      }`}
    >
      {children}
    </button>
  )
}
