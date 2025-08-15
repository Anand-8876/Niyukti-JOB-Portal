'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CogIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const JobCategories = () => {
  const categories = [
    {
      name: 'Technology',
      icon: CodeBracketIcon,
      count: '2,500+ jobs',
      description: 'Software, Web, Mobile, AI/ML',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Data & Analytics',
      icon: ChartBarIcon,
      count: '1,200+ jobs',
      description: 'Data Science, Business Intelligence',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Design',
      icon: PaintBrushIcon,
      count: '800+ jobs',
      description: 'UI/UX, Graphic, Product Design',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Marketing',
      icon: MegaphoneIcon,
      count: '950+ jobs',
      description: 'Digital, Content, Growth Marketing',
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Finance',
      icon: CurrencyDollarIcon,
      count: '750+ jobs',
      description: 'Banking, Investment, Fintech',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Human Resources',
      icon: UserGroupIcon,
      count: '600+ jobs',
      description: 'Talent, Operations, Culture',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      name: 'Operations',
      icon: CogIcon,
      count: '900+ jobs',
      description: 'Supply Chain, Project Management',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Healthcare',
      icon: HeartIcon,
      count: '650+ jobs',
      description: 'Medical, Pharma, Health Tech',
      color: 'from-red-400 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Browse by <span className="text-gradient">Category</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find opportunities in your field of expertise across various industries
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-golden-200 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-golden-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-golden-600 font-medium text-sm mb-2">
                    {category.count}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 golden-gradient text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            View All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobCategories;