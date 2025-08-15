'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Jobs', href: '/jobs' },
    { name: 'Companies', href: '/companies' },
    { name: 'For Employers', href: '/employers' },
    { name: 'Career Resources', href: '/resources' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass backdrop-blur-xl border-b border-golden/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 golden-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Niyukti</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-golden-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-golden-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="golden-gradient text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-golden-600 p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-golden/20 mt-2 pt-4 pb-4"
          >
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-golden-600 px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-golden-600 px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="block golden-gradient text-white px-3 py-2 rounded-lg text-base font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;