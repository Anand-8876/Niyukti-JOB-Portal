'use client';

import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  ClockIcon, 
  CurrencyRupeeIcon,
  BookmarkIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      location: 'Bengaluru, Karnataka',
      type: 'Full-time',
      salary: '₹15-25 LPA',
      experience: '3-5 years',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      description: 'Join our innovative team to build cutting-edge web applications...',
      postedTime: '2 days ago',
      applicants: 45
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateHub',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      salary: '₹20-35 LPA',
      experience: '5-8 years',
      skills: ['Strategy', 'Analytics', 'Agile', 'Leadership'],
      description: 'Drive product strategy and execution for our flagship products...',
      postedTime: '1 day ago',
      applicants: 67
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'DesignFlow Studio',
      logo: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      salary: '₹8-15 LPA',
      experience: '2-4 years',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Create exceptional user experiences for digital products...',
      postedTime: '3 days ago',
      applicants: 32
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹12-22 LPA',
      experience: '3-6 years',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      description: 'Leverage data to drive business insights and decision making...',
      postedTime: '1 day ago',
      applicants: 23
    },
    {
      id: 5,
      title: 'Digital Marketing Manager',
      company: 'GrowthTech',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      location: 'Delhi, NCR',
      type: 'Full-time',
      salary: '₹10-18 LPA',
      experience: '4-7 years',
      skills: ['SEO', 'PPC', 'Social Media', 'Analytics'],
      description: 'Lead digital marketing strategies to drive customer acquisition...',
      postedTime: '4 days ago',
      applicants: 56
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudNext',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      salary: '₹14-24 LPA',
      experience: '3-5 years',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      description: 'Build and maintain scalable cloud infrastructure...',
      postedTime: '2 days ago',
      applicants: 34
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Featured</span> Opportunities
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover handpicked job opportunities from India's leading companies
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-golden-200 transition-all duration-300 transform group-hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={job.logo} 
                      alt={job.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-golden-600 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-golden-50 transition-colors duration-200">
                    <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-golden-500" />
                  </button>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    {job.type} • {job.experience}
                  </div>
                  <div className="flex items-center text-golden-600 font-semibold text-sm">
                    <CurrencyRupeeIcon className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-golden-50 text-golden-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{job.postedTime}</span>
                  <span>{job.applicants} applicants</span>
                </div>

                {/* Apply Button */}
                <button className="w-full mt-4 py-3 golden-gradient text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Apply Now
                </button>
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
          <button className="px-8 py-4 border-2 border-golden-400 text-golden-600 font-semibold rounded-xl hover:bg-golden-400 hover:text-white transition-all duration-200">
            View All Jobs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedJobs;