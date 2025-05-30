import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaMapMarkerAlt } from 'react-icons/fa';

const EducationProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationProjects = [
    {
      id: 'palestine-schools',
      title: 'Palestine School Reconstruction',
      description: 'Rebuilding and equipping schools in Gaza and the West Bank to ensure Palestinian children can continue their education despite ongoing challenges.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      location: 'Palestine',
      beneficiaries: 12000,
      progress: 65
    },
    {
      id: 'syria-refugee-education',
      title: 'Syrian Refugee Education Program',
      description: 'Providing educational support, school supplies, and safe learning spaces for Syrian refugee children in camps and host communities.',
      image: 'https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg',
      location: 'Syria/Lebanon',
      beneficiaries: 8500,
      progress: 70
    },
    {
      id: 'afghanistan-girls-education',
      title: 'Afghanistan Girls' Education Initiative',
      description: 'Supporting girls' education in Afghanistan through community-based schools, teacher training, and advocacy for girls' right to education.',
      image: 'https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg',
      location: 'Afghanistan',
      beneficiaries: 5000,
      progress: 40
    },
    {
      id: 'somalia-teacher-training',
      title: 'Somalia Teacher Training Program',
      description: 'Training qualified teachers in Somalia to improve educational quality and build local capacity for sustainable education systems.',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg',
      location: 'Somalia',
      beneficiaries: 3200,
      progress: 55
    },
    {
      id: 'pakistan-digital-learning',
      title: 'Pakistan Digital Learning Centers',
      description: 'Establishing digital learning centers in rural Pakistan to bridge the technology gap and provide modern educational resources.',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
      location: 'Pakistan',
      beneficiaries: 7500,
      progress: 60
    },
    {
      id: 'bangladesh-vocational-training',
      title: 'Bangladesh Vocational Training',
      description: 'Providing vocational training and skills development for youth in Bangladesh to improve employment opportunities and economic independence.',
      image: 'https://images.pexels.com/photos/3846033/pexels-photo-3846033.jpeg',
      location: 'Bangladesh',
      beneficiaries: 4200,
      progress: 75
    },
    {
      id: 'sudan-school-meals',
      title: 'Sudan School Meals Program',
      description: 'Implementing school feeding programs in Sudan to improve nutrition, increase attendance, and enhance learning outcomes for vulnerable children.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      location: 'Sudan',
      beneficiaries: 9800,
      progress: 80
    },
    {
      id: 'yemen-education-emergency',
      title: 'Yemen Education Emergency Response',
      description: 'Providing emergency education support in conflict-affected areas of Yemen, including temporary learning spaces and psychosocial support.',
      image: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg',
      location: 'Yemen',
      beneficiaries: 6500,
      progress: 35
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-emerald-600 text-white">
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
              Education Projects
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering the next generation through quality education in Palestine, Syria, Afghanistan, Somalia, Pakistan, Bangladesh, Sudan, and Yemen.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/donate?category=education" className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
                Support Education Projects
              </Link>
              <a href="#projects" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Crisis Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">The Education Crisis</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Education is a fundamental right, yet millions of children in Muslim-majority countries face significant barriers to quality learning due to conflict, poverty, and discrimination.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">127 Million</h3>
                <p className="text-gray-700">
                  School-age children and youth in crisis-affected countries are out of school, with Muslim-majority countries disproportionately affected.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBook className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">2.7x Higher</h3>
                <p className="text-gray-700">
                  Girls in conflict-affected areas are 2.7 times more likely to be out of school than girls in non-affected areas.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChalkboardTeacher className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">69 Million</h3>
                <p className="text-gray-700">
                  New teachers needed globally by 2030 to achieve universal primary and secondary education, with critical shortages in Muslim-majority countries.
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Education is not just a fundamental right—it's a powerful tool for breaking cycles of poverty, reducing inequality, and building more peaceful societies. In many Muslim-majority countries, education systems face immense challenges from conflict, displacement, poverty, and gender discrimination.
              </p>
              
              <p className="text-lg mb-4">
                Our Ancestors Foundation works to ensure that every child, regardless of their circumstances, has access to quality education. From rebuilding schools in Palestine to supporting girls' education in Afghanistan, our projects address both immediate educational needs and long-term systemic challenges.
              </p>
              
              <p className="text-lg mb-8">
                The Islamic tradition places enormous value on education and knowledge. The first word revealed in the Quran was "Iqra" (Read), and seeking knowledge is considered an obligation for every Muslim. By supporting our education projects, you're honoring this sacred tradition while investing in the future of the Ummah.
              </p>
              
              <blockquote className="bg-emerald-50 p-6 rounded-lg italic text-gray-700 border-l-4 border-emerald-500">
                "Seeking knowledge is an obligation upon every Muslim." (Hadith)
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
                We implement holistic education solutions that address immediate learning needs while building sustainable education systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Safe Learning Environments</h3>
                <p className="text-gray-700 mb-4">
                  We create and rehabilitate safe, inclusive learning spaces that protect children from physical harm, psychological stress, and discrimination. In conflict zones, this includes building schools with enhanced security features and providing psychosocial support.
                </p>
                <p className="text-gray-700">
                  Our school designs incorporate cultural sensitivity and accessibility features to ensure all children feel welcome and can participate fully.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Teaching</h3>
                <p className="text-gray-700 mb-4">
                  We invest in teacher training and professional development, focusing on both pedagogical skills and subject knowledge. Our programs prepare teachers to support children affected by trauma and to create engaging, student-centered learning environments.
                </p>
                <p className="text-gray-700">
                  We also work to ensure teachers receive fair compensation and professional recognition, addressing the critical teacher shortage in many regions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Inclusive Education</h3>
                <p className="text-gray-700 mb-4">
                  We prioritize access to education for the most marginalized children, including girls, children with disabilities, refugees, and those living in extreme poverty. Our programs address barriers to education through targeted interventions like girls' scholarships, accessible facilities, and mother-tongue instruction.
                </p>
                <p className="text-gray-700">
                  We advocate for policies that promote educational equity and work with communities to challenge harmful norms that limit educational opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community Ownership</h3>
                <p className="text-gray-700 mb-4">
                  We engage parents, community leaders, and local education authorities as essential partners in education. Through parent-teacher associations, community education committees, and local advocacy groups, we build sustainable support systems for schools.
                </p>
                <p className="text-gray-700">
                  This approach ensures that education initiatives reflect community priorities and cultural values while building local capacity to maintain and improve education systems.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Current Education Projects</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing education initiatives across Palestine, Syria, Afghanistan, Somalia, Pakistan, Bangladesh, Sudan, and Yemen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Education Project
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-emerald-600 mr-2" />
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
                        className="bg-emerald-600 h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {project.beneficiaries.toLocaleString()} students will benefit
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      to={`/donate?project=${project.id}`} 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6 arabic-title">Education Changes Lives</h2>
                <div className="w-20 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Amina was 12 years old when her family fled Syria. In Lebanon, she faced numerous barriers to education – language differences, discrimination, and her family's economic struggles. For two years, she remained out of school, losing hope for her future.
                </p>
                <p className="text-gray-700 mb-4">
                  "I thought my dreams were finished," Amina recalls. "I wanted to be a doctor, but without school, how could I?"
                </p>
                <p className="text-gray-700 mb-4">
                  Through our Syrian Refugee Education Program, Amina enrolled in a catch-up learning program that helped her bridge the gap in her education. She received intensive language support, school supplies, and a scholarship to cover transportation costs.
                </p>
                <p className="text-gray-700 mb-6">
                  Today, at 17, Amina is thriving in school and preparing for university. "Education gave me back my future," she says. "Now I study not just for myself, but because one day I want to help rebuild my country."
                </p>
                <Link to="/stories/amina" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center w-fit">
                  Read Amina's full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg" 
                  alt="Young refugee student studying" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="islamic-pattern-dark absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Help Us Educate the Next Generation</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can transform lives through education. Every child deserves the chance to learn, grow, and build a better future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate?category=education" className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Support Education Projects
            </Link>
            <Link to="/get-involved/volunteer" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Volunteer as a Mentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationProjects;
