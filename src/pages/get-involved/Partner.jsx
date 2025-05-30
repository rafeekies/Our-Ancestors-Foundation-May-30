import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Partner = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    partnershipType: '',
    description: '',
    hearAbout: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, this would send the data to a server
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      organizationName: '',
      contactName: '',
      email: '',
      phone: '',
      website: '',
      country: '',
      partnershipType: '',
      description: '',
      hearAbout: ''
    });
  };
  
  const partnershipTypes = [
    {
      title: "Implementing Partners",
      description: "Organizations that help implement our humanitarian projects on the ground in various countries.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Corporate Partners",
      description: "Businesses that support our work through financial contributions, in-kind donations, or employee engagement.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Institutional Partners",
      description: "Foundations, trusts, and institutional donors that provide grants and funding for our programs.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Community Partners",
      description: "Mosques, community centers, and local organizations that help us reach communities and raise awareness.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5" />
        </svg>
      )
    },
    {
      title: "Technical Partners",
      description: "Organizations that provide specialized expertise in areas such as water, healthcare, education, or emergency response.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Media Partners",
      description: "Media organizations that help amplify our message and raise awareness about humanitarian issues.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];
  
  const partnerStories = [
    {
      name: "Al-Amal Foundation",
      type: "Implementing Partner",
      location: "Gaza, Palestine",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      description: "Al-Amal Foundation has been our implementing partner in Gaza for over 5 years, helping distribute emergency aid, run medical clinics, and support orphans and widows."
    },
    {
      name: "Global Water Solutions",
      type: "Technical Partner",
      location: "Multiple Countries",
      image: "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg",
      description: "This technical partner provides expertise in water well construction and water purification systems, helping us bring clean water to communities in Somalia, Pakistan, and Bangladesh."
    },
    {
      name: "Ethical Trade Co.",
      type: "Corporate Partner",
      location: "United Kingdom",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      description: "This ethical business donates 10% of profits to our emergency appeals and engages employees in fundraising activities, raising over $250,000 in the past two years."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partner With Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join forces with Our Ancestors Foundation to create sustainable impact and reach more communities in need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Partner With Us?</h2>
            <p className="text-lg text-gray-700">
              Partnerships are at the heart of our approach to humanitarian work. By combining resources, expertise, and networks, we can achieve greater impact and reach more communities in need. Our Ancestors Foundation works with a diverse range of partners, from local grassroots organizations to international institutions, all united by a shared commitment to humanitarian values and sustainable development.
            </p>
          </div>
          
          {/* Partnership Types */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Types of Partnerships</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Partner Stories */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Partner Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerStories.map((story, index) => (
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
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{story.name}</h3>
                    <p className="text-primary-600 font-medium mb-1">{story.type}</p>
                    <p className="text-gray-500 text-sm mb-4">{story.location}</p>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Partnership Benefits */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Partnership Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">For Implementing Partners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Funding:</strong> Access to project funding and resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Capacity Building:</strong> Training and organizational development support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Technical Support:</strong> Access to expertise and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Network:</strong> Connection to a global network of humanitarian organizations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">For Corporate Partners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Social Impact:</strong> Make a meaningful difference in communities worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Brand Association:</strong> Align with a trusted humanitarian organization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Employee Engagement:</strong> Opportunities for staff to get involved</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Visibility:</strong> Recognition across our platforms and networks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">For Institutional Partners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Effective Implementation:</strong> Reliable partner with proven track record</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Transparency:</strong> Detailed reporting and accountability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Local Reach:</strong> Access to communities through our network</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Innovation:</strong> Collaborative approach to solving challenges</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">For Community Partners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Community Engagement:</strong> Opportunities for local involvement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Educational Resources:</strong> Materials about humanitarian issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Event Support:</strong> Assistance with fundraising and awareness events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Speaker Program:</strong> Access to speakers for community events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Partnership Process */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Our Partnership Process</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
                
                {/* Steps */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                      1
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Initial Contact</h3>
                      <p className="text-gray-600 max-w-lg">
                        Submit your partnership inquiry through our form. Our partnerships team will review your information and get in touch within 5 business days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                      2
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Exploratory Discussion</h3>
                      <p className="text-gray-600 max-w-lg">
                        We'll schedule a call or meeting to discuss your organization, our work, and potential areas for collaboration. This helps us understand if there's a good fit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                      3
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Partnership Proposal</h3>
                      <p className="text-gray-600 max-w-lg">
                        If there's mutual interest, we'll develop a partnership proposal outlining objectives, activities, timelines, and responsibilities for both parties.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                      4
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Agreement & Onboarding</h3>
                      <p className="text-gray-600 max-w-lg">
                        Once the proposal is accepted, we'll formalize the partnership with an agreement. We'll then conduct an onboarding process to ensure a smooth start.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                      5
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation & Evaluation</h3>
                      <p className="text-gray-600 max-w-lg">
                        We'll work together to implement the partnership activities, with regular check-ins and evaluations to ensure we're meeting our shared objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partnership Form */}
          <div id="partnership-form" className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Partnership Inquiry</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You for Your Interest!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your partnership inquiry. Our partnerships team will review your information and contact you within 5 business days to discuss potential collaboration opportunities.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Organization Information */}
                  <div>
                    <label htmlFor="organizationName" className="block text-gray-700 font-medium mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-gray-700 font-medium mb-2">
                      Contact Person's Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
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
                    <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      placeholder="https://"
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
                
                {/* Partnership Details */}
                <div className="mb-6">
                  <label htmlFor="partnershipType" className="block text-gray-700 font-medium mb-2">
                    Type of Partnership *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    required
                  >
                    <option value="">Select partnership type</option>
                    <option value="implementing">Implementing Partner</option>
                    <option value="corporate">Corporate Partner</option>
                    <option value="institutional">Institutional Partner</option>
                    <option value="community">Community Partner</option>
                    <option value="technical">Technical Partner</option>
                    <option value="media">Media Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                    Describe Your Organization and Potential Partnership *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    placeholder="Please tell us about your organization and how you envision partnering with Our Ancestors Foundation"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">
                    How did you hear about our partnership program?
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
                    <option value="referral">Referral from Another Organization</option>
                    <option value="event">Event</option>
                    <option value="news">News or Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                >
                  Submit Partnership Inquiry
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What are the criteria for becoming a partner?</h3>
              <p className="text-gray-700">
                We look for partners who share our values and commitment to humanitarian principles. Specific criteria vary by partnership type, but generally include organizational integrity, alignment with our mission, relevant expertise or resources, and a track record of reliability. For implementing partners, we also assess operational capacity and compliance with international standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How long does the partnership process take?</h3>
              <p className="text-gray-700">
                The timeline varies depending on the complexity of the partnership. Simple collaborations might be established within a few weeks, while more complex partnerships involving funding or program implementation may take 2-3 months to finalize. We strive to be efficient while ensuring proper due diligence.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can small organizations become partners?</h3>
              <p className="text-gray-700">
                Absolutely! We value partnerships with organizations of all sizes. For smaller organizations, we often focus on capacity building alongside program implementation. We believe that local, grassroots organizations bring invaluable knowledge and community connections that are essential for sustainable impact.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What support do you provide to partners?</h3>
              <p className="text-gray-700">
                The support we provide depends on the partnership type. For implementing partners, we offer funding, technical assistance, capacity building, and monitoring and evaluation support. For corporate and institutional partners, we provide regular reporting, visibility, and engagement opportunities. All partners benefit from our network and collaborative approach to problem-solving.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do you ensure accountability in partnerships?</h3>
              <p className="text-gray-700">
                Accountability is central to our partnership approach. We establish clear agreements with defined roles, responsibilities, and expectations. Regular monitoring, reporting, and evaluation processes help track progress and address any issues. We also conduct due diligence before formalizing partnerships and maintain open communication throughout the collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Together, we can create sustainable impact and reach more communities in need. Start the conversation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#partnership-form" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Submit Partnership Inquiry
            </a>
            <Link to="/contact" className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Contact Our Partnerships Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
