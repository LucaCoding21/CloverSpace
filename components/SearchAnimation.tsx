'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const searchQueries = [
  'realtors near me',
  'best real estate agent',
  'homes for sale near me',
  'top agents in my area',
]

export default function SearchAnimation() {
  const [currentQuery, setCurrentQuery] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const query = searchQueries[currentQuery]

    if (isTyping) {
      if (displayText.length < query.length) {
        const timeout = setTimeout(() => {
          setDisplayText(query.slice(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setCurrentQuery((prev) => (prev + 1) % searchQueries.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentQuery])

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-6">
      {/* Google logo */}
      <div className="text-2xl font-medium mb-4 select-none">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </div>
      {/* Google-style search bar */}
      <div className="w-full bg-white rounded-full px-5 py-4 flex items-center gap-4 border border-gray-300 shadow-sm">
        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <div className="flex-1 flex items-center">
          <span className="text-gray-800 text-base">{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="w-0.5 h-5 bg-cyan-500 ml-0.5"
          />
        </div>
      </div>

      {/* Fake search results */}
      <div className="w-full mt-5 space-y-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: displayText.length > 5 ? 1 : 0 }}
          className="bg-gray-50 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-amber-100 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-amber-700">Ad</span>
            </div>
            <span className="text-green-700 text-sm">yoursite.com</span>
          </div>
          <div className="h-3 w-3/4 bg-gray-200 rounded" />
          <div className="h-3 w-1/2 bg-gray-100 rounded mt-2" />
        </motion.div>
      </div>
    </div>
  )
}
