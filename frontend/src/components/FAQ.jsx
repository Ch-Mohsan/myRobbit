import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  // FollowUp brand: CRM, reminders, automation, engagement, productivity
  const faqs = [
    {
      question: "How does FollowUp help me never miss a client follow-up?",
      answer: ""
    },
    {
      question: "Can I automate reminders and recurring tasks?",
      answer: ""
    },
    {
      question: "Does FollowUp integrate with my email and calendar?",
      answer: ""
    },
    {
      question: "How does FollowUp improve my client engagement?",
      answer: ""
    },
    {
      question: "Is my data secure with FollowUp?",
      answer: ""
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-gray-600 text-lg'>
            Everything you need to know about using FollowUp to boost your productivity and client relationships.
          </p>
        </div>
        {/* FAQ Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className='bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm'
            >
              <button
                className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200'
                onClick={() => toggleFAQ(index)}
              >
                <span className='text-gray-900 font-semibold text-lg pr-4'>{faq.question}</span>
                <span className={`text-blue-500 text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && faq.answer && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='px-6 pb-4'
                  >
                    <p className='text-gray-700 leading-relaxed'>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default FAQ