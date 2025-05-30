import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    interests: [],
    skills: [],
    availability: '',
    experience: '',
    hearAbout: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [name]: [...prev[name], value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: prev[name].filter(item => item !== value)
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, this would send the data to a server
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      interests: [],
      skills: [],
      availability: '',
      experience: '',
      hearAbout: '',
      message: ''
    });
  };
  
  const volunteerOpportunities = [
    {
      title: "Field Volunteer",
      description: "Work directly in communities distributing aid, organizing events, and supporting our field operations.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Administrative Support",
      description: "Help with office tasks, data entry, correspondence, and general administrative duties.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Event Coordinator",
      description: "Organize and manage fundraising events, awareness campaigns, and community gatherings.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Digital Volunteer",
      description: "Support our online presence through social media, content creation, and digital marketing.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Translator",
      description: "Help translate documents, communications, and website content to reach more communities.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: "Professional Skills Volunteer",
      description: "Contribute your professional expertise in areas like legal, medical, IT, finance, or education.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];
  
  const volunteerStories = [
    {
      name: "Aisha Rahman",
      role: "Field Volunteer",
      location: "Palestine Relief Program",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "Volunteering with Our Ancestors Foundation has been the most rewarding experience of my life. Seeing the direct impact of our work on families in need gives me purpose and hope."
    },
    {
      name: "Mohammed Ali",
      role: "Medical Volunteer",
      location: "Syria Emergency Response",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      quote: "As a doctor, I wanted to use my skills to help those who need it most. The foundation provided me with the opportunity to make a real difference in crisis situations."
    },
    {
      name: "Sarah Khan",
      role: "Digital Volunteer",
      location: "Online Campaigns",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      quote: "Even though I couldn't travel to the field, I've been able to contribute meaningfully by managing social media campaigns that have raised awareness and funds for critical causes."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Volunteer With Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join our global community of volunteers and make a direct impact on the lives of those in need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Volunteer With Us?</h2>
            <p className="text-lg text-gray-700">
              Volunteering with Our Ancestors Foundation is a meaningful way to contribute to humanitarian causes and make a tangible difference in the lives of vulnerable communities around the world. Whether you have a few hours to spare or want to make a long-term commitment, your skills and dedication can help us reach more people in need.
            </p>
          </div>
          
          {/* Volunteer Opportunities */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Volunteer Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {opportunity.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Volunteer Stories */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Volunteer Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {volunteerStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{story.name}</h3>
                    <p className="text-primary-600 font-medium mb-1">{story.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{story.location}</p>
                    <blockquote className="italic text-gray-600 border-l-4 border-primary-500 pl-4">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Volunteer Application Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Volunteer Application</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You for Your Interest!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your volunteer application. Our volunteer coordinator will review your information and contact you within 3-5 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Personal Information */}
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                {/* Volunteer Interests */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Areas of Interest (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Field Work',
                      'Administrative Support',
                      'Event Coordination',
                      'Digital/Social Media',
                      'Translation Services',
                      'Fundraising',
                      'Professional Services',
                      'Education & Training'
                    ].map(interest => (
                      <div key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`interest-${interest}`}
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`interest-${interest}`} className="ml-2 text-gray-700">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skills */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Skills & Expertise (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {[
                      'Project Management',
                      'Teaching/Training',
                      'Medical/Healthcare',
                      'IT/Technology',
                      'Marketing/Communications',
                      'Graphic Design',
                      'Photography/Videography',
                      'Writing/Editing',
                      'Legal',
                      'Accounting/Finance',
                      'Languages',
                      'Social Work',
                      'Construction/Engineering',
                      'Logistics/Supply Chain',
                      'Research'
                    ].map(skill => (
                      <div key={skill} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`skill-${skill}`}
                          name="skills"
                          value={skill}
                          checked={formData.skills.includes(skill)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`skill-${skill}`} className="ml-2 text-gray-700">
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Availability */}
                <div className="mb-6">
                  <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    required
                  >
                    <option value="">Select your availability</option>
                    <option value="one-time">One-time volunteer</option>
                    <option value="occasional">Occasional (a few times per year)</option>
                    <option value="regular">Regular (monthly)</option>
                    <option value="weekly">Weekly</option>
                    <option value="full-time">Full-time volunteer</option>
                  </select>
                </div>
                
                {/* Previous Experience */}
                <div className="mb-6">
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    placeholder="Please describe any previous volunteer experience you have"
                  ></textarea>
                </div>
                
                {/* How did you hear about us */}
                <div className="mb-6">
                  <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">
                    How did you hear about our volunteer program?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Website</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend">Friend or Family</option>
                    <option value="event">Event</option>
                    <option value="news">News or Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Additional Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    placeholder="Please share any additional information that might be relevant to your volunteer application"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Do I need special qualifications to volunteer?</h3>
              <p className="text-gray-700">
                While some roles may require specific skills or qualifications (such as medical professionals for healthcare projects), many volunteer opportunities are open to anyone with a willingness to help. We provide training and support for our volunteers to ensure they can contribute effectively.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I volunteer remotely?</h3>
              <p className="text-gray-700">
                Yes! We offer many remote volunteer opportunities, including digital marketing, content creation, translation, administrative support, and fundraising. Remote volunteering allows you to make a meaningful contribution regardless of your location.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How much time do I need to commit?</h3>
              <p className="text-gray-700">
                We welcome volunteers with various levels of availability. You can volunteer for a one-time event, on an occasional basis, or make a regular commitment. We work with you to find opportunities that match your schedule and availability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Are there age restrictions for volunteering?</h3>
              <p className="text-gray-700">
                Most of our volunteer opportunities are open to adults 18 and older. However, we do have some family-friendly and youth volunteer programs for younger participants. These opportunities are clearly marked, and minors must have parental consent and supervision.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What support will I receive as a volunteer?</h3>
              <p className="text-gray-700">
                All volunteers receive an orientation, training specific to their role, ongoing support from our volunteer coordinators, and regular check-ins. We also provide resources, materials, and equipment necessary for your volunteer activities. Our goal is to ensure you have a meaningful and rewarding volunteer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our community of dedicated volunteers and help us create positive change in the lives of those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/get-involved/volunteer" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Apply to Volunteer
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Contact Our Volunteer Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
