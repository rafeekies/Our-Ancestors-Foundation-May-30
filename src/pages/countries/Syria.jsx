import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaTint, FaHospital, FaGraduationCap, FaHome } from 'react-icons/fa';

const Syria = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 'syria-emergency',
      title: 'Emergency Relief Program',
      description: 'Providing essential humanitarian aid including food, shelter, and medical supplies to families affected by the ongoing crisis.',
      image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
      category: 'Emergency',
      progress: 75
    },
    {
      id: 'syria-healthcare',
      title: 'Medical Aid Initiative',
      description: 'Supporting hospitals, clinics, and mobile medical teams to provide critical healthcare services in conflict-affected areas.',
      image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
      category: 'Healthcare',
      progress: 60
    },
    {
      id: 'syria-education',
      title: 'Education Support Program',
      description: 'Creating safe learning spaces and providing educational materials to ensure children can continue their education despite displacement.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      category: 'Education',
      progress: 50
    },
    {
      id: 'syria-shelter',
      title: 'Shelter Reconstruction',
      description: 'Rebuilding homes and providing shelter solutions for displaced families and those returning to damaged communities.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      category: 'Shelter',
      progress: 40
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3889927/pexels-photo-3889927.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Syria
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supporting Syrian communities through emergency relief, healthcare, education, and rebuilding initiatives.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center arabic-title">The Situation in Syria</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Syria continues to face one of the world's most complex and protracted humanitarian crises. After more than a decade of conflict, millions of Syrians remain displaced both within the country and as refugees in neighboring nations. Infrastructure has been severely damaged, with hospitals, schools, water systems, and homes destroyed in many areas.
              </p>
              
              <p className="text-lg mb-4">
                The economic situation has deteriorated significantly, with rising prices, currency devaluation, and limited livelihood opportunities pushing even more families into poverty. Access to basic services including healthcare, education, clean water, and electricity remains severely limited in many regions.
              </p>
              
              <p className="text-lg mb-8">
                Despite these immense challenges, Syrian communities demonstrate remarkable resilience and determination to rebuild their lives. Our Ancestors Foundation works with local partners across Syria and in refugee-hosting countries to provide immediate humanitarian assistance while also supporting long-term recovery and development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Widespread displacement and refugee crisis</li>
                    <li>Damaged infrastructure and housing</li>
                    <li>Limited access to healthcare and education</li>
                    <li>Economic crisis and high unemployment</li>
                    <li>Food insecurity and malnutrition</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Emergency humanitarian assistance</li>
                    <li>Medical aid and healthcare support</li>
                    <li>Education programs for children</li>
                    <li>Shelter rehabilitation and reconstruction</li>
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
              <div className="text-4xl font-bold mb-2">14.6M</div>
              <p className="text-lg">People in need of humanitarian assistance</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">6.7M</div>
              <p className="text-lg">Internally displaced persons</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">5.5M</div>
              <p className="text-lg">Syrian refugees in neighboring countries</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <p className="text-lg">Population living below poverty line</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Projects in Syria</h2>
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
              Real stories of how your donations are making a difference in Syrian communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3889753/pexels-photo-3889753.jpeg" 
                  alt="Layla's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Layla's Story: Healing Through Healthcare</h3>
                <p className="text-gray-700 mb-4">
                  Layla, a mother of three from Aleppo, was injured during an airstrike that also damaged her home. With local hospitals overwhelmed, she struggled to receive proper medical care for her injuries and for her youngest child who suffers from asthma.
                </p>
                <p className="text-gray-700 mb-4">
                  "When the bombing happened, I thought we would die. After surviving, I worried we would die slowly without medical care. My son couldn't breathe properly, and my wounds were becoming infected."
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Medical Aid Initiative, Layla and her son received treatment at one of our supported clinics. We also provided ongoing medication for her son's asthma and helped the family secure temporary shelter while their home was being repaired.
                </p>
                <Link to="/stories/layla" className="text-primary-600 font-medium hover:text-primary-700">
                  Read full story →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Yusuf's story" 
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Yusuf's Story: Learning Amid Crisis</h3>
                <p className="text-gray-700 mb-4">
                  Yusuf, 10, had his education interrupted when his school was destroyed and his family was forced to flee to a different region. For two years, he had no access to formal education and was beginning to lose hope for his future.
                </p>
                <p className="text-gray-700 mb-4">
                  "I used to love school. I wanted to be an engineer and build things. When our school was destroyed, I thought my dreams were over. I was forgetting what I had learned and felt like I would never catch up."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Education Support Program established a learning center in Yusuf's new community, providing accelerated learning programs to help children who had missed school catch up. The center also offers psychosocial support to help children process their experiences.
                </p>
                <Link to="/stories/yusuf" className="text-primary-600 font-medium hover:text-primary-700">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Support Syria</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide emergency relief, medical care, education, and hope to Syrian families in their time of greatest need.
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

export default Syria;
