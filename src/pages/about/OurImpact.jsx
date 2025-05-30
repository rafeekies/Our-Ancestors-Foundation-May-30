import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaWater, FaGraduationCap, FaHeartbeat, FaHome, FaHandHoldingHeart, FaBook } from 'react-icons/fa';

const OurImpact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const impactAreas = [
    {
      icon: <FaWater className="text-4xl text-blue-500" />,
      title: "Clean Water",
      description: "Provided access to clean water for over 500,000 people in rural communities across Africa and the Middle East.",
      count: "500,000+"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-green-500" />,
      title: "Education",
      description: "Built 120 schools and educational centers, providing quality education to more than 75,000 children annually.",
      count: "75,000+"
    },
    {
      icon: <FaHeartbeat className="text-4xl text-red-500" />,
      title: "Healthcare",
      description: "Established 45 medical clinics offering essential healthcare services to over 300,000 people in underserved regions.",
      count: "300,000+"
    },
    {
      icon: <FaHome className="text-4xl text-yellow-500" />,
      title: "Housing",
      description: "Constructed 2,500 homes for displaced families, providing safe shelter for more than 15,000 individuals.",
      count: "15,000+"
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-purple-500" />,
      title: "Emergency Relief",
      description: "Delivered critical aid to 1.2 million people affected by natural disasters and conflicts in the past five years.",
      count: "1.2M+"
    },
    {
      icon: <FaBook className="text-4xl text-orange-500" />,
      title: "Community Development",
      description: "Implemented 350 sustainable development projects empowering communities to build better futures.",
      count: "350+"
    }
  ];

  const testimonials = [
    {
      quote: "The water well your organization built in our village has transformed our daily lives. Our children no longer have to walk miles for water, and waterborne illnesses have decreased dramatically.",
      name: "Amina Hassan",
      location: "Somalia",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The medical clinic you established provides care that was previously inaccessible to us. My daughter received life-saving treatment that wouldn't have been possible without your support.",
      name: "Mohammed Al-Farsi",
      location: "Yemen",
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "After the earthquake destroyed our home, we had nowhere to go. The shelter program not only gave us a roof over our heads but restored our dignity and hope for the future.",
      name: "Fatima Khalil",
      location: "Syria",
      image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const stats = [
    { value: "25+", label: "Years of Service" },
    { value: "42", label: "Countries Reached" },
    { value: "2.5M+", label: "Lives Impacted" },
    { value: "95%", label: "Funds to Programs" }
  ];

  const partners = [
    { name: "United Nations", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/1200px-UN_emblem_blue.svg.png" },
    { name: "UNICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/UNICEF_logo.svg/1200px-UNICEF_logo.svg.png" },
    { name: "World Health Organization", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png" },
    { name: "Oxfam", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Oxfam_logo.svg/1200px-Oxfam_logo.svg.png" },
    { name: "Save the Children", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Save_the_Children_logo.svg/1200px-Save_the_Children_logo.svg.png" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            For over 25 years, we've been working tirelessly to create lasting change in communities around the world.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h2>
                <p className="text-lg text-white opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Areas of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work spans across multiple sectors to address the most pressing needs of vulnerable communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="text-3xl font-bold text-primary-600">{area.count}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Voices from the Communities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations to maximize our impact and reach.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="w-32 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Annual Reports & Transparency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to transparency and accountability in all our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[2022, 2021, 2020].map((year, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{year} Annual Report</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed overview of our programs, impact, and financial statements for the year {year}.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/about/financials" 
              className="text-primary-600 hover:text-primary-700 font-bold flex items-center justify-center"
            >
              View All Financial Reports
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Together, we can continue to create lasting change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/donate" 
              className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Donate Now
            </Link>
            <Link 
              to="/get-involved/volunteer" 
              className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;
