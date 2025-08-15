'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const CompanySpotlight = () => {
  const companies = [
    {
      name: 'TechMahindra',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 4.5,
      reviews: 2340,
      openJobs: 45,
      description: 'Leading digital transformation, consulting and business re-engineering services.',
      industry: 'Information Technology',
      employees: '100K+',
      headquarters: 'Mumbai, India'
    },
    {
      name: 'Flipkart',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 4.3,
      reviews: 1876,
      openJobs: 32,
      description: 'India\'s leading e-commerce platform connecting millions of customers.',
      industry: 'E-commerce',
      employees: '50K+',
      headquarters: 'Bengaluru, India'
    },
    {
      name: 'Zomato',
      logo: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 4.1,
      reviews: 987,
      openJobs: 28,
      description: 'Restaurant aggregator and food delivery start-up transforming the food industry.',
      industry: 'Food & Beverage',
      employees: '5K+',
      headquarters: 'Delhi, India'
    },
    {
      name: 'Paytm',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 4.2,
      reviews: 1543,
      openJobs: 38,
      description: 'Digital payments and financial services company building the future of money.',
      industry: 'Fintech',
      employees: '25K+',
      headquarters: 'Noida, India'
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
    <section className="py-20 bg-gradient-to-br from-golden-50 via-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Company <span className="text-gradient">Spotlight</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover top-rated companies hiring talented professionals across India
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-xl hover:border-golden-200 transition-all duration-300 transform group-hover:scale-105">
                <div className="flex items-start space-x-6">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-golden-600 transition-colors duration-300">
                        {company.name}
                      </h3>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                          <span className="font-semibold text-gray-900">{company.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">({company.reviews} reviews)</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-golden-100 text-golden-700 rounded-full text-sm font-medium mb-2">
                        {company.openJobs} open positions
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {company.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Industry:</span>
                        <p className="font-medium text-gray-900">{company.industry}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Employees:</span>
                        <p className="font-medium text-gray-900">{company.employees}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">Headquarters:</span>
                        <p className="font-medium text-gray-900">{company.headquarters}</p>
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-6">
                      <button className="flex-1 py-3 golden-gradient text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        View Jobs
                      </button>
                      <button className="flex-1 py-3 border-2 border-golden-400 text-golden-600 font-semibold rounded-lg hover:bg-golden-400 hover:text-white transition-all duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 golden-gradient text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Explore All Companies
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanySpotlight;