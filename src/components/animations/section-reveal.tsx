"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode
  delay?: number
}

export default function SectionReveal({ children, delay = 0.2 }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className="w-full" // <--- INI WAJIB ADA BIAR GA GESER KE KIRI
    >
      {children}
    </motion.div>
  )
}