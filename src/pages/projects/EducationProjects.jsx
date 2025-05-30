import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EducationProjects = () => {
  const educationProjects = [
    {
      id: 1,
      title: "School Building Program",
      description: "Constructing schools in underserved areas to provide access to quality education for children who lack educational facilities.",
      image: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg",
      location: "Bangladesh",
      progress: 75,
      goal: 60000,
      raised: 45000
    },
    {
      id: 2,
      title: "Teacher Training Initiative",
      description: "Training local teachers with modern educational methods and providing resources to improve the quality of education.",
      image: "https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg",
      location: "Pakistan",
      progress: 60,
      goal: 40000,
      raised: 24000
    },
    {
      id: 3,
      title: "Scholarship Program",
      description: "Providing scholarships to talented students from disadvantaged backgrounds to pursue higher education.",
      image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
      location: "Somalia",
      progress: 40,
      goal: 35000,
      raised: 14000
    },
    {
      id: 4,
      title: "Educational Resources Distribution",
      description: "Distributing textbooks, stationery, and other educational materials to schools in need.",
      image: "https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg",
      location: "Afghanistan",
      progress: 85,
      goal: 25000,
      raised: 21250
    },
    {
      id: 5,
      title: "Digital Learning Centers",
      description: "Establishing computer labs and digital learning centers to bridge the digital divide and provide technology education.",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
      location: "Sudan",
      progress: 65,
      goal: 50000,
      raised: 32500
    },
    {
      id: 6,
      title: "Girls' Education Program",
      description: "Focused initiatives to promote girls' education and overcome cultural barriers to female education.",
      image: "https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg",
      location: "Syria",
      progress: 70,
      goal: 45000,
      raised: 31500
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Education Projects</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Supporting education initiatives to empower communities through knowledge, skills development, and access to quality learning opportunities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-xl text-gray-700">Schools Built or Renovated</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">15,000+</div>
              <p className="text-xl text-gray-700">Students Supported</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-xl text-gray-700">Teachers Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 arabic-title">Current Education Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing education initiatives and see how your support can help transform lives through learning.
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
            {educationProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={fadeIn}
              >
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      Education
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
                        className="bg-green-600 h-2.5 rounded-full" 
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
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">The Impact of Education</h2>
              <p className="text-lg text-gray-600 mb-6">
                Education is a powerful tool for transformation that impacts individuals and communities in numerous ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Empowerment:</strong> Education gives people the knowledge and skills to improve their lives and make informed decisions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Economic Growth:</strong> Education leads to better job opportunities and increased income potential</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Health Improvements:</strong> Educated individuals make better health choices and have improved access to healthcare</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Community Development:</strong> Education builds stronger, more resilient communities with reduced poverty and inequality</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg" 
                alt="Education impact" 
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
              "The new school in our village has changed everything. Now my daughter can learn in a safe environment with qualified teachers. She dreams of becoming an engineer, and for the first time, I believe this is possible."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg" 
                alt="Testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold text-gray-800">Mohammed Rahman</p>
                <p className="text-gray-600">Parent, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Support Education</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your contribution can help provide quality education to children and communities in need, creating opportunities for a brighter future.
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

export default EducationProjects;
