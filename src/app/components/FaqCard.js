'use client'
import { useState } from 'react'

export default function FaqCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-4 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <p className="mt-3 text-gray-600 transition-all duration-300">{answer}</p>
      )}
    </div>
  )
}
