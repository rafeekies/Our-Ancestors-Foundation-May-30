import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const Lebanon = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'lebanon-emergency',
      title: 'Crisis Response Program',
      description: 'Providing emergency assistance to families affected by the economic crisis and Beirut port explosion, including food, shelter, and medical aid.',
      image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
      category: 'Emergency',
      progress: 70
    },
    {
      id: 'lebanon-healthcare',
      title: 'Healthcare Support Initiative',
      description: 'Supporting hospitals and clinics with medical supplies, equipment, and funding to ensure continued healthcare services amid the crisis.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 55
    },
    {
      id: 'lebanon-education',
      title: 'Education Continuity Program',
      description: 'Ensuring children can continue their education through school support, scholarships, and digital learning resources.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 45
    },
    {
      id: 'lebanon-livelihoods',
      title: 'Economic Recovery Initiative',
      description: 'Supporting small businesses, providing vocational training, and creating job opportunities to help families rebuild their livelihoods.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Livelihoods',
      progress: 35
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1631660/pexels-photo-1631660.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lebanon
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting Lebanese communities and refugees through crisis response, healthcare, education, and economic recovery initiatives.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Lebanon</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Lebanon faces a complex humanitarian situation resulting from multiple overlapping crises. The country is experiencing one of the worst economic collapses globally, with severe currency devaluation, hyperinflation, and widespread poverty. This economic crisis has been compounded by political instability, the COVID-19 pandemic, and the devastating Beirut port explosion of 2020.
              </p>
              
              <p className="text-lg mb-4">
                Additionally, Lebanon hosts the highest number of refugees per capita globally, including over 1.5 million Syrian refugees and Palestinian refugees. The healthcare system is under immense strain, with shortages of medications, medical supplies, and healthcare workers. Many families struggle to afford basic necessities including food, medicine, and education.
              </p>
              
              <p className="text-lg mb-8">
                Despite these challenges, Lebanese communities demonstrate remarkable resilience and solidarity. Our Ancestors Foundation works with local partners across Lebanon to provide immediate humanitarian assistance while also supporting long-term recovery and development initiatives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Severe economic crisis and currency collapse</li>
                    <li>High poverty rates and food insecurity</li>
                    <li>Healthcare system breakdown</li>
                    <li>Education disruption for children</li>
                    <li>Large refugee population with specific needs</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Emergency humanitarian assistance</li>
                    <li>Healthcare support and medical aid</li>
                    <li>Education continuity programs</li>
                    <li>Livelihood and economic recovery initiatives</li>
                    <li>Support for both host communities and refugees</li>
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
              <div className="text-4xl font-bold mb-2">78%</div>
              <p className="text-lg">Population living below poverty line</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">1.5M+</div>
              <p className="text-lg">Syrian refugees hosted in Lebanon</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-lg">Unemployment rate</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-lg">Currency devaluation since 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Lebanon</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with local partners to implement projects that address both immediate humanitarian needs and long-term recovery goals.
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
              Real stories of how your donations are making a difference in Lebanese communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg" 
                  alt="Mariam's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Mariam's Story: Healthcare Amid Crisis</h3>
                <p className="text-gray-700 mb-4">
                  Mariam, a nurse at a public hospital in Beirut, witnessed the healthcare system's collapse firsthand. With medical supplies dwindling and staff leaving due to unpaid salaries, the hospital struggled to provide even basic care to patients.
                </p>
                <p className="text-gray-700 mb-4">
                  "We were running out of everything – medications, anesthetics, even gloves and masks. Some days we had to turn away patients because we simply couldn't treat them. It was heartbreaking, especially knowing that many couldn't afford private healthcare."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Healthcare Support Initiative, Mariam's hospital received essential medical supplies, equipment, and funding to maintain operations. We also provided salary support for key medical staff, ensuring they could continue their vital work.
                </p>
                <Link to="/stories/mariam" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Hassan's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Hassan's Story: Education Despite Adversity</h3>
                <p className="text-gray-700 mb-4">
                  Hassan, 15, was at risk of dropping out of school when his family could no longer afford the fees after his father lost his job due to the economic crisis. With prices skyrocketing and the family's savings worthless due to currency devaluation, education seemed like a luxury they couldn't afford.
                </p>
                <p className="text-gray-700 mb-4">
                  "I've always been a good student and dreamed of becoming an engineer. When my parents told me they might have to take me out of school, I felt like my future was being stolen from me. I started looking for work instead of focusing on my studies."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Education Continuity Program provided Hassan with a scholarship covering his school fees, books, and transportation. We also supported his school with resources to improve the quality of education despite the challenging circumstances.
                </p>
                <Link to="/stories/hassan" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Lebanon</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide emergency relief, healthcare, education, and economic opportunities to vulnerable communities across Lebanon.
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

export default Lebanon;
