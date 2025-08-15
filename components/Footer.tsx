'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    'For Job Seekers': [
      'Browse Jobs',
      'Career Advice',
      'Resume Builder',
      'Salary Guide',
      'Interview Tips'
    ],
    'For Employers': [
      'Post a Job',
      'Browse Candidates',
      'Employer Branding',
      'Recruitment Solutions',
      'Pricing'
    ],
    'Resources': [
      'Help Center',
      'Career Resources',
      'Industry Reports',
      'Blog',
      'Webinars'
    ],
    'Company': [
      'About Us',
      'Careers',
      'Press',
      'Investors',
      'Contact Us'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 golden-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Niyukti</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's premier job portal connecting talented professionals with leading companies. 
              Build your career with opportunities that match your skills and aspirations.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-golden-600 transition-colors duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#" 
                      className="text-gray-400 hover:text-golden-400 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Niyukti. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-golden-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-golden-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-golden-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;