import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const Afghanistan = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'afghanistan-emergency',
      title: 'Winter Emergency Relief',
      description: 'Providing essential winter supplies including blankets, heating fuel, and warm clothing to vulnerable families in remote areas.',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      category: 'Emergency',
      progress: 80
    },
    {
      id: 'afghanistan-food',
      title: 'Food Security Program',
      description: 'Distributing food packages and supporting sustainable agriculture initiatives to address widespread food insecurity.',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
      category: 'Food',
      progress: 65
    },
    {
      id: 'afghanistan-healthcare',
      title: 'Rural Healthcare Access',
      description: 'Supporting mobile clinics and rural health centers to provide essential medical services in underserved communities.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 50
    },
    {
      id: 'afghanistan-education',
      title: 'Education for All',
      description: 'Creating safe learning spaces and supporting education initiatives for children, especially girls, in marginalized communities.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 40
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Afghanistan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting Afghan communities through humanitarian aid, healthcare, education, and sustainable development initiatives.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Afghanistan</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Afghanistan faces one of the world's most severe humanitarian crises, with decades of conflict, political instability, and natural disasters creating immense challenges for its people. The country experiences harsh winters, frequent droughts, and economic hardship, with millions of Afghans struggling to meet their basic needs.
              </p>
              
              <p className="text-lg mb-4">
                Access to healthcare, education, and clean water remains limited, particularly in rural areas. Women and children are especially vulnerable, with restricted access to essential services and opportunities. Despite these challenges, Afghan communities demonstrate remarkable resilience and determination to rebuild their lives.
              </p>
              
              <p className="text-lg mb-8">
                Our Ancestors Foundation works with local partners across Afghanistan to provide immediate humanitarian assistance while also implementing sustainable development projects that address root causes of poverty and vulnerability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Severe food insecurity affecting millions</li>
                    <li>Limited access to healthcare services</li>
                    <li>Restricted educational opportunities, especially for girls</li>
                    <li>Harsh winter conditions in mountainous regions</li>
                    <li>Economic crisis and high unemployment</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Emergency winter relief in vulnerable communities</li>
                    <li>Food security and sustainable agriculture programs</li>
                    <li>Mobile health clinics and medical support</li>
                    <li>Safe learning spaces and education initiatives</li>
                    <li>Livelihood support and skills training</li>
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
              <div className="text-4xl font-bold mb-2">24.4M</div>
              <p className="text-lg">People in need of humanitarian assistance</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">19.7M</div>
              <p className="text-lg">People facing acute food insecurity</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">3.5M</div>
              <p className="text-lg">Internally displaced persons</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-lg">Households with insufficient food consumption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Afghanistan</h2>
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
              Real stories of how your donations are making a difference in Afghan communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" 
                  alt="Noor's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Noor's Story: Warmth in Winter</h3>
                <p className="text-gray-700 mb-4">
                  Noor, a widow with four children, lives in a remote village in Badakhshan province where winter temperatures regularly drop below freezing. After losing her husband, she struggled to provide for her family, especially during the harsh winter months.
                </p>
                <p className="text-gray-700 mb-4">
                  "Last winter was the hardest. We had no heating fuel, not enough blankets, and my children were constantly sick from the cold. I feared we wouldn't survive another winter."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Winter Emergency Relief program, Noor's family received winter supplies including blankets, warm clothing, heating fuel, and food packages to last through the coldest months. We also helped repair her home to better withstand the winter conditions.
                </p>
                <Link to="/stories/noor" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Fatima's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Fatima's Story: Education Opens Doors</h3>
                <p className="text-gray-700 mb-4">
                  Fatima, 12, had her education interrupted when schools in her area closed. Her family, struggling with economic hardship, considered arranging her marriage despite her young age. Our Education for All program established a community-based education center in her village.
                </p>
                <p className="text-gray-700 mb-4">
                  "I love learning and have always dreamed of becoming a doctor to help my community. When the school closed, I thought my dreams were over. Now I can continue my education in a safe environment, and my parents understand how important it is for my future."
                </p>
                <p className="text-gray-700 mb-4">
                  The education center now serves over 200 children, with a special focus on girls' education. We also provide awareness programs for parents about the importance of education and the harmful effects of child marriage.
                </p>
                <Link to="/stories/fatima" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Afghanistan</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide emergency relief, healthcare, education, and hope to vulnerable communities across Afghanistan.
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

export default Afghanistan;
