import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandHoldingHeart, FaHospital, FaGraduationCap, FaHome, FaWater } from 'react-icons/fa';

const Palestine = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'gaza-emergency',
      title: 'Gaza Emergency Relief',
      description: 'Providing urgent humanitarian aid including food, medical supplies, and shelter to families affected by the ongoing crisis.',
      image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
      category: 'Emergency',
      progress: 65
    },
    {
      id: 'palestine-education',
      title: 'Education Support Program',
      description: 'Supporting schools and educational facilities to ensure children can continue their education despite challenging circumstances.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 45
    },
    {
      id: 'palestine-healthcare',
      title: 'Medical Aid Initiative',
      description: 'Supplying hospitals and clinics with essential medical equipment, medications, and supporting healthcare workers.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 70
    },
    {
      id: 'palestine-housing',
      title: 'Housing Reconstruction',
      description: 'Rebuilding homes for families who have lost their houses due to conflict, providing safe and dignified shelter.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      category: 'Housing',
      progress: 30
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1974699/pexels-photo-1974699.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Palestine
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting Palestinian communities through humanitarian aid, education, healthcare, and sustainable development.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Palestine</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Palestinians continue to face immense challenges due to ongoing conflict, blockade, and displacement. The humanitarian situation in Gaza is particularly dire, with limited access to clean water, electricity, and essential services. In the West Bank, communities face restrictions on movement, land access, and economic opportunities.
              </p>
              
              <p className="text-lg mb-4">
                Despite these challenges, Palestinian communities demonstrate remarkable resilience and determination. Our Ancestors Foundation works directly with local partners to provide immediate humanitarian relief while also supporting long-term development projects that strengthen community infrastructure and self-sufficiency.
              </p>
              
              <p className="text-lg mb-8">
                Our work in Palestine focuses on emergency humanitarian aid, healthcare support, education initiatives, and economic development programs. We believe in empowering communities to build sustainable futures while addressing immediate critical needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ongoing humanitarian crisis in Gaza</li>
                    <li>Limited access to healthcare and essential services</li>
                    <li>Damaged infrastructure and housing</li>
                    <li>Restricted movement and economic opportunities</li>
                    <li>Trauma and mental health concerns</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Emergency humanitarian assistance</li>
                    <li>Supporting hospitals and healthcare facilities</li>
                    <li>Educational support for children and youth</li>
                    <li>Housing reconstruction and infrastructure repair</li>
                    <li>Psychosocial support programs</li>
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
              <div className="text-4xl font-bold mb-2">2.1M+</div>
              <p className="text-lg">People in need in Gaza</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <p className="text-lg">Children in Gaza population</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">78%</div>
              <p className="text-lg">Unemployment rate among youth</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-lg">Water unfit for human consumption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Palestine</h2>
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
              Real stories of how your donations are making a difference in Palestinian communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg" 
                  alt="Ahmad's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Ahmad's Story: Rebuilding After Crisis</h3>
                <p className="text-gray-700 mb-4">
                  Ahmad, a father of four from Gaza, lost his home during recent conflicts. Through our housing reconstruction program, his family received temporary shelter and support to rebuild their home. Today, they have a safe place to live and Ahmad has joined our community rebuilding initiative, helping other families recover.
                </p>
                <p className="text-gray-700 mb-4">
                  "Having a safe home for my children means everything. Now I can focus on their education and future instead of worrying about our basic survival. I'm grateful to be able to help others in my community rebuild their lives too."
                </p>
                <Link to="/stories/ahmad" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg" 
                  alt="Fatima's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Fatima's Story: Healthcare Hero</h3>
                <p className="text-gray-700 mb-4">
                  Fatima is a nurse at Al-Shifa Hospital in Gaza, where medical supplies were critically low. Our medical aid initiative provided essential equipment and medications, allowing Fatima and her colleagues to continue saving lives under extremely challenging conditions.
                </p>
                <p className="text-gray-700 mb-4">
                  "The support we received made an immediate difference. We went from having to ration basic supplies to being able to properly treat patients. It's given us hope during the darkest times and allowed us to continue our mission of healing."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Palestine</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide emergency relief, medical care, education, and hope to Palestinian families in their time of greatest need.
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

export default Palestine;
