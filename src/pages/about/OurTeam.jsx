import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const OurTeam = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const leadershipTeam = [
    {
      name: 'Dr. Ahmed Al-Farsi',
      title: 'Founder & Chairman',
      bio: 'Dr. Ahmed Al-Farsi founded Our Ancestors Foundation in 2010 after a distinguished career in international development. With a PhD in Anthropology and extensive experience working with communities across the Muslim world, he brings a deep commitment to preserving cultural heritage while addressing humanitarian needs.',
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg'
    },
    {
      name: 'Amina Hassan',
      title: 'Executive Director',
      bio: 'Amina brings over 15 years of experience in humanitarian leadership, having previously worked with major international NGOs in Somalia, Sudan, and Bangladesh. She oversees all operations and strategic initiatives, ensuring our programs create meaningful impact while honoring cultural traditions.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
    },
    {
      name: 'Ibrahim Malik',
      title: 'Director of Programs',
      bio: 'Ibrahim leads our program development and implementation across all regions. With a background in sustainable development and emergency response, he ensures our projects are culturally appropriate, effective, and built on strong community partnerships.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    {
      name: 'Dr. Layla Mahmoud',
      title: 'Director of Research & Cultural Preservation',
      bio: 'Dr. Mahmoud heads our cultural preservation initiatives, documenting and safeguarding traditional knowledge and practices. With a doctorate in Cultural Heritage Studies, she develops innovative approaches to integrating cultural preservation with humanitarian work.',
      image: 'https://images.pexels.com/photos/3796024/pexels-photo-3796024.jpeg'
    }
  ];

  const regionalDirectors = [
    {
      name: 'Omar Khalid',
      title: 'Regional Director, Middle East',
      bio: 'Omar oversees our operations in Palestine, Syria, and Lebanon, bringing extensive experience in emergency response and conflict-sensitive programming. He has been instrumental in developing our approach to cultural preservation in conflict settings.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      name: 'Fatima Nur',
      title: 'Regional Director, East Africa',
      bio: 'Fatima leads our programs in Somalia, Sudan, and other East African countries. With deep roots in the region and expertise in community-led development, she ensures our projects address both immediate needs and long-term resilience.',
      image: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg'
    },
    {
      name: 'Yusuf Rahman',
      title: 'Regional Director, South Asia',
      bio: 'Yusuf coordinates our work in Bangladesh, Pakistan, India, and Afghanistan. His background in water resource management and sustainable agriculture has shaped our integrated approach to development in the region.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Samira Khan',
      title: 'Board Member',
      bio: 'Dr. Khan is a renowned scholar of Islamic history and cultural heritage. She provides guidance on ensuring our work aligns with Islamic principles while respecting diverse cultural traditions.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    {
      name: 'Hassan Abdi',
      title: 'Board Member',
      bio: 'Hassan brings extensive experience in finance and governance from his career in international banking. He chairs our Finance Committee, ensuring transparency and accountability in all our operations.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
    },
    {
      name: 'Aisha Rahman',
      title: 'Board Member',
      bio: 'Aisha is a community leader and philanthropist with deep connections across Muslim communities in North America and Europe. She leads our community engagement and fundraising initiatives.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Dr. Mohammed Al-Jabri',
      title: 'Board Member',
      bio: 'Dr. Al-Jabri is a medical doctor specializing in public health, bringing crucial expertise to our healthcare initiatives. He has led medical missions in emergency settings across multiple countries.',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 arabic-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Team
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Meet the dedicated professionals and community leaders who guide our mission to preserve heritage and build futures across the Muslim world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Leadership Team</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our leadership team brings diverse expertise in humanitarian work, cultural preservation, and community development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaLinkedin className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaTwitter className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaEnvelope className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Directors */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Regional Directors</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our regional directors lead our work across the Middle East, Africa, and South Asia, bringing deep local knowledge and expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regionalDirectors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{director.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{director.title}</p>
                    <p className="text-gray-600 mb-4 text-sm">{director.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaLinkedin className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaTwitter className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaEnvelope className="text-lg" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Board of Directors</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our board provides strategic guidance and oversight, ensuring we fulfill our mission with integrity and impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaLinkedin className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaTwitter className="text-lg" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaEnvelope className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Values</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                These core principles guide our team in all aspects of our work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity & Transparency</h3>
                <p className="text-gray-700">
                  We maintain the highest ethical standards in all our operations, ensuring accountability to donors, partners, and the communities we serve. We are committed to transparent reporting and responsible stewardship of resources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Respect & Preservation</h3>
                <p className="text-gray-700">
                  We honor the diverse traditions, knowledge, and practices of the communities we serve. Our approach integrates cultural preservation with humanitarian work, ensuring our projects strengthen rather than diminish cultural identity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community-Led Development</h3>
                <p className="text-gray-700">
                  We believe in empowering communities to lead their own development. Our team works in partnership with local leaders and organizations, respecting their knowledge and agency rather than imposing external solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Islamic Principles</h3>
                <p className="text-gray-700">
                  Our work is guided by Islamic values of compassion, dignity, and service. We strive to embody these principles in all our interactions while serving people of all backgrounds and beliefs with equal respect and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Join Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking for passionate professionals and volunteers who share our commitment to preserving heritage and building futures across the Muslim world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/get-involved/careers" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              View Career Opportunities
            </Link>
            <Link to="/get-involved/volunteer" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
