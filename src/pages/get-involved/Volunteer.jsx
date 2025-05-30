import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandsHelping, FaGlobe, FaLaptop, FaUsers, FaHeart, FaCheck } from 'react-icons/fa';

const Volunteer = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interests: [],
    skills: '',
    availability: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = React.useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value]
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real app, this would send the data to a server
  };

  const volunteerOpportunities = [
    {
      title: 'Field Volunteers',
      icon: <FaGlobe className="text-primary-600 text-3xl" />,
      description: 'Join our teams on the ground in countries like Sudan, Palestine, Somalia, and Bangladesh to directly support project implementation and community engagement.',
      requirements: ['Travel availability', 'Cultural sensitivity', 'Relevant skills (medical, construction, education, etc.)', 'Minimum 2-week commitment']
    },
    {
      title: 'Remote Support',
      icon: <FaLaptop className="text-primary-600 text-3xl" />,
      description: 'Contribute your professional skills remotely to support our operations, including translation, graphic design, content creation, research, and administrative assistance.',
      requirements: ['Reliable internet connection', 'Relevant professional skills', 'Minimum 5 hours per week commitment', 'Strong communication skills']
    },
    {
      title: 'Community Ambassadors',
      icon: <FaUsers className="text-primary-600 text-3xl" />,
      description: 'Represent Our Ancestors Foundation in your local community by organizing awareness events, fundraisers, and building partnerships with local organizations and mosques.',
      requirements: ['Strong community connections', 'Public speaking skills', 'Event organization experience', 'Passion for our cause']
    }
  ];

  const testimonials = [
    {
      name: 'Aisha Rahman',
      role: 'Field Volunteer, Bangladesh',
      quote: 'Volunteering with Our Ancestors Foundation in Bangladesh was a life-changing experience. I helped implement a water project that now serves over 500 families. The gratitude in people\'s eyes made every moment worthwhile.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Omar Khalid',
      role: 'Remote Translator',
      quote: 'As a remote volunteer, I translate documents between Arabic and English. It\'s incredibly fulfilling to know my skills are helping bridge communication gaps and support vital projects across multiple countries.',
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg'
    },
    {
      name: 'Fatima Nur',
      role: 'Community Ambassador, USA',
      quote: 'Being a community ambassador has allowed me to connect my local community with meaningful causes. I\'ve organized fundraisers that have supported emergency relief in Palestine and educational programs in Somalia.',
      image: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg'
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
              Volunteer With Us
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join our global community of volunteers dedicated to preserving heritage and building futures across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#volunteer-form" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Why Volunteer With Us?</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Volunteering with Our Ancestors Foundation offers a meaningful way to make a tangible difference in communities while gaining valuable experience and connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandsHelping className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Make a Real Impact</h3>
                <p className="text-gray-700">
                  Our volunteers directly contribute to projects that transform lives and communities across the Muslim world, from emergency relief to sustainable development.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Global Experience</h3>
                <p className="text-gray-700">
                  Gain invaluable cross-cultural experience and insights while working with diverse communities and fellow volunteers from around the world.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Spiritual Fulfillment</h3>
                <p className="text-gray-700">
                  Embody Islamic values of service, compassion, and community while earning the rewards of sadaqah (charity) through your time and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Volunteer Opportunities</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various ways to contribute based on your skills, interests, and availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{opportunity.title}</h3>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Volunteer Stories</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from those who have experienced the rewards of volunteering with Our Ancestors Foundation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="volunteer-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Volunteer Application</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Ready to make a difference? Fill out the form below to start your volunteer journey with us.
              </p>
            </div>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center">
                <FaCheck className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
                <p className="text-lg mb-6">
                  Thank you for your interest in volunteering with Our Ancestors Foundation. We've received your application and will contact you within 3-5 business days to discuss next steps.
                </p>
                <Link to="/" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
                  Return to Homepage
                </Link>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Location (City, Country) *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Areas of Interest *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="field-volunteer"
                          name="interests"
                          value="Field Volunteer"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="field-volunteer">Field Volunteer</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remote-support"
                          name="interests"
                          value="Remote Support"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="remote-support">Remote Support</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="community-ambassador"
                          name="interests"
                          value="Community Ambassador"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="community-ambassador">Community Ambassador</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="education"
                          name="interests"
                          value="Education"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="education">Education Projects</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="water"
                          name="interests"
                          value="Water"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="water">Water Projects</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="emergency"
                          name="interests"
                          value="Emergency"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="emergency">Emergency Relief</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Skills & Experience *</label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Please describe your relevant skills, experience, and qualifications."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Availability *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select your availability</option>
                      <option value="1-5 hours/week">1-5 hours per week</option>
                      <option value="5-10 hours/week">5-10 hours per week</option>
                      <option value="10+ hours/week">10+ hours per week</option>
                      <option value="short-term">Short-term assignment (2-4 weeks)</option>
                      <option value="long-term">Long-term commitment (3+ months)</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Please share any additional information about why you want to volunteer with us and any specific countries or projects you're interested in."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Frequently Asked Questions</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Do I need specific qualifications to volunteer?</h3>
                <p className="text-gray-700">
                  While some roles require specific skills or experience (such as medical professionals for health projects), many volunteer opportunities are open to anyone with passion and commitment. We provide training and support for all volunteers.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I volunteer if I don't speak Arabic or local languages?</h3>
                <p className="text-gray-700">
                  Yes! While language skills are valuable, they're not required for all positions. For field volunteers, we typically work with local translators. For remote volunteers, English is usually sufficient.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is there a minimum time commitment?</h3>
                <p className="text-gray-700">
                  Time commitments vary by role. Remote volunteers typically commit to at least 5 hours per week for 3 months. Field volunteers usually commit to a minimum of 2 weeks. Community ambassadors have more flexible arrangements based on local events and activities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Do you cover expenses for field volunteers?</h3>
                <p className="text-gray-700">
                  For field volunteers, we typically cover in-country expenses including accommodation, local transportation, and meals. International travel costs are usually the responsibility of the volunteer, though we may offer partial stipends for long-term commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Join Our Volunteer Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Together, we can make a meaningful difference in communities across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#volunteer-form" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Apply Now
            </a>
            <Link to="/contact" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Contact Volunteer Coordinator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
