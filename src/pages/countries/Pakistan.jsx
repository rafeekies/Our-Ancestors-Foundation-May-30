import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const Pakistan = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'pakistan-flood',
      title: 'Flood Recovery Program',
      description: 'Supporting communities affected by devastating floods with emergency relief, housing reconstruction, and livelihood recovery.',
      image: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg',
      category: 'Disaster Recovery',
      progress: 65
    },
    {
      id: 'pakistan-water',
      title: 'Clean Water Initiative',
      description: 'Building wells, water filtration plants, and sanitation facilities to provide clean water access in rural and underserved areas.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
      category: 'Water',
      progress: 70
    },
    {
      id: 'pakistan-education',
      title: 'Education for All',
      description: 'Constructing and supporting schools, training teachers, and providing scholarships to ensure quality education for children, especially girls.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 55
    },
    {
      id: 'pakistan-healthcare',
      title: 'Rural Healthcare Access',
      description: 'Supporting mobile clinics, maternal health services, and primary healthcare facilities in remote and underserved communities.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 45
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pakistan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting Pakistani communities through disaster recovery, clean water, education, and healthcare initiatives.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Pakistan</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Pakistan faces significant humanitarian and development challenges, including vulnerability to natural disasters, poverty, and limited access to essential services in many regions. The country has experienced devastating floods, earthquakes, and droughts that have affected millions of people and damaged critical infrastructure.
              </p>
              
              <p className="text-lg mb-4">
                Access to clean water remains a major challenge, with millions lacking safe drinking water and proper sanitation facilities. In education, despite progress, many children remain out of school, particularly girls in rural areas. Healthcare services are often inadequate in remote regions, contributing to preventable health issues and maternal mortality.
              </p>
              
              <p className="text-lg mb-8">
                Despite these challenges, Pakistan has shown remarkable resilience and has a vibrant civil society working to address these issues. Our Ancestors Foundation partners with local organizations across Pakistan to implement sustainable development projects while also responding to emergencies when they occur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Vulnerability to natural disasters</li>
                    <li>Limited access to clean water and sanitation</li>
                    <li>Educational disparities, especially for girls</li>
                    <li>Inadequate healthcare in rural areas</li>
                    <li>Poverty and economic inequality</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Disaster response and recovery programs</li>
                    <li>Clean water and sanitation infrastructure</li>
                    <li>Education support with focus on girls' education</li>
                    <li>Rural healthcare services and maternal health</li>
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
              <div className="text-4xl font-bold mb-2">33M+</div>
              <p className="text-lg">People affected by 2022 floods</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">22M</div>
              <p className="text-lg">People without clean drinking water</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">22.8M</div>
              <p className="text-lg">Children out of school</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-lg">Rural population without healthcare access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Pakistan</h2>
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
              Real stories of how your donations are making a difference in Pakistani communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg" 
                  alt="Amir's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Amir's Story: Rebuilding After Floods</h3>
                <p className="text-gray-700 mb-4">
                  Amir, a farmer from Sindh province, lost his home, crops, and livestock when devastating floods swept through his village in 2022. His family of six was forced to live in a makeshift tent for months, with no source of income and limited access to food and clean water.
                </p>
                <p className="text-gray-700 mb-4">
                  "The floods took everything we had built over generations. Our fields were underwater for months, and when the water receded, the soil was damaged. We didn't know how we would survive or if we could ever rebuild our lives."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Flood Recovery Program, Amir's family received emergency relief supplies, temporary shelter, and eventually support to rebuild their home with flood-resistant features. We also provided agricultural inputs and training on climate-resilient farming techniques to help restore his livelihood.
                </p>
                <Link to="/stories/amir" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Ayesha's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Ayesha's Story: Education Opens Doors</h3>
                <p className="text-gray-700 mb-4">
                  Ayesha, 12, lives in a remote village in Balochistan where girls' education is often not prioritized. The nearest school was 7 kilometers away, making it unsafe and impractical for her to attend. Her parents, though supportive of education, were concerned about her safety and the cultural barriers.
                </p>
                <p className="text-gray-700 mb-4">
                  "I always wanted to learn and become a teacher someday, but it seemed impossible. My brothers could go to school, but there was no safe way for me to get an education. I felt like my dreams were slipping away."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Education for All program established a community school in Ayesha's village, with female teachers from the local area. The school provides quality education while respecting cultural sensitivities. Ayesha is now one of the top students in her class and dreams of becoming a doctor.
                </p>
                <Link to="/stories/ayesha" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Pakistan</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide disaster relief, clean water, education, and healthcare to vulnerable communities across Pakistan.
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

export default Pakistan;
