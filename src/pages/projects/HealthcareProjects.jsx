import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeartbeat, FaHospital, FaUserMd, FaMapMarkerAlt } from 'react-icons/fa';

const HealthcareProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const healthcareProjects = [
    {
      id: 'gaza-medical-aid',
      title: 'Gaza Emergency Medical Aid',
      description: 'Providing essential medical supplies, equipment, and support to hospitals and clinics in Gaza to address the ongoing healthcare crisis.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      location: 'Palestine',
      beneficiaries: 25000,
      progress: 70
    },
    {
      id: 'syria-mobile-clinics',
      title: 'Syria Mobile Health Clinics',
      description: 'Operating mobile health clinics in conflict-affected areas of Syria to provide primary healthcare services to displaced populations.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg',
      location: 'Syria',
      beneficiaries: 18000,
      progress: 65
    },
    {
      id: 'yemen-malnutrition',
      title: 'Yemen Child Malnutrition Program',
      description: 'Implementing therapeutic feeding programs and nutrition interventions for malnourished children in Yemen's conflict zones.',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
      location: 'Yemen',
      beneficiaries: 12000,
      progress: 55
    },
    {
      id: 'afghanistan-maternal',
      title: 'Afghanistan Maternal Health',
      description: 'Improving maternal and newborn health outcomes in rural Afghanistan through midwife training, clinic support, and community education.',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg',
      location: 'Afghanistan',
      beneficiaries: 8500,
      progress: 60
    },
    {
      id: 'somalia-vaccination',
      title: 'Somalia Vaccination Campaign',
      description: 'Conducting vaccination campaigns in Somalia to protect children from preventable diseases in areas with limited healthcare access.',
      image: 'https://images.pexels.com/photos/5863365/pexels-photo-5863365.jpeg',
      location: 'Somalia',
      beneficiaries: 15000,
      progress: 75
    },
    {
      id: 'pakistan-eye-care',
      title: 'Pakistan Vision Care Initiative',
      description: 'Providing eye examinations, treatments, and surgeries to prevent blindness and restore sight in underserved communities across Pakistan.',
      image: 'https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg',
      location: 'Pakistan',
      beneficiaries: 7500,
      progress: 80
    },
    {
      id: 'bangladesh-water-sanitation',
      title: 'Bangladesh WASH for Health',
      description: 'Implementing water, sanitation, and hygiene (WASH) programs in Bangladesh to prevent waterborne diseases and improve community health.',
      image: 'https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg',
      location: 'Bangladesh',
      beneficiaries: 20000,
      progress: 65
    },
    {
      id: 'sudan-primary-healthcare',
      title: 'Sudan Primary Healthcare Centers',
      description: 'Establishing and supporting primary healthcare centers in rural Sudan to provide essential medical services to underserved communities.',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg',
      location: 'Sudan',
      beneficiaries: 13500,
      progress: 50
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-red-600 text-white">
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
              Healthcare Projects
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Providing essential medical care and health services to vulnerable communities in Palestine, Syria, Yemen, Afghanistan, Somalia, Pakistan, Bangladesh, and Sudan.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/donate?category=healthcare" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
                Support Healthcare Projects
              </Link>
              <a href="#projects" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Crisis Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">The Healthcare Crisis</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Access to quality healthcare is a basic human right, yet millions of people in Muslim-majority countries face severe healthcare challenges due to conflict, poverty, and inadequate infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeartbeat className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">400+ Million</h3>
                <p className="text-gray-700">
                  People worldwide lack access to essential health services, with a disproportionate number in conflict-affected Muslim countries.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHospital className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">50%</h3>
                <p className="text-gray-700">
                  Of healthcare facilities in conflict zones like Yemen, Syria, and Gaza are either non-functional or only partially functioning.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserMd className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">1 in 5</h3>
                <p className="text-gray-700">
                  Children in conflict-affected Muslim countries do not have access to basic immunizations, leading to preventable disease outbreaks.
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                The healthcare crisis in many Muslim-majority countries is multifaceted and severe. Conflict has destroyed critical health infrastructure, forced healthcare workers to flee, and disrupted supply chains for essential medicines and equipment. Climate change, poverty, and population displacement further strain already fragile health systems.
              </p>
              
              <p className="text-lg mb-4">
                Our Ancestors Foundation implements comprehensive healthcare solutions that address both emergency medical needs and long-term health system strengthening. From mobile clinics in Syria to maternal health programs in Afghanistan, our projects provide life-saving care while building sustainable health capacity.
              </p>
              
              <p className="text-lg mb-8">
                In Islamic tradition, saving a life is considered as saving all of humanity. The Prophet Muhammad (peace be upon him) emphasized the importance of seeking treatment and caring for the sick. By supporting our healthcare projects, you're fulfilling this sacred duty while providing essential care to those who need it most.
              </p>
              
              <blockquote className="bg-red-50 p-6 rounded-lg italic text-gray-700 border-l-4 border-red-500">
                "Whoever saves a life, it is as if he had saved all of humanity." (Quran 5:32)
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
                We implement comprehensive healthcare solutions that address immediate medical needs while building sustainable health systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency Medical Response</h3>
                <p className="text-gray-700 mb-4">
                  In crisis situations, we provide rapid medical assistance through mobile clinics, emergency medical supplies, and support to existing healthcare facilities. Our emergency response teams can deploy quickly to conflict zones and disaster areas.
                </p>
                <p className="text-gray-700">
                  We maintain strategic stockpiles of essential medicines, equipment, and supplies to respond rapidly to emerging health crises in vulnerable communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Primary Healthcare Services</h3>
                <p className="text-gray-700 mb-4">
                  We establish and support primary healthcare centers that provide essential services including maternal and child health, immunizations, treatment of common illnesses, and management of chronic diseases like diabetes and hypertension.
                </p>
                <p className="text-gray-700">
                  Our primary healthcare approach emphasizes prevention, early detection, and community health education to reduce the burden of preventable diseases.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Health System Strengthening</h3>
                <p className="text-gray-700 mb-4">
                  We invest in long-term health system capacity by training healthcare workers, improving medical infrastructure, establishing supply chains for medicines and equipment, and supporting health information systems.
                </p>
                <p className="text-gray-700">
                  Our approach emphasizes local ownership and sustainability, working closely with ministries of health and local healthcare providers to build systems that will continue to function after our direct support ends.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Specialized Medical Programs</h3>
                <p className="text-gray-700 mb-4">
                  We implement specialized programs addressing critical health needs such as maternal and child health, nutrition, mental health and psychosocial support, disability services, and treatment of non-communicable diseases.
                </p>
                <p className="text-gray-700">
                  These programs are tailored to local contexts and needs, with particular attention to the most vulnerable populations including children, pregnant women, the elderly, and people with disabilities.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Current Healthcare Projects</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing healthcare initiatives across Palestine, Syria, Yemen, Afghanistan, Somalia, Pakistan, Bangladesh, and Sudan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Healthcare Project
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-red-600 mr-2" />
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
                        className="bg-red-600 h-2.5 rounded-full" 
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
                      className="text-red-600 font-medium hover:text-red-700 flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      to={`/donate?project=${project.id}`} 
                      className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">Saving Lives Through Healthcare</h2>
                <div className="w-20 h-1 bg-red-600 mb-6"></div>
                <p className="text-gray-700 mb-4">
                  When 8-year-old Fatima arrived at our mobile clinic in northern Syria, she was severely malnourished and suffering from an acute respiratory infection. Her family had been displaced multiple times by conflict, and they had limited access to food and healthcare for months.
                </p>
                <p className="text-gray-700 mb-4">
                  "We had nowhere to turn," her father explains. "The nearest hospital was destroyed in an airstrike, and we couldn't afford transportation to the next city. When we heard about the mobile clinic coming to our area, it was like Allah had answered our prayers."
                </p>
                <p className="text-gray-700 mb-4">
                  Our medical team provided Fatima with immediate treatment for her infection and enrolled her in our therapeutic feeding program. They also connected her family with our food security project to ensure ongoing nutrition support.
                </p>
                <p className="text-gray-700 mb-6">
                  Today, Fatima has fully recovered and is back in school. "The doctors didn't just treat her illness," her father says. "They treated her with dignity and gave our family hope. Now Fatima says she wants to be a doctor when she grows up, to help other children like herself."
                </p>
                <Link to="/stories/fatima" className="text-red-600 font-medium hover:text-red-700 flex items-center w-fit">
                  Read Fatima's full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg" 
                  alt="Doctor examining a child patient" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="islamic-pattern-dark absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Save Lives</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can provide life-saving medical care to those who need it most. From emergency response to long-term healthcare solutions, your support makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate?category=healthcare" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Support Healthcare Projects
            </Link>
            <Link to="/get-involved/volunteer" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Volunteer as a Medical Professional
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareProjects;
