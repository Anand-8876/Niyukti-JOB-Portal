'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const popularSearches = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'Digital Marketing',
    'UI/UX Designer',
    'Business Analyst'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden-50 via-yellow-50 to-orange-50">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-golden-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find Your{' '}
              <span className="text-gradient">Dream Job</span>
              <br />
              in India
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with top companies across India and take the next step in your career journey with Niyukti
            </motion.p>
          </div>

          {/* Search Box */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass rounded-2xl p-6 shadow-2xl border border-white/30">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-golden-400 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-golden-400 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <button className="px-8 py-4 golden-gradient text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 whitespace-nowrap">
                  Search Jobs
                </button>
              </div>
            </div>
          </motion.div>

          {/* Popular Searches */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-600 font-medium">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((search, index) => (
                <motion.button
                  key={search}
                  className="px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-gray-700 hover:bg-golden-100 hover:border-golden-300 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { number: '10K+', label: 'Active Jobs' },
              { number: '500+', label: 'Companies' },
              { number: '50K+', label: 'Job Seekers' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;