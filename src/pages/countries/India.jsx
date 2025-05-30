import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const India = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'india-water',
      title: 'Clean Water Initiative',
      description: 'Providing sustainable access to clean water through wells, water purification systems, and rainwater harvesting in water-stressed regions.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
      category: 'Water',
      progress: 75
    },
    {
      id: 'india-education',
      title: 'Education for All',
      description: 'Supporting quality education for underprivileged children through school infrastructure, teacher training, and scholarship programs.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 65
    },
    {
      id: 'india-healthcare',
      title: 'Rural Healthcare Access',
      description: 'Improving healthcare access in remote areas through mobile clinics, medical camps, and support for primary healthcare centers.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 60
    },
    {
      id: 'india-livelihood',
      title: 'Sustainable Livelihoods',
      description: 'Empowering communities through vocational training, microfinance, and support for small businesses and sustainable agriculture.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Livelihoods',
      progress: 50
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            India
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting vulnerable communities across India through clean water, education, healthcare, and sustainable livelihood initiatives.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/donate/emergency" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Donate to Emergency Appeal
            </Link>
            <Link to="#projects" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              View Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in India</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                India, with its vast population and diverse geography, faces significant development challenges despite impressive economic growth in recent decades. While progress has been made in many areas, disparities persist, with millions still living in poverty and lacking access to basic services, particularly in rural areas and urban slums.
              </p>
              
              <p className="text-lg mb-4">
                Water scarcity is a critical issue in many regions, with groundwater depletion and pollution affecting both rural and urban communities. Access to quality education remains uneven, and healthcare services are often inadequate in remote and underserved areas. Additionally, climate change impacts, including droughts, floods, and extreme weather events, disproportionately affect vulnerable communities.
              </p>
              
              <p className="text-lg mb-8">
                Our Ancestors Foundation works with local partners across India to implement sustainable development projects that address these challenges while respecting the rich cultural diversity and building on the strengths of local communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Water scarcity and contamination</li>
                    <li>Educational disparities and dropout rates</li>
                    <li>Limited healthcare access in rural areas</li>
                    <li>Poverty and economic inequality</li>
                    <li>Climate change vulnerability</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sustainable water infrastructure development</li>
                    <li>Quality education support and innovation</li>
                    <li>Rural healthcare services and awareness</li>
                    <li>Livelihood development and skills training</li>
                    <li>Community-led development initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">163M</div>
              <p className="text-lg">People without clean drinking water</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">6M+</div>
              <p className="text-lg">Children out of school</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <p className="text-lg">Rural population with limited healthcare</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">21%</div>
              <p className="text-lg">Population living below poverty line</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in India</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with local partners to implement projects that address both immediate needs and long-term development goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary-600 h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Impact Stories</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories of how your donations are making a difference in Indian communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg" 
                  alt="Priya's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Priya's Story: Water Transforms a Village</h3>
                <p className="text-gray-700 mb-4">
                  Priya lives in a drought-prone village in Rajasthan where water scarcity has been a persistent challenge. Women and girls would spend hours each day walking long distances to collect water, often of poor quality. Waterborne diseases were common, and agricultural productivity was low due to insufficient water for irrigation.
                </p>
                <p className="text-gray-700 mb-4">
                  "Water dominated our lives – the lack of it, the search for it, the worry about it. My daughters and I would wake before dawn to begin collecting water, which meant they often missed school. The water we found was sometimes so dirty that we knew it would make us sick, but we had no choice."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Clean Water Initiative, we implemented a comprehensive water solution in Priya's village, including a deep well, solar-powered pumping system, water storage tanks, and a community-managed distribution system. We also introduced water conservation techniques and rainwater harvesting structures.
                </p>
                <Link to="/stories/priya" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Ravi's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Ravi's Story: Education Opens Doors</h3>
                <p className="text-gray-700 mb-4">
                  Ravi, 14, comes from a family of agricultural laborers in a remote village in Bihar. His parents, though illiterate themselves, were determined that their children would receive an education. However, the local school was in disrepair, lacked basic facilities, and had a shortage of qualified teachers.
                </p>
                <p className="text-gray-700 mb-4">
                  "I always loved learning, but our school had so many problems. The roof leaked during monsoon season, we didn't have enough books, and teachers were often absent. Many of my friends dropped out to work in the fields, and I feared I would have to do the same."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Education for All program renovated Ravi's school, provided educational materials, and supported teacher training and retention. We also established a digital learning center with computers and internet access, opening up new educational opportunities. Additionally, Ravi received a scholarship to continue his education through high school.
                </p>
                <Link to="/stories/ravi" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support India</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide clean water, quality education, healthcare, and sustainable livelihoods to vulnerable communities across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate/emergency" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Donate to Emergency Appeal
            </Link>
            <Link to="/get-involved/volunteer" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default India;
