import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: null,
    position: '',
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
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
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
      resume: null,
      coverLetter: null,
      position: '',
      hearAbout: '',
      message: ''
    });
  };
  
  const jobOpenings = [
    {
      title: "Program Manager - Emergency Response",
      location: "London, UK (with travel)",
      type: "Full-time",
      description: "Lead our emergency response programs in conflict and disaster zones, coordinating with local partners and international agencies to deliver timely and effective humanitarian aid.",
      requirements: [
        "5+ years experience in humanitarian program management",
        "Experience working in emergency contexts",
        "Strong project management and coordination skills",
        "Excellent communication and interpersonal abilities",
        "Willingness to travel to field locations (30-40%)"
      ]
    },
    {
      title: "Field Coordinator - Palestine",
      location: "Gaza/Remote",
      type: "Full-time",
      description: "Oversee the implementation of our humanitarian projects in Palestine, working closely with local partners to ensure effective delivery of aid and development programs.",
      requirements: [
        "3+ years experience in humanitarian field operations",
        "Knowledge of the Palestinian context",
        "Experience in project implementation and monitoring",
        "Strong coordination and relationship-building skills",
        "Arabic language skills highly desirable"
      ]
    },
    {
      title: "Water & Sanitation Specialist",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Provide technical expertise for our water and sanitation projects, ensuring they meet international standards and effectively address community needs in water-scarce regions.",
      requirements: [
        "Degree in Civil Engineering, Environmental Science, or related field",
        "3+ years experience in WASH programming in humanitarian contexts",
        "Knowledge of water infrastructure design and implementation",
        "Experience in community-based approaches to water management",
        "Technical report writing skills"
      ]
    },
    {
      title: "Fundraising Manager",
      location: "London, UK",
      type: "Full-time",
      description: "Develop and implement fundraising strategies to grow our individual giving, major donors, and community fundraising programs to support our humanitarian work worldwide.",
      requirements: [
        "Proven track record in fundraising, particularly in the charity sector",
        "Experience in developing and managing fundraising campaigns",
        "Strong relationship-building and networking skills",
        "Knowledge of CRM systems and digital fundraising tools",
        "Excellent written and verbal communication"
      ]
    },
    {
      title: "Digital Communications Officer",
      location: "London, UK (Hybrid)",
      type: "Full-time",
      description: "Create compelling digital content across our platforms to raise awareness about humanitarian issues and engage supporters in our mission and work.",
      requirements: [
        "Experience in digital marketing and social media management",
        "Strong content creation skills (writing, graphics, video)",
        "Knowledge of SEO and digital analytics",
        "Understanding of humanitarian issues",
        "Creative storytelling abilities"
      ]
    },
    {
      title: "Finance Officer",
      location: "London, UK",
      type: "Full-time",
      description: "Support the financial management of our organization, ensuring accurate accounting, reporting, and compliance with regulatory requirements for our international operations.",
      requirements: [
        "Accounting qualification or relevant experience",
        "Experience in financial management in the non-profit sector",
        "Knowledge of international financial regulations",
        "Strong attention to detail and analytical skills",
        "Experience with accounting software"
      ]
    }
  ];
  
  const values = [
    {
      title: "Compassion",
      description: "We approach our work with empathy and care, recognizing the dignity and humanity of those we serve.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our work, ensuring transparency, accountability, and honesty in everything we do.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in our programs and operations, continuously learning and improving to maximize our impact.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership and teamwork, working together across cultures and backgrounds to achieve our shared goals.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];
  
  const benefits = [
    {
      title: "Meaningful Work",
      description: "Make a real difference in the lives of vulnerable communities around the world.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Professional Development",
      description: "Access to training, mentoring, and growth opportunities in the humanitarian sector.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Inclusive Culture",
      description: "Work in a diverse, supportive environment that values different perspectives and experiences.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Competitive Package",
      description: "Salary and benefits that recognize your skills and experience in the sector.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Flexible Working",
      description: "Options for hybrid and flexible working arrangements to support work-life balance.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Global Network",
      description: "Connect with humanitarian professionals and partners around the world.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Build a career with purpose and make a lasting impact on communities around the world.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-700">
              At Our Ancestors Foundation, we're more than just a charity – we're a global team of passionate individuals dedicated to creating positive change in the world's most vulnerable communities. When you join our team, you become part of a movement that values compassion, integrity, and excellence in everything we do.
            </p>
          </div>
          
          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-20 bg-gray-50 py-16 px-4 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Benefits of Working With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Current Openings */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Current Openings</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="font-bold text-xl text-gray-800">{job.title}</h3>
                      <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.location}
                        </span>
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-gray-600 text-sm">{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          position: job.title
                        }));
                        window.scrollTo({ top: document.getElementById('application-form').offsetTop - 100, behavior: 'smooth' });
                      }}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      Apply for this position
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Application Form */}
          <div id="application-form" className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Job Application</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in joining Our Ancestors Foundation. We've received your application and will review it shortly. If your qualifications match our requirements, our HR team will contact you to discuss next steps.
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                {/* Position */}
                <div className="mb-6">
                  <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                    Position You're Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    required
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job, index) => (
                      <option key={index} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Other">Other/Not Listed</option>
                  </select>
                </div>
                
                {/* Resume Upload */}
                <div className="mb-6">
                  <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                    Resume/CV *
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 5MB)</p>
                      </div>
                      <input 
                        id="resume" 
                        name="resume" 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                  </div>
                  {formData.resume && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected file: {formData.resume.name}
                    </p>
                  )}
                </div>
                
                {/* Cover Letter Upload */}
                <div className="mb-6">
                  <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">
                    Cover Letter
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 5MB)</p>
                      </div>
                      <input 
                        id="coverLetter" 
                        name="coverLetter" 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    </label>
                  </div>
                  {formData.coverLetter && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected file: {formData.coverLetter.name}
                    </p>
                  )}
                </div>
                
                {/* How did you hear about us */}
                <div className="mb-6">
                  <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">
                    How did you hear about this position?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Our Website</option>
                    <option value="social-media">Social Media</option>
                    <option value="job-board">Job Board</option>
                    <option value="referral">Employee Referral</option>
                    <option value="event">Event or Career Fair</option>
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
                    placeholder="Please share any additional information that might be relevant to your application"
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is the application process like?</h3>
              <p className="text-gray-700">
                Our application process typically includes an initial application review, followed by 1-2 interviews (which may be conducted remotely), and reference checks. For some positions, we may include a skills assessment or presentation. The entire process usually takes 3-4 weeks, and we keep candidates informed at each stage.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Do I need prior humanitarian experience?</h3>
              <p className="text-gray-700">
                While experience in the humanitarian sector is valuable for many roles, it's not always essential. We value transferable skills, a passion for our mission, and a willingness to learn. Each job posting specifies the required qualifications, and we encourage candidates who meet most of the criteria to apply.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Do you offer internships or volunteer positions?</h3>
              <p className="text-gray-700">
                Yes, we offer internships throughout the year in various departments, as well as volunteer opportunities both in our offices and remotely. These positions are posted on our website when available, or you can express your interest through our volunteer application form.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What support do you provide for international staff?</h3>
              <p className="text-gray-700">
                For international positions, we provide comprehensive support including visa assistance, relocation allowance, accommodation support, security briefings, and cultural orientation. We also offer regular home leave and maintain strong communication with our field teams to ensure their wellbeing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What opportunities are there for career growth?</h3>
              <p className="text-gray-700">
                We're committed to the professional development of our staff. We offer internal promotion opportunities, cross-departmental training, leadership development programs, and educational support. Many of our senior staff members began in entry-level positions and have grown their careers with us over the years.
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
            Join our team of dedicated professionals working to create positive change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#application-form" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Apply Now
            </a>
            <Link to="/contact" className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Contact Our HR Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
