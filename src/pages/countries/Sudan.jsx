import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap } from 'react-icons/fa';

const Sudan = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'sudan-food',
      title: 'Emergency Food Distribution',
      description: 'Providing life-saving food packages to families affected by conflict and food insecurity across Sudan.',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
      category: 'Food',
      progress: 75
    },
    {
      id: 'sudan-water',
      title: 'Clean Water Initiative',
      description: 'Building wells and water purification systems to provide clean drinking water to communities in need.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
      category: 'Water',
      progress: 60
    },
    {
      id: 'sudan-healthcare',
      title: 'Mobile Health Clinics',
      description: 'Operating mobile clinics that bring essential healthcare services to remote and underserved areas.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 45
    },
    {
      id: 'sudan-education',
      title: 'Education Support',
      description: 'Rebuilding schools and providing educational materials to ensure children can continue learning despite challenges.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 35
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sudan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Providing humanitarian aid and sustainable development solutions to communities across Sudan.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Sudan</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Sudan continues to face significant humanitarian challenges due to ongoing conflict, political instability, economic crisis, and climate-related disasters. Millions of people across the country are experiencing food insecurity, with many regions facing emergency levels of hunger.
              </p>
              
              <p className="text-lg mb-4">
                Access to clean water, healthcare, and education remains limited for many communities, particularly in conflict-affected areas and for internally displaced persons. Despite these challenges, the Sudanese people demonstrate remarkable resilience and determination to rebuild their communities.
              </p>
              
              <p className="text-lg mb-8">
                Our Ancestors Foundation works with local partners across Sudan to provide immediate humanitarian assistance while also implementing sustainable development projects that address root causes of poverty and vulnerability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Severe food insecurity affecting millions</li>
                    <li>Limited access to clean water and sanitation</li>
                    <li>Inadequate healthcare infrastructure</li>
                    <li>Disrupted education for children</li>
                    <li>Internal displacement due to conflict</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Emergency food distribution in crisis areas</li>
                    <li>Clean water projects and sanitation facilities</li>
                    <li>Mobile health clinics and medical support</li>
                    <li>Education programs and school rehabilitation</li>
                    <li>Sustainable agriculture and livelihood initiatives</li>
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
              <div className="text-4xl font-bold mb-2">15.8M+</div>
              <p className="text-lg">People in need of assistance</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">11.7M</div>
              <p className="text-lg">People facing acute food insecurity</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">3.7M</div>
              <p className="text-lg">Internally displaced persons</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <p className="text-lg">Population without healthcare access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Sudan</h2>
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
              Real stories of how your donations are making a difference in Sudanese communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3876390/pexels-photo-3876390.jpeg" 
                  alt="Amina's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Amina's Story: Water Changes Everything</h3>
                <p className="text-gray-700 mb-4">
                  Amina, a mother of five from North Darfur, used to walk 7 kilometers each day to collect water for her family. The journey was dangerous and time-consuming, preventing her from earning income or caring for her children properly.
                </p>
                <p className="text-gray-700 mb-4">
                  "When the well was built in our village, it changed everything. Now I have time to grow vegetables to sell at the market, and my daughters can attend school instead of helping me carry water. Clean water has brought health and opportunity to our entire community."
                </p>
                <Link to="/stories/amina" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Ibrahim's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Ibrahim's Story: Education Despite Adversity</h3>
                <p className="text-gray-700 mb-4">
                  Ibrahim, 14, was forced to flee his home in Blue Nile State with his family due to conflict. Living in a displacement camp, he had given up hope of continuing his education until our education support program established a learning center in the camp.
                </p>
                <p className="text-gray-700 mb-4">
                  "I thought my dreams of becoming a doctor were over when we had to leave our home. Now I can study again, and I'm working harder than ever. One day I want to return to my community and help build a clinic there."
                </p>
                <Link to="/stories/ibrahim" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Sudan</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide food, clean water, healthcare, and education to vulnerable communities across Sudan.
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

export default Sudan;
