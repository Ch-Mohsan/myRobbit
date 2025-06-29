import React from 'react'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    name: 'The All-in-One Platform',
    person: 'AppRabbit',
    before: '—',
    after: '—',
    timeline: 'Fitness Business Launch',
    overview: `Workout Builder\nCustom Branding\nHabit Tracking\nCommunity\nAI Meal Planning\nAutomation`,
    image: '/images/box1.png',
    description: 'The all-in-one platform to launch your fitness business. Build workouts, track habits, create a community, and automate your coaching with AppRabbit.'
  },
  {
    name: 'Launch Your Custom Fitness App',
    person: 'AppRabbit',
    before: '—',
    after: '—',
    timeline: 'Bring Your Business Online',
    overview: `Full Branding\nEngage with clients\nAI Meal Planning\nBuilt in CRM & upsells\nBuild community`,
    image: '/images/box2.png',
    description: 'Launch your custom fitness app to bring your business online. Full branding, client engagement, AI meal planning, CRM, and community features.'
  },
  {
    name: 'Build a Fitness App with Your Brand',
    person: 'AppRabbit',
    before: '—',
    after: '—',
    timeline: 'Branded Apps',
    overview: `Branded Apps\nAI-Powered Programming\nNutrition Tracking\nCommunity Features`,
    image: '/images/box3.png',
    description: 'Build a fitness app with your own brand, content, and community. Get branded apps, AI-powered programming, nutrition tracking, and more.'
  },
]

export default function Cards() {
  return (
    <section className="py-16 px-2 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12" style={{fontFamily: 'serif'}}>Recent Case Studies</h2>
        <div className="flex flex-col gap-12 items-center">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
              className="w-full flex flex-col md:flex-row bg-gradient-to-br from-[#181f3a] to-[#232b4a] rounded-2xl border border-yellow-300 p-0 md:p-0 shadow-lg"
              style={{ boxShadow: '0 0 0 3px #e7c87333' }}
            >
              <div className="md:w-[350px] w-full flex-shrink-0 flex items-center justify-center bg-[#181f3a] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                <div className="w-full aspect-[4/3] md:w-[350px] md:h-[262px] flex items-center justify-center">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="object-cover object-center w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                  />
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center text-white">
                <div className="mb-3">
                  <span className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 font-semibold text-base shadow" style={{fontFamily: 'sans-serif'}}> {study.person} </span>
                </div>
                <div className="font-bold text-2xl mb-2" style={{fontFamily: 'serif'}}>{study.name}</div>
                <div className="mb-1 font-bold">{study.timeline}</div>
                <div className="mb-1 whitespace-pre-line text-white text-base">
                  {study.overview}
                </div>
                <div className="mt-4 text-white/80 text-base">
                  {study.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}