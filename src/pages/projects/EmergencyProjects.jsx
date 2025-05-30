import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExclamationTriangle, FaHandHoldingHeart, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const EmergencyProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const emergencyProjects = [
    {
      id: 'gaza-humanitarian',
      title: 'Gaza Humanitarian Crisis Response',
      description: 'Providing emergency food, shelter, medical aid, and essential supplies to families affected by the ongoing crisis in Gaza.',
      image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
      location: 'Palestine',
      beneficiaries: 50000,
      progress: 65
    },
    {
      id: 'syria-winter',
      title: 'Syria Winter Emergency Relief',
      description: 'Distributing winter supplies including blankets, heaters, warm clothing, and fuel to displaced Syrian families facing harsh winter conditions.',
      image: 'https://images.pexels.com/photos/1478524/pexels-photo-1478524.jpeg',
      location: 'Syria',
      beneficiaries: 35000,
      progress: 70
    },
    {
      id: 'lebanon-beirut',
      title: 'Lebanon Crisis Response',
      description: 'Supporting Lebanese families affected by the economic crisis and Beirut explosion with food aid, shelter rehabilitation, and livelihood support.',
      image: 'https://images.pexels.com/photos/4386149/pexels-photo-4386149.jpeg',
      location: 'Lebanon',
      beneficiaries: 28000,
      progress: 60
    },
    {
      id: 'yemen-food-security',
      title: 'Yemen Food Security Program',
      description: 'Addressing severe food insecurity in Yemen through emergency food distributions, cash assistance, and nutrition interventions.',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
      location: 'Yemen',
      beneficiaries: 42000,
      progress: 55
    },
    {
      id: 'afghanistan-displacement',
      title: 'Afghanistan Displacement Response',
      description: 'Providing emergency assistance to internally displaced families in Afghanistan, including shelter, food, and protection services.',
      image: 'https://images.pexels.com/photos/1478441/pexels-photo-1478441.jpeg',
      location: 'Afghanistan',
      beneficiaries: 30000,
      progress: 45
    },
    {
      id: 'sudan-floods',
      title: 'Sudan Flood Emergency Response',
      description: 'Supporting communities affected by devastating floods in Sudan with emergency shelter, clean water, and disease prevention measures.',
      image: 'https://images.pexels.com/photos/1756381/pexels-photo-1756381.jpeg',
      location: 'Sudan',
      beneficiaries: 25000,
      progress: 75
    },
    {
      id: 'somalia-drought',
      title: 'Somalia Drought Relief',
      description: 'Responding to severe drought in Somalia with water trucking, livestock support, cash assistance, and malnutrition treatment.',
      image: 'https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg',
      location: 'Somalia',
      beneficiaries: 38000,
      progress: 50
    },
    {
      id: 'pakistan-floods',
      title: 'Pakistan Flood Recovery',
      description: 'Supporting recovery efforts for communities affected by catastrophic flooding in Pakistan, including shelter reconstruction and livelihood restoration.',
      image: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg',
      location: 'Pakistan',
      beneficiaries: 45000,
      progress: 40
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-amber-600 text-white">
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
              Emergency Response Projects
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Providing rapid humanitarian assistance to communities facing acute crises in Palestine, Syria, Lebanon, Yemen, Afghanistan, Sudan, Somalia, and Pakistan.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/donate?category=emergency" className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
                Support Emergency Response
              </Link>
              <a href="#projects" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Crisis Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">The Humanitarian Emergency Crisis</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Millions of people in Muslim-majority countries face life-threatening emergencies due to conflict, natural disasters, and economic collapse, requiring immediate humanitarian assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaExclamationTriangle className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">274 Million</h3>
                <p className="text-gray-700">
                  People worldwide need humanitarian assistance, with a significant proportion in Muslim-majority countries affected by protracted crises.
                </p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandHoldingHeart className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">45 Million</h3>
                <p className="text-gray-700">
                  People are on the brink of famine in 43 countries, with Yemen, Afghanistan, and Somalia facing the most severe food insecurity.
                </p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100 Million</h3>
                <p className="text-gray-700">
                  People have been forcibly displaced worldwide, with Muslim-majority countries both generating and hosting large refugee populations.
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                The scale of humanitarian emergencies affecting Muslim communities globally is unprecedented. Protracted conflicts in Syria, Yemen, and Palestine; natural disasters exacerbated by climate change; and economic collapse in countries like Lebanon and Afghanistan have created complex, overlapping crises that require immediate response.
              </p>
              
              <p className="text-lg mb-4">
                Our Ancestors Foundation mobilizes rapidly to provide life-saving assistance during emergencies while also building resilience to future shocks. Our emergency response teams are on the ground in multiple crisis zones, delivering food, shelter, clean water, medical care, and protection services to those most in need.
              </p>
              
              <p className="text-lg mb-8">
                Islamic teachings emphasize the urgency of responding to those in distress. The Prophet Muhammad (peace be upon him) said, "The believer's shade on the Day of Resurrection will be his charity." By supporting our emergency response projects, you're providing immediate relief to those facing life-threatening situations while fulfilling a core Islamic value.
              </p>
              
              <blockquote className="bg-amber-50 p-6 rounded-lg italic text-gray-700 border-l-4 border-amber-500">
                "And they give food in spite of their love for it to the poor, the orphan, and the captive, [saying], 'We feed you only for the countenance of Allah. We wish not from you reward or gratitude.'" (Quran 76:8-9)
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
                We implement rapid, effective, and dignified emergency responses that address immediate needs while laying the groundwork for recovery and resilience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Rapid Response</h3>
                <p className="text-gray-700 mb-4">
                  We maintain emergency response teams and pre-positioned supplies in strategic locations, allowing us to mobilize within hours of a crisis. Our local presence in multiple countries enables us to access affected communities quickly, even in complex security environments.
                </p>
                <p className="text-gray-700">
                  Our emergency assessment teams use digital data collection tools to rapidly identify needs and vulnerabilities, ensuring aid reaches those who need it most urgently.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Assistance</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency response packages address multiple dimensions of human needs: food security, shelter, clean water, healthcare, protection, and psychosocial support. We recognize that emergencies affect different groups in different ways and tailor our assistance accordingly.
                </p>
                <p className="text-gray-700">
                  Where possible, we use cash and voucher assistance to allow affected families to meet their needs with dignity and support local markets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Local Partnership</h3>
                <p className="text-gray-700 mb-4">
                  We work through and with local organizations and community structures, recognizing that they are often the first responders and have the best understanding of local contexts. Our approach strengthens local capacity for both immediate response and future emergencies.
                </p>
                <p className="text-gray-700">
                  We engage affected communities in all aspects of our response, from needs assessment to program design and monitoring, ensuring accountability and relevance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Linking Relief to Recovery</h3>
                <p className="text-gray-700 mb-4">
                  Even in the acute phase of an emergency, we design our interventions with an eye toward recovery and long-term resilience. Our emergency programs include elements that support the transition to sustainable solutions, such as livelihood recovery, infrastructure rehabilitation, and capacity building.
                </p>
                <p className="text-gray-700">
                  We advocate for policy changes that address the root causes of crises and reduce vulnerability to future emergencies.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Current Emergency Projects</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing emergency response initiatives across Palestine, Syria, Lebanon, Yemen, Afghanistan, Sudan, Somalia, and Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Emergency Response
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-amber-600 mr-2" />
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
                        className="bg-amber-600 h-2.5 rounded-full" 
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
                      className="text-amber-600 font-medium hover:text-amber-700 flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      to={`/donate?project=${project.id}`} 
                      className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">Emergency Aid When It Matters Most</h2>
                <div className="w-20 h-1 bg-amber-600 mb-6"></div>
                <p className="text-gray-700 mb-4">
                  When the bombing intensified in Gaza, Um Ahmad and her five children were forced to flee their home with only the clothes on their backs. They found temporary shelter in a school that was already overcrowded with hundreds of other displaced families.
                </p>
                <p className="text-gray-700 mb-4">
                  "We had no food, no clean water, no blankets, nothing," Um Ahmad recalls. "My children were terrified and hungry. I didn't know how we would survive."
                </p>
                <p className="text-gray-700 mb-4">
                  Within days, our emergency response team reached the school with essential supplies. Um Ahmad's family received emergency food parcels, hygiene kits, blankets, and clean water. Our medical team also provided care for her youngest son, who was suffering from respiratory problems.
                </p>
                <p className="text-gray-700 mb-6">
                  "The aid came when we had lost all hope," says Um Ahmad. "It wasn't just the supplies that mattered, but knowing that someone cared about our suffering. The volunteers treated us with respect and compassion during the darkest time of our lives."
                </p>
                <Link to="/stories/um-ahmad" className="text-amber-600 font-medium hover:text-amber-700 flex items-center w-fit">
                  Read Um Ahmad's full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg" 
                  alt="Humanitarian aid distribution" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="islamic-pattern-dark absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Respond to Emergencies</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide immediate relief to families facing life-threatening emergencies. When disaster strikes, your support ensures we can respond quickly and effectively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate?category=emergency" className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Support Emergency Response
            </Link>
            <Link to="/get-involved/fundraise" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Start an Emergency Fundraiser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyProjects;
