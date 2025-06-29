import React from 'react';
import { motion } from 'framer-motion';

export default function TimeDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex justify-center items-center py-12 px-2 bg-transparent"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
      
        <div className="md:w-1/2 w-full p-10 flex flex-col items-center md:items-start bg-white">
      
          <div className="mb-6 flex flex-col items-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="30" rx="28" ry="20" fill="url(#paint0_linear)" />
              <ellipse cx="40" cy="20" rx="6" ry="10" fill="url(#paint0_linear)" />
              <ellipse cx="20" cy="20" rx="6" ry="10" fill="url(#paint0_linear)" />
              <circle cx="30" cy="35" r="6" fill="#fff" />
              <defs>
                <linearGradient id="paint0_linear" x1="10" y1="30" x2="50" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5b8cff" />
                  <stop offset="1" stopColor="#a06cff" />
                </linearGradient>
              </defs>
            </svg>
            <span className="block text-2xl font-bold tracking-tight mt-2" style={{fontFamily: 'sans-serif', color: '#222'}}>App<span className="text-blue-500">Rabbit</span></span>
          </div>
          <h2 className="text-[1.5rem] font-semibold mb-2 text-gray-900">App Demo Call</h2>
          <div className="flex items-center text-gray-500 mb-1 text-base">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            30 Mins
          </div>
          <div className="flex items-center text-gray-500 mb-4 text-base">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Mon, Jul 1, 2025
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            Book a 30 minute free demo call with AppRabbit. See how you can launch your own custom iOS, Android, and web coaching app in just 3 weeks. Get your questions answered and discover how AppRabbit can upgrade your coaching business.
          </p>
        </div>
       
        <div className="md:w-1/2 w-full p-10 bg-white flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date & Time</h3>
          
          <div className="flex items-center justify-between mb-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <span className="font-medium text-gray-700 text-base">June 2025</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
       
          <div className="mb-4">
            <div className="grid grid-cols-7 text-center text-gray-400 text-xs mb-1">
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>
            <div className="grid grid-cols-7 text-center text-gray-700 text-base">
              {/* Empty days for alignment */}
              <div></div><div></div><div></div><div></div><div></div><div></div><div>1</div>
              <div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
              <div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
              <div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div>
              <div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div>
              {/* Highlighted day */}
              <div className="col-span-1 flex justify-center items-center"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">30</span></div>
            </div>
          </div>
          {/* Time zone */}
          <div className="flex items-center text-gray-500 text-xs mb-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            GMT+05:00 Asia/Karachi (GMT+5)
          </div>
          {/* Time slots */}
          <div className="flex flex-col gap-2 mt-2">
            {['02:00 PM','02:45 PM','04:15 PM','05:00 PM','05:45 PM','06:30 PM','10:15 PM'].map((time, idx) => (
              <button key={idx} className="border border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50 transition-all w-full">
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}