import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHandHoldingHeart, FaGraduationCap, FaHospital, FaHandsHelping, FaWater, FaBookOpen } from 'react-icons/fa';

const Home = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const projects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing clean water solutions to communities in Somalia, Sudan, and Nigeria.",
      image: "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg",
      category: "Water",
      icon: <FaWater className="text-primary-600" />
    },
    {
      id: 2,
      title: "Education Support Program",
      description: "Building schools and supporting Islamic education in Bangladesh, Pakistan, and Kenya.",
      image: "https://images.pexels.com/photos/6936325/pexels-photo-6936325.jpeg",
      category: "Education",
      icon: <FaGraduationCap className="text-primary-600" />
    },
    {
      id: 3,
      title: "Healthcare Access",
      description: "Improving healthcare access for vulnerable communities in Afghanistan, Syria, and Lebanon.",
      image: "https://images.pexels.com/photos/6823517/pexels-photo-6823517.jpeg",
      category: "Healthcare",
      icon: <FaHospital className="text-primary-600" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Fatima Ahmed",
      role: "Regular Donor",
      quote: "Our Ancestors Foundation has made it so easy to contribute to causes I care about in Palestine and Somalia. I can see the direct impact of my donations through their transparent reporting.",
      image: "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg"
    },
    {
      id: 2,
      name: "Mohammed Al-Farsi",
      role: "Community Partner",
      quote: "Working with Our Ancestors Foundation has been transformative for our community in Sudan. Their sustainable approach ensures long-lasting positive change.",
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg"
    },
    {
      id: 3,
      name: "Aisha Malik",
      role: "Volunteer",
      quote: "Volunteering with Our Ancestors Foundation in Bangladesh has been the most rewarding experience. Their commitment to cultural preservation while addressing immediate needs is inspiring.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 arabic-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Preserving Heritage, Building Futures
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Ancestors Foundation is dedicated to honoring our past while creating sustainable solutions for tomorrow in Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and across Africa.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/donate" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Donate Now
            </Link>
            <Link to="/projects" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Our Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Islamic Quote Section */}
      <section className="py-10 bg-primary-50 islamic-pattern-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl italic text-primary-700">
              "Whoever helps ease a difficulty in the world, Allah will ease his difficulty in this world and the Hereafter."
            </p>
            <p className="mt-4 text-primary-600 font-medium">- Prophet Muhammad (peace be upon him)</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Our Mission</h2>
            <div className="islamic-divider"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Ancestors Foundation is committed to preserving cultural heritage while addressing critical needs in underserved communities through sustainable development projects that align with Islamic values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-primary-600">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Preservation</h3>
              <p className="text-gray-600">
                Honoring and preserving ancestral knowledge, traditions, and Islamic practices for future generations in countries like Pakistan, India, and Egypt.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-primary-600">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandsHelping className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Development</h3>
              <p className="text-gray-600">
                Building sustainable infrastructure and programs that empower Muslim communities in Palestine, Syria, and Lebanon to thrive.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-primary-600">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandHoldingHeart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Charity & Compassion</h3>
              <p className="text-gray-600">
                Embodying the Islamic principles of sadaqah (charity) and rahma (compassion) in our work in Sudan, Somalia, and Afghanistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Featured Projects</h2>
            <div className="islamic-divider"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current initiatives making a difference in Muslim communities in Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-56 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Appeal Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="islamic-pattern-dark absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Emergency Appeal: Palestine & Sudan</h2>
            <p className="text-xl mb-8">
              Urgent support needed for families affected by ongoing crises in Palestine and Sudan. Your donation can provide emergency food, medical aid, and shelter to those in desperate need.
            </p>
            <Link to="/donate?campaign=emergency" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Donate to Emergency Appeal
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section ref={statsRef} className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-title">Our Impact</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Through the generosity of our donors and the dedication of our volunteers, we've made a significant impact in Muslim communities across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={50} duration={2.5} />}+
              </div>
              <p className="text-xl">Projects Completed</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={25000} duration={2.5} separator="," />}+
              </div>
              <p className="text-xl">People Helped</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={15} duration={2.5} />}+
              </div>
              <p className="text-xl">Countries Reached</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$
                {statsInView && <CountUp end={2} decimals={1} duration={2.5} />}M+
              </div>
              <p className="text-xl">Funds Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">What People Say</h2>
            <div className="islamic-divider"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our donors, partners, and the communities we serve across the Muslim world.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Join Us in Making a Difference</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your support helps us preserve cultural heritage and create sustainable solutions for communities in Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and across Africa. Remember, charity is a form of worship in Islam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Donate Now
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
