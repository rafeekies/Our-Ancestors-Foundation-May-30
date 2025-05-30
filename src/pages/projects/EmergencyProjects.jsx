import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EmergencyProjects = () => {
  const emergencyProjects = [
    {
      id: 1,
      title: "Gaza Emergency Relief",
      description: "Providing urgent humanitarian aid including food, water, shelter, and medical supplies to families affected by the ongoing crisis in Gaza.",
      image: "https://images.pexels.com/photos/2079228/pexels-photo-2079228.jpeg",
      location: "Palestine",
      progress: 85,
      goal: 100000,
      raised: 85000
    },
    {
      id: 2,
      title: "Sudan Flood Response",
      description: "Supporting communities affected by devastating floods with emergency shelter, clean water, and essential supplies.",
      image: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg",
      location: "Sudan",
      progress: 70,
      goal: 75000,
      raised: 52500
    },
    {
      id: 3,
      title: "Syria Earthquake Relief",
      description: "Providing emergency assistance to families affected by earthquakes, including temporary shelter, food packages, and medical aid.",
      image: "https://images.pexels.com/photos/53487/earthquake-collapse-destruction-building-53487.jpeg",
      location: "Syria",
      progress: 60,
      goal: 80000,
      raised: 48000
    },
    {
      id: 4,
      title: "Afghanistan Winter Emergency",
      description: "Distributing winter supplies including blankets, warm clothing, heating fuel, and food packages to vulnerable families facing harsh winter conditions.",
      image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
      location: "Afghanistan",
      progress: 75,
      goal: 60000,
      raised: 45000
    },
    {
      id: 5,
      title: "Somalia Drought Response",
      description: "Providing emergency water supplies, food assistance, and livestock support to communities affected by severe drought.",
      image: "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg",
      location: "Somalia",
      progress: 65,
      goal: 70000,
      raised: 45500
    },
    {
      id: 6,
      title: "Lebanon Crisis Response",
      description: "Supporting vulnerable families affected by the economic crisis with food packages, medical assistance, and educational support.",
      image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg",
      location: "Lebanon",
      progress: 50,
      goal: 65000,
      raised: 32500
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2079228/pexels-photo-2079228.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Emergency Projects</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Providing rapid humanitarian assistance to communities affected by conflicts, natural disasters, and other emergencies.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <p className="text-xl text-gray-700">Active Emergency Responses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">200,000+</div>
              <p className="text-xl text-gray-700">People Assisted</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
              <p className="text-xl text-gray-700">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 arabic-title">Current Emergency Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing emergency response initiatives and see how your support can help provide immediate relief to those in desperate need.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {emergencyProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={fadeIn}
              >
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                      Emergency
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-orange-600 h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Raised: ${project.raised.toLocaleString()}</span>
                    <span>Goal: ${project.goal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      to="/donate/emergency" 
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 arabic-title">Our Emergency Response Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure rapid and effective emergency response when disasters strike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Assessment</h3>
              <p className="text-gray-600">
                Rapid assessment of the situation to understand the scale of the emergency and identify immediate needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Planning</h3>
              <p className="text-gray-600">
                Developing a strategic response plan based on the assessment findings and available resources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Response</h3>
              <p className="text-gray-600">
                Implementing the emergency response plan, providing immediate relief and assistance to affected communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Recovery</h3>
              <p className="text-gray-600">
                Supporting long-term recovery efforts to help communities rebuild and become more resilient to future emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">The Impact of Emergency Response</h2>
              <p className="text-lg text-gray-600 mb-6">
                Timely emergency response can make the difference between life and death for communities affected by disasters:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Immediate Relief:</strong> Providing essential supplies like food, water, and shelter to meet basic needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Medical Assistance:</strong> Treating injuries and preventing disease outbreaks in emergency situations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Protection:</strong> Ensuring the safety and security of vulnerable populations, especially women and children</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Hope and Dignity:</strong> Restoring hope and dignity to affected communities during their most difficult times</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg" 
                alt="Emergency response impact" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium text-gray-700 mb-8">
              "When the earthquake destroyed our home, we lost everything. The emergency team arrived within days with tents, blankets, and food. They gave us hope when we had none. My children still talk about the kind volunteers who helped us through our darkest days."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg" 
                alt="Testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold text-gray-800">Ahmed Khalil</p>
                <p className="text-gray-600">Father, Syria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Help Those in Crisis</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your emergency donation can provide immediate relief to families affected by disasters and conflicts. Every minute counts in an emergency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate/emergency" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Donate Now
            </Link>
            <Link to="/get-involved/volunteer" className="bg-transparent hover:bg-primary-700 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyProjects;
