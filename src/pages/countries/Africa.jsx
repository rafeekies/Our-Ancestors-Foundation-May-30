import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const Africa = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'africa-water',
      title: 'Clean Water Initiative',
      description: 'Building wells, water systems, and sanitation facilities to provide clean water access across multiple African countries.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
      category: 'Water',
      progress: 70
    },
    {
      id: 'africa-food',
      title: 'Food Security Program',
      description: 'Supporting sustainable agriculture, drought-resistant farming, and emergency food assistance in food-insecure regions.',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
      category: 'Food',
      progress: 65
    },
    {
      id: 'africa-education',
      title: 'Education for All',
      description: 'Building and supporting schools, training teachers, and providing educational materials to ensure quality education for children.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 60
    },
    {
      id: 'africa-healthcare',
      title: 'Healthcare Access',
      description: 'Supporting hospitals, clinics, and mobile medical teams to provide essential healthcare services in underserved communities.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 55
    }
  ];

  const countries = [
    { name: 'Somalia', link: '/countries/somalia' },
    { name: 'Sudan', link: '/countries/sudan' },
    { name: 'Niger', link: '#' },
    { name: 'Mali', link: '#' },
    { name: 'Chad', link: '#' },
    { name: 'Ethiopia', link: '#' },
    { name: 'Kenya', link: '#' },
    { name: 'Nigeria', link: '#' },
    { name: 'Burkina Faso', link: '#' },
    { name: 'Senegal', link: '#' },
    { name: 'Mauritania', link: '#' },
    { name: 'Gambia', link: '#' }
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
            Africa
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting communities across Africa through clean water, food security, education, and healthcare initiatives.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">Our Work Across Africa</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Africa is a diverse continent with rich cultures, abundant resources, and immense potential. However, many regions face significant humanitarian and development challenges, including food insecurity, limited access to clean water, inadequate healthcare services, and educational disparities. Climate change, conflict, and economic instability further compound these challenges in many areas.
              </p>
              
              <p className="text-lg mb-4">
                Our Ancestors Foundation works across multiple African countries, with a particular focus on regions with large Muslim populations and areas facing acute humanitarian needs. We partner with local organizations to implement sustainable development projects while also responding to emergencies when they occur.
              </p>
              
              <p className="text-lg mb-8">
                Our approach emphasizes community-led development, building local capacity, and implementing sustainable solutions that address immediate needs while also tackling root causes of poverty and vulnerability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Focus Areas</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Clean water access and sanitation</li>
                    <li>Food security and sustainable agriculture</li>
                    <li>Quality education and school infrastructure</li>
                    <li>Healthcare services and disease prevention</li>
                    <li>Emergency response in crisis situations</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Community-led development initiatives</li>
                    <li>Building local capacity and ownership</li>
                    <li>Sustainable and environmentally-friendly solutions</li>
                    <li>Partnerships with local organizations</li>
                    <li>Long-term commitment to communities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-12 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Countries We Work In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <Link 
                key={index} 
                to={country.link}
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition duration-300"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">400M+</div>
              <p className="text-lg text-gray-700">People without clean drinking water</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">282M</div>
              <p className="text-lg text-gray-700">People facing food insecurity</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100M+</div>
              <p className="text-lg text-gray-700">Children out of school</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50%</div>
              <p className="text-lg text-gray-700">Population without healthcare access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Africa</h2>
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
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Impact Stories</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories of how your donations are making a difference in communities across Africa.
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
                  Amina, a mother of five from a village in Niger, used to walk 10 kilometers each day to collect water for her family. The journey was dangerous and time-consuming, preventing her from earning income or caring for her children properly. The water was often contaminated, causing frequent illness in her family.
                </p>
                <p className="text-gray-700 mb-4">
                  "Water was our biggest struggle. My daughters and I spent hours each day just collecting enough to survive. We couldn't grow vegetables, keep our clothes clean, or even wash properly. Sickness was constant."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Clean Water Initiative, a deep well was installed in Amina's village, providing clean water to over 500 people. We also trained community members in water management and maintenance to ensure long-term sustainability.
                </p>
                <Link to="/stories/amina-niger" className="text-primary-600 font-medium hover:text-primary-700">
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
                  Ibrahim, 13, lives in a remote village in Mali where access to education has been disrupted by conflict and instability. The nearest school was destroyed, and many teachers fled the area. His parents, though supportive of education, couldn't afford to send him to a school in another town.
                </p>
                <p className="text-gray-700 mb-4">
                  "I always loved learning and dreamed of becoming an engineer. When our school was destroyed, I thought my dreams were over. Many of my friends gave up on education entirely."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Education for All program established a community learning center in Ibrahim's village, providing quality education in a safe environment. We recruited and trained local teachers and provided educational materials and a small library. The center now serves over 200 children from the surrounding area.
                </p>
                <Link to="/stories/ibrahim-mali" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Africa</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide clean water, food security, education, and healthcare to vulnerable communities across Africa.
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

export default Africa;
