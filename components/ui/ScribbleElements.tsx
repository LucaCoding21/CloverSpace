'use client'

import { motion } from 'framer-motion'

// Better hand-drawn underline - more natural look
export function ScribbleUnderline({
  color = '#06B6D4',
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      className={`absolute -bottom-1 left-0 w-full h-3 ${className}`}
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 9C20 9 20 3 40 3C60 3 60 9 80 9C100 9 100 3 120 3C140 3 140 9 160 9C180 9 180 5 200 5"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  )
}

// Thick marker underline
export function MarkerUnderline({
  color = '#06B6D4',
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      className={`absolute -bottom-1 left-0 w-full h-4 ${className}`}
      viewBox="0 0 200 16"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 8C40 10 80 6 120 8C160 10 180 7 200 8"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      />
    </svg>
  )
}

// Simple check mark
export function ScribbleCheck({
  color = '#06B6D4',
  size = 24,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, type: 'spring' }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M4 12L10 18L20 6"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </motion.svg>
  )
}

// Simple X mark
export function ScribbleX({
  color = '#ef4444',
  size = 24,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, type: 'spring' }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M6 6L18 18M18 6L6 18"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </motion.svg>
  )
}

// Simple star/sparkle
export function ScribbleStar({
  color = '#06B6D4',
  size = 24,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <motion.svg
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.4, type: 'spring' }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </motion.svg>
  )
}

// Arrow pointing
export function ScribbleArrow({
  color = '#06B6D4',
  direction = 'right',
  className = '',
}: {
  color?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
}) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: -90,
  }

  return (
    <motion.svg
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      width="48"
      height="24"
      viewBox="0 0 48 24"
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <path
        d="M0 12H40M40 12L28 4M40 12L28 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

// Curved arrow for annotations
export function ScribbleCurvedArrow({
  color = '#06B6D4',
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      className={className}
    >
      <path
        d="M5 35C15 35 25 5 50 5M50 5L40 2M50 5L45 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}
