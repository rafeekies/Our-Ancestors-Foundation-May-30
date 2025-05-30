import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HealthcareProjects = () => {
  const healthcareProjects = [
    {
      id: 1,
      title: "Mobile Medical Clinics",
      description: "Providing essential healthcare services to remote communities through mobile clinics equipped with medical professionals and supplies.",
      image: "https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg",
      location: "Afghanistan",
      progress: 75,
      goal: 70000,
      raised: 52500
    },
    {
      id: 2,
      title: "Maternal and Child Health",
      description: "Supporting pregnant women and children with prenatal care, safe deliveries, vaccinations, and nutritional support.",
      image: "https://images.pexels.com/photos/6823517/pexels-photo-6823517.jpeg",
      location: "Somalia",
      progress: 60,
      goal: 50000,
      raised: 30000
    },
    {
      id: 3,
      title: "Medical Supply Distribution",
      description: "Providing essential medical supplies, equipment, and medications to hospitals and clinics in underserved areas.",
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg",
      location: "Syria",
      progress: 40,
      goal: 45000,
      raised: 18000
    },
    {
      id: 4,
      title: "Healthcare Worker Training",
      description: "Training local healthcare workers to provide sustainable medical care in their communities.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
      location: "Bangladesh",
      progress: 85,
      goal: 35000,
      raised: 29750
    },
    {
      id: 5,
      title: "Disease Prevention Programs",
      description: "Implementing preventive healthcare measures including vaccinations, health education, and sanitation improvements.",
      image: "https://images.pexels.com/photos/3952240/pexels-photo-3952240.jpeg",
      location: "Sudan",
      progress: 65,
      goal: 40000,
      raised: 26000
    },
    {
      id: 6,
      title: "Emergency Medical Response",
      description: "Providing rapid medical assistance in crisis situations, including natural disasters and conflict zones.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      location: "Palestine",
      progress: 70,
      goal: 60000,
      raised: 42000
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Healthcare Projects</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Improving access to quality healthcare services for vulnerable communities through medical clinics, supplies, and healthcare worker training.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <p className="text-xl text-gray-700">Medical Clinics Established</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <p className="text-xl text-gray-700">Patients Treated</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">300+</div>
              <p className="text-xl text-gray-700">Healthcare Workers Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 arabic-title">Current Healthcare Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing healthcare initiatives and see how your support can help save lives and improve health outcomes in vulnerable communities.
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
            {healthcareProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={fadeIn}
              >
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                      Healthcare
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
                        className="bg-red-600 h-2.5 rounded-full" 
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
                      to="/donate" 
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">The Impact of Healthcare</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access to quality healthcare transforms communities in multiple ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Saving Lives:</strong> Immediate medical care prevents deaths from treatable conditions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Maternal and Child Health:</strong> Proper care reduces maternal and infant mortality rates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Disease Prevention:</strong> Preventive measures reduce the spread of infectious diseases</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Community Resilience:</strong> Healthier communities are more productive and better able to withstand crises</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg" 
                alt="Healthcare impact" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium text-gray-700 mb-8">
              "The mobile clinic saved my son's life when he had severe pneumonia. Before, we would have had to travel for days to reach a hospital. Now, healthcare comes to our village regularly, and we all feel safer."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg" 
                alt="Testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold text-gray-800">Fatima Ahmadi</p>
                <p className="text-gray-600">Mother, Afghanistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Support Healthcare</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your contribution can help provide life-saving medical care to vulnerable communities, improving health outcomes and saving lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300">
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

export default HealthcareProjects;
