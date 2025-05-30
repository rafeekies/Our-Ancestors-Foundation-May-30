import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WaterProjects = () => {
  const waterProjects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing clean water solutions to communities in need through well construction, water purification systems, and rainwater harvesting.",
      image: "https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg",
      location: "Somalia",
      progress: 75,
      goal: 50000,
      raised: 37500
    },
    {
      id: 2,
      title: "Well Construction Project",
      description: "Building deep wells in rural areas to provide sustainable access to clean water for drinking, cooking, and sanitation.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      location: "Sudan",
      progress: 60,
      goal: 35000,
      raised: 21000
    },
    {
      id: 3,
      title: "Water Purification Systems",
      description: "Installing water purification systems in communities affected by contaminated water sources to prevent waterborne diseases.",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
      location: "Bangladesh",
      progress: 40,
      goal: 25000,
      raised: 10000
    },
    {
      id: 4,
      title: "Rainwater Harvesting",
      description: "Implementing rainwater harvesting systems to collect and store rainwater for use during dry seasons.",
      image: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg",
      location: "Pakistan",
      progress: 85,
      goal: 20000,
      raised: 17000
    },
    {
      id: 5,
      title: "Community Water Management",
      description: "Training local communities in sustainable water management practices to ensure long-term access to clean water.",
      image: "https://images.pexels.com/photos/2253916/pexels-photo-2253916.jpeg",
      location: "Afghanistan",
      progress: 65,
      goal: 30000,
      raised: 19500
    },
    {
      id: 6,
      title: "Emergency Water Relief",
      description: "Providing emergency water supplies to communities affected by natural disasters or conflicts.",
      image: "https://images.pexels.com/photos/1346382/pexels-photo-1346382.jpeg",
      location: "Syria",
      progress: 70,
      goal: 40000,
      raised: 28000
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Water Projects</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Providing sustainable access to clean water for communities in need through well construction, water purification systems, and rainwater harvesting.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <p className="text-xl text-gray-700">Water Projects Completed</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">100,000+</div>
              <p className="text-xl text-gray-700">People Given Access to Clean Water</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <p className="text-xl text-gray-700">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 arabic-title">Current Water Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing water projects and see how your support can make a difference in providing clean water to communities in need.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {waterProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={fadeIn}
              >
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      Water
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Raised: ${project.raised.toLocaleString()}</span>
                    <span>Goal: ${project.goal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      to="/donate" 
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">The Impact of Clean Water</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access to clean water transforms communities in multiple ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Health:</strong> Reduces waterborne diseases and improves overall community health</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Education:</strong> Children spend less time collecting water and more time in school</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Women's Empowerment:</strong> Women and girls spend less time collecting water, allowing more time for education and income-generating activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Economic Growth:</strong> Improved health leads to increased productivity and economic opportunities</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1327786/pexels-photo-1327786.jpeg" 
                alt="Clean water impact" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium text-gray-700 mb-8">
              "Before the well was built, I had to walk 3 hours each day to collect water for my family. Now, with clean water in our village, I can attend school regularly and dream of becoming a doctor."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg" 
                alt="Testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold text-gray-800">Amina Hassan</p>
                <p className="text-gray-600">Student, Somalia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Help Provide Clean Water</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can help provide clean water to communities in need, improving health, education, and economic opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Donate Now
            </Link>
            <Link to="/get-involved/volunteer" className="bg-transparent hover:bg-primary-700 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterProjects;
