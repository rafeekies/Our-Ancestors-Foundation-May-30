import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineEvents = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Our Ancestors Foundation was established by a group of Muslim professionals committed to preserving cultural heritage while addressing humanitarian needs.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'
    },
    {
      year: '2013',
      title: 'First International Projects',
      description: 'Expanded operations to include projects in Somalia and Bangladesh, focusing on clean water initiatives and educational support.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg'
    },
    {
      year: '2015',
      title: 'Emergency Response Program',
      description: 'Launched our emergency response program to provide rapid humanitarian aid during crises in Syria and Palestine.',
      image: 'https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg'
    },
    {
      year: '2018',
      title: 'Cultural Preservation Initiative',
      description: 'Established our cultural preservation initiative to document and protect traditional knowledge, practices, and heritage sites in Pakistan and India.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg'
    },
    {
      year: '2020',
      title: 'Expansion Across Africa',
      description: 'Expanded our reach to include more countries across Africa, with sustainable development projects in Sudan, Nigeria, Kenya, and Egypt.',
      image: 'https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg'
    },
    {
      year: '2023',
      title: 'Today',
      description: 'Currently operating in over 15 countries with a focus on emergency relief, sustainable development, and cultural preservation across the Muslim world.',
      image: 'https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg'
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
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The journey of Our Ancestors Foundation from its humble beginnings to becoming a global organization preserving heritage and building futures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Mission & Vision</h2>
              <div className="islamic-divider mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  Our Ancestors Foundation is committed to preserving cultural heritage while addressing critical needs in underserved communities through sustainable development projects that align with Islamic values.
                </p>
                <p className="text-gray-700">
                  We work to honor our past while creating sustainable solutions for tomorrow, ensuring that traditional knowledge and practices are preserved for future generations while meeting immediate humanitarian needs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  We envision a world where Muslim communities across the globe are empowered to preserve their cultural heritage while thriving with dignity, self-sufficiency, and hope for the future.
                </p>
                <p className="text-gray-700">
                  We strive for a future where traditional knowledge is valued and integrated with sustainable development, creating resilient communities that honor their past while building better futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg" 
                  alt="Founder" 
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 arabic-title">Founder's Message</h2>
                <div className="w-20 h-1 bg-primary-600 mb-6"></div>
                <p className="text-gray-700 mb-4 italic">
                  "Our Ancestors Foundation was born from a deep commitment to honor the rich heritage of Muslim communities while addressing the pressing challenges they face today. We believe that preserving our past is essential to building a sustainable future."
                </p>
                <p className="text-gray-700 mb-4">
                  "Our work spans from emergency humanitarian relief to long-term development projects, always guided by Islamic principles of compassion, dignity, and service. We are committed to empowering communities to preserve their cultural identity while creating pathways to self-sufficiency and prosperity."
                </p>
                <p className="text-gray-700 mb-4">
                  "As we continue to grow, we remain dedicated to our founding vision: honoring our ancestors by building a better world for future generations."
                </p>
                <p className="font-bold text-gray-800">Dr. Ahmed Al-Farsi, Founder & Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Journey</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to our current global impact, explore the key milestones in our organization's history.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0 md:text-left' : 'md:mr-auto md:pr-16 md:pl-0 md:text-right'} md:w-1/2 px-4`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-white z-10"></div>
                
                {/* Content */}
                <div className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Core Values</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide our work and define our approach to humanitarian aid and cultural preservation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards in all our operations, ensuring transparency, accountability, and responsible stewardship of resources.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Respect</h3>
              <p className="text-gray-600">
                We honor the diverse traditions, knowledge, and practices of the communities we serve, ensuring our work preserves and celebrates cultural heritage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community-Led</h3>
              <p className="text-gray-600">
                We believe in empowering communities to lead their own development, working in partnership rather than imposing external solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Join Our Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Be part of our mission to preserve cultural heritage and create sustainable futures for communities across the Muslim world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Support Our Work
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

export default OurStory;
