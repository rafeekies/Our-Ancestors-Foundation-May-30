import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const Bangladesh = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'bangladesh-climate',
      title: 'Climate Resilience Program',
      description: 'Supporting communities vulnerable to climate change with disaster preparedness, resilient housing, and sustainable agriculture.',
      image: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg',
      category: 'Climate Action',
      progress: 60
    },
    {
      id: 'bangladesh-water',
      title: 'Clean Water Initiative',
      description: 'Providing access to safe drinking water through deep tube wells, water filtration systems, and rainwater harvesting in flood-prone areas.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
      category: 'Water',
      progress: 75
    },
    {
      id: 'bangladesh-education',
      title: 'Education for All',
      description: 'Supporting schools in underserved areas, providing scholarships, and implementing innovative education programs for vulnerable children.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 65
    },
    {
      id: 'bangladesh-healthcare',
      title: 'Community Healthcare',
      description: 'Operating mobile clinics, maternal health services, and health awareness programs in remote and underserved communities.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 50
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bangladesh
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting Bangladeshi communities through climate resilience, clean water, education, and healthcare initiatives.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Bangladesh</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Bangladesh faces significant humanitarian and development challenges, particularly related to its vulnerability to climate change and natural disasters. As one of the world's most densely populated countries, it experiences regular flooding, cyclones, and rising sea levels that threaten coastal communities and livelihoods.
              </p>
              
              <p className="text-lg mb-4">
                Despite impressive economic growth in recent decades, poverty remains a challenge, with millions living in informal settlements with limited access to clean water, sanitation, healthcare, and education. The country also hosts over a million Rohingya refugees who fled violence in neighboring Myanmar, creating additional humanitarian needs.
              </p>
              
              <p className="text-lg mb-8">
                Despite these challenges, Bangladesh has shown remarkable resilience and progress in many development indicators. Our Ancestors Foundation works with local partners across Bangladesh to implement sustainable development projects while also responding to emergencies when they occur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Extreme vulnerability to climate change</li>
                    <li>Regular flooding and cyclones</li>
                    <li>Limited access to clean water in many areas</li>
                    <li>Healthcare disparities in rural regions</li>
                    <li>Rohingya refugee crisis</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Climate resilience and disaster preparedness</li>
                    <li>Clean water and sanitation infrastructure</li>
                    <li>Education support and innovative learning</li>
                    <li>Community healthcare and maternal health</li>
                    <li>Sustainable livelihood development</li>
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
              <div className="text-4xl font-bold mb-2">35M+</div>
              <p className="text-lg">People at risk from climate change</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">20M</div>
              <p className="text-lg">People without safe drinking water</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">1.2M</div>
              <p className="text-lg">Rohingya refugees hosted</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">4.5M</div>
              <p className="text-lg">Children out of school</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Bangladesh</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with local partners to implement projects that address both immediate humanitarian needs and long-term development goals.
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
              Real stories of how your donations are making a difference in Bangladeshi communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg" 
                  alt="Rahima's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Rahima's Story: Resilience Against Climate Change</h3>
                <p className="text-gray-700 mb-4">
                  Rahima lives in a coastal village in southern Bangladesh that faces regular flooding and cyclones. Over the years, her family lost their home twice to severe storms, and saltwater intrusion damaged their agricultural land, threatening their livelihood and food security.
                </p>
                <p className="text-gray-700 mb-4">
                  "The sea is coming closer every year. During monsoon season, we live in constant fear. My husband used to grow rice, but the soil became too salty. We didn't know how we would survive here, but leaving our ancestral land wasn't an option for us."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Climate Resilience Program, Rahima's family received support to build a flood-resistant home on raised ground. We also provided training and resources for salt-tolerant agriculture and alternative livelihoods. Her family now grows salt-resistant rice varieties and vegetables using innovative techniques, and Rahima has started a small poultry business for additional income.
                </p>
                <Link to="/stories/rahima" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Kamal's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Kamal's Story: Clean Water Changes Lives</h3>
                <p className="text-gray-700 mb-4">
                  Kamal, 11, lives in a rural village where the only water source was a shallow pond contaminated with agricultural runoff. His family, like many others in the community, suffered from frequent waterborne illnesses. Kamal often missed school due to sickness, and his parents spent a significant portion of their limited income on medical expenses.
                </p>
                <p className="text-gray-700 mb-4">
                  "I was sick so often that I couldn't keep up with my studies. My younger sister was hospitalized twice with severe diarrhea. We knew our water was making us sick, but we had no alternative."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Clean Water Initiative installed a deep tube well and water filtration system in Kamal's village, providing safe drinking water to over 200 families. We also conducted hygiene education programs in the community and at the local school. Since then, waterborne illnesses have decreased dramatically, and Kamal is now attending school regularly and excelling in his studies.
                </p>
                <Link to="/stories/kamal" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Bangladesh</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide climate resilience, clean water, education, and healthcare to vulnerable communities across Bangladesh.
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

export default Bangladesh;
