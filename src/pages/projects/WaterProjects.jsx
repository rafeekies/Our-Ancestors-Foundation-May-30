import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTint, FaHandPaper, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const WaterProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const waterProjects = [
    {
      id: 'somalia-wells',
      title: 'Somalia Clean Water Wells',
      description: 'Building sustainable water wells in drought-affected regions of Somalia to provide clean drinking water to communities.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
      location: 'Somalia',
      beneficiaries: 5000,
      progress: 75
    },
    {
      id: 'sudan-water',
      title: 'Sudan Water Purification',
      description: 'Installing water purification systems in villages across Sudan to ensure access to safe drinking water.',
      image: 'https://images.pexels.com/photos/2537610/pexels-photo-2537610.jpeg',
      location: 'Sudan',
      beneficiaries: 3500,
      progress: 60
    },
    {
      id: 'pakistan-irrigation',
      title: 'Pakistan Irrigation Systems',
      description: 'Developing sustainable irrigation systems for farming communities in rural Pakistan to improve agricultural productivity.',
      image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
      location: 'Pakistan',
      beneficiaries: 2800,
      progress: 45
    },
    {
      id: 'bangladesh-rainwater',
      title: 'Bangladesh Rainwater Harvesting',
      description: 'Implementing rainwater harvesting systems in coastal Bangladesh communities affected by saltwater intrusion.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      location: 'Bangladesh',
      beneficiaries: 4200,
      progress: 80
    },
    {
      id: 'palestine-infrastructure',
      title: 'Palestine Water Infrastructure',
      description: 'Repairing and upgrading water infrastructure in Palestinian communities with limited access to clean water.',
      image: 'https://images.pexels.com/photos/2031756/pexels-photo-2031756.jpeg',
      location: 'Palestine',
      beneficiaries: 7500,
      progress: 35
    },
    {
      id: 'syria-emergency',
      title: 'Syria Emergency Water Supply',
      description: 'Providing emergency water supplies to displaced communities and refugee camps in Syria and neighboring countries.',
      image: 'https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg',
      location: 'Syria',
      beneficiaries: 12000,
      progress: 65
    },
    {
      id: 'nigeria-boreholes',
      title: 'Nigeria Community Boreholes',
      description: 'Drilling deep boreholes to access clean groundwater for communities in northern Nigeria facing water scarcity.',
      image: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg',
      location: 'Nigeria',
      beneficiaries: 8500,
      progress: 50
    },
    {
      id: 'afghanistan-springs',
      title: 'Afghanistan Spring Protection',
      description: 'Protecting natural springs and developing distribution systems to provide clean water to remote Afghan villages.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      location: 'Afghanistan',
      beneficiaries: 3200,
      progress: 40
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-blue-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="islamic-pattern-dark absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 arabic-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Water Projects
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Providing sustainable access to clean water for communities across Sudan, Somalia, Pakistan, Bangladesh, Palestine, Syria, Nigeria, and Afghanistan.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/donate?category=water" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
                Support Water Projects
              </Link>
              <a href="#projects" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Crisis Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">The Global Water Crisis</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Access to clean water is a fundamental human right, yet millions of people across the Muslim world struggle daily to find safe water for drinking, cooking, and sanitation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTint className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">771 Million</h3>
                <p className="text-gray-700">
                  People worldwide lack access to clean drinking water, with a disproportionate number in Muslim-majority countries.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandPaper className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">3.6 Million</h3>
                <p className="text-gray-700">
                  People die each year from water-related diseases that could be prevented with clean water access.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">200+ Million</h3>
                <p className="text-gray-700">
                  Hours spent daily by women and children collecting water, often from unsafe sources far from home.
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                The water crisis affects every aspect of life - from health and education to economic opportunity and security. In many Muslim-majority countries, climate change, conflict, and inadequate infrastructure have exacerbated water scarcity, making access to clean water an urgent humanitarian priority.
              </p>
              
              <p className="text-lg mb-4">
                Our Ancestors Foundation implements sustainable water solutions tailored to local needs and conditions. From deep wells in Somalia to rainwater harvesting systems in Bangladesh, our projects provide immediate relief while building long-term resilience.
              </p>
              
              <p className="text-lg mb-8">
                Water is mentioned over 60 times in the Holy Quran, highlighting its spiritual and practical importance in Islam. By supporting our water projects, you're fulfilling a critical need while honoring Islamic principles of charity and stewardship.
              </p>
              
              <blockquote className="bg-blue-50 p-6 rounded-lg italic text-gray-700 border-l-4 border-blue-500">
                "And We made from water every living thing. Will they not then believe?" (Quran 21:30)
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Approach</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                We implement sustainable water solutions that address immediate needs while building long-term community resilience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community-Led Solutions</h3>
                <p className="text-gray-700 mb-4">
                  We work directly with local communities to understand their specific water challenges and develop appropriate solutions. This collaborative approach ensures projects meet real needs and can be maintained long-term.
                </p>
                <p className="text-gray-700">
                  Each project includes training for local water committees who oversee maintenance and operations, creating a sense of ownership and ensuring sustainability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Impact</h3>
                <p className="text-gray-700 mb-4">
                  Our water projects go beyond just providing clean water. They transform entire communities by improving health, enabling education (especially for girls), creating economic opportunities, and reducing conflict over scarce resources.
                </p>
                <p className="text-gray-700">
                  We measure success not just by water points installed, but by improvements in community health, school attendance, and economic activity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Appropriate Technology</h3>
                <p className="text-gray-700 mb-4">
                  We use technologies appropriate for local conditions - from deep wells with solar pumps in arid regions to rainwater harvesting systems in areas with seasonal rainfall. All solutions are designed to be durable, efficient, and maintainable with local resources.
                </p>
                <p className="text-gray-700">
                  Our engineers work with local experts to ensure solutions are adapted to specific environmental conditions and community needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Islamic Values</h3>
                <p className="text-gray-700 mb-4">
                  Our water projects embody the Islamic principles of sadaqah jariyah (ongoing charity) and stewardship of resources. Each water point serves as a continuous source of blessing for donors while fulfilling a critical community need.
                </p>
                <p className="text-gray-700">
                  Many of our projects also include wudu (ablution) facilities near mosques, supporting both physical and spiritual well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Current Water Projects</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing water initiatives across Sudan, Somalia, Pakistan, Bangladesh, Palestine, Syria, Nigeria, and Afghanistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waterProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Water Project
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
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
                    <div className="mt-2 text-sm text-gray-600">
                      {project.beneficiaries.toLocaleString()} people will benefit
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      to={`/donate?project=${project.id}`} 
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">Transforming Lives Through Water</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 mb-4">
                  In the drought-prone region of Somaliland, Halima's village had no reliable water source. Women and girls would walk up to 8 kilometers each day to collect water from a contaminated seasonal pond, often spending 5-6 hours on this task alone.
                </p>
                <p className="text-gray-700 mb-4">
                  "The water was dirty and made our children sick, but we had no choice," Halima recalls. "My daughters couldn't attend school because they had to help me collect water."
                </p>
                <p className="text-gray-700 mb-4">
                  Our Ancestors Foundation worked with Halima's community to drill a deep borehole well equipped with a solar-powered pump. The well now provides clean water to over 2,000 people in the village and surrounding areas.
                </p>
                <p className="text-gray-700 mb-6">
                  "This well has changed everything for us. My daughters now attend school, waterborne illnesses have decreased dramatically, and I've started a small vegetable garden with the time I've saved. Clean water has given us hope and new opportunities."
                </p>
                <Link to="/stories/halima" className="text-blue-600 font-medium hover:text-blue-700 flex items-center w-fit">
                  Read Halima's full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3876390/pexels-photo-3876390.jpeg" 
                  alt="Woman collecting water from a well" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="islamic-pattern-dark absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Provide Clean Water</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can transform communities by providing sustainable access to clean, safe water. One well can serve hundreds of families for years to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate?category=water" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Donate to Water Projects
            </Link>
            <Link to="/get-involved/fundraise" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Start a Fundraiser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterProjects;
