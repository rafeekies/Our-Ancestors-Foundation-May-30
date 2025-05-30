import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Fundraise = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fundraiserType: '',
    fundraiserTitle: '',
    fundraiserGoal: '',
    startDate: '',
    endDate: '',
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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      fundraiserType: '',
      fundraiserTitle: '',
      fundraiserGoal: '',
      startDate: '',
      endDate: '',
      description: '',
      hearAbout: ''
    });
  };
  
  const fundraisingIdeas = [
    {
      title: "Charity Run/Walk",
      description: "Organize a sponsored run or walk event where participants collect pledges for each mile completed.",
      image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg",
      tips: [
        "Choose a scenic route that's accessible for all fitness levels",
        "Create different distance options (5K, 10K, etc.)",
        "Provide t-shirts or medals for participants",
        "Set up water stations and rest points"
      ]
    },
    {
      title: "Bake Sale",
      description: "Host a bake sale at your school, workplace, or community center with proceeds going to charity.",
      image: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg",
      tips: [
        "Ask friends and family to contribute baked goods",
        "Label items with ingredients for allergy concerns",
        "Price items affordably to encourage multiple purchases",
        "Create themed treats related to the cause"
      ]
    },
    {
      title: "Online Fundraising Campaign",
      description: "Create a personal fundraising page to share with your network on social media and via email.",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg",
      tips: [
        "Share your personal connection to the cause",
        "Set a realistic but ambitious goal",
        "Post regular updates on your progress",
        "Thank donors publicly (with their permission)"
      ]
    },
    {
      title: "Charity Dinner",
      description: "Organize a dinner event with ticket sales benefiting the charity. Can include entertainment and auctions.",
      image: "https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg",
      tips: [
        "Seek donated venue space and food to maximize profits",
        "Include a presentation about the charity's work",
        "Add a silent auction or raffle to increase funds raised",
        "Create a memorable theme for the evening"
      ]
    },
    {
      title: "Sports Tournament",
      description: "Organize a football, basketball, or other sports tournament with team entry fees going to charity.",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
      tips: [
        "Charge a reasonable entry fee per team",
        "Seek sponsorship for prizes and refreshments",
        "Create divisions for different age groups or skill levels",
        "Arrange for photos and videos to share on social media"
      ]
    },
    {
      title: "Ramadan Fundraising",
      description: "Host iftars, create Ramadan giving calendars, or organize charity drives during the holy month.",
      image: "https://images.pexels.com/photos/5622757/pexels-photo-5622757.jpeg",
      tips: [
        "Create a Ramadan giving calendar with daily donation suggestions",
        "Host community iftars with donation opportunities",
        "Organize a 'Fast-a-thon' where non-Muslims fast for a day and donate",
        "Partner with local mosques for wider reach"
      ]
    }
  ];
  
  const successStories = [
    {
      name: "Team Hope Builders",
      raised: "$15,250",
      cause: "Palestine Emergency Relief",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
      description: "A group of university students organized a 24-hour gaming marathon livestream that attracted over 2,000 viewers and raised funds for emergency aid in Palestine."
    },
    {
      name: "Sarah's Birthday Fundraiser",
      raised: "$3,875",
      cause: "Water Wells in Somalia",
      image: "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg",
      description: "Instead of gifts for her 30th birthday, Sarah asked friends and family to donate toward building a water well in Somalia, exceeding her goal by 55%."
    },
    {
      name: "Community Iftar Event",
      raised: "$8,500",
      cause: "Orphan Sponsorship",
      image: "https://images.pexels.com/photos/5622757/pexels-photo-5622757.jpeg",
      description: "A local community organized a charity iftar during Ramadan, combining a delicious meal with presentations about orphan care programs, raising enough to sponsor 17 orphans for a year."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Your Fundraiser</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Create your own fundraising campaign to support our humanitarian projects and make a difference in the lives of those in need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Fundraise With Us?</h2>
            <p className="text-lg text-gray-700">
              Fundraising for Our Ancestors Foundation is a powerful way to multiply your impact and engage your community in supporting humanitarian causes. Whether you're celebrating a special occasion, challenging yourself, or bringing people together, your fundraising efforts will help provide vital aid to those who need it most.
            </p>
          </div>
          
          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Create Your Fundraiser</h3>
                <p className="text-gray-600">
                  Choose a cause you're passionate about, set a fundraising goal, and personalize your fundraising page with your story and photos.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Share With Your Network</h3>
                <p className="text-gray-600">
                  Spread the word about your fundraiser through social media, email, and personal conversations. We provide tools and tips to help you reach more people.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Make An Impact</h3>
                <p className="text-gray-600">
                  Watch your fundraiser grow as donations come in. You'll receive updates on the impact of your fundraising efforts and can share these with your supporters.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Fundraising Ideas */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Fundraising Ideas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fundraisingIdeas.map((idea, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img 
                    src={idea.image} 
                    alt={idea.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{idea.title}</h3>
                    <p className="text-gray-700 mb-4">{idea.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Tips:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {idea.tips.map((tip, i) => (
                          <li key={i} className="text-gray-600 text-sm">{tip}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          fundraiserType: idea.title
                        }));
                        window.scrollTo({ top: document.getElementById('fundraiser-form').offsetTop - 100, behavior: 'smooth' });
                      }}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Start this fundraiser →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
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
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-xl text-gray-800">{story.name}</h3>
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {story.raised}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-3">{story.cause}</p>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Fundraiser Form */}
          <div id="fundraiser-form" className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Start Your Fundraiser</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You for Starting a Fundraiser!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your fundraiser request. Our team will review your information and contact you within 1-2 business days to help you set up your fundraising page.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Start Another Fundraiser
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
                </div>
                
                {/* Fundraiser Details */}
                <div className="mb-6">
                  <label htmlFor="fundraiserType" className="block text-gray-700 font-medium mb-2">
                    Fundraiser Type *
                  </label>
                  <select
                    id="fundraiserType"
                    name="fundraiserType"
                    value={formData.fundraiserType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    required
                  >
                    <option value="">Select a fundraiser type</option>
                    <option value="Personal Challenge">Personal Challenge (Run, Walk, etc.)</option>
                    <option value="Birthday/Celebration">Birthday or Celebration</option>
                    <option value="Community Event">Community Event</option>
                    <option value="School Fundraiser">School Fundraiser</option>
                    <option value="Ramadan Fundraiser">Ramadan Fundraiser</option>
                    <option value="In Memory">In Memory of Someone</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="fundraiserTitle" className="block text-gray-700 font-medium mb-2">
                    Fundraiser Title *
                  </label>
                  <input
                    type="text"
                    id="fundraiserTitle"
                    name="fundraiserTitle"
                    value={formData.fundraiserTitle}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    placeholder="e.g., 'Sarah's Birthday Fundraiser for Palestine'"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="fundraiserGoal" className="block text-gray-700 font-medium mb-2">
                    Fundraising Goal ($) *
                  </label>
                  <input
                    type="number"
                    id="fundraiserGoal"
                    name="fundraiserGoal"
                    value={formData.fundraiserGoal}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    placeholder="e.g., 1000"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                    Fundraiser Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                    placeholder="Tell us about your fundraiser and why you're passionate about this cause"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">
                    How did you hear about our fundraising program?
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
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                >
                  Create Fundraiser
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Fundraising Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Fundraising Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <svg className="w-12 h-12 text-primary-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fundraising Guide</h3>
              <p className="text-gray-700 mb-4">
                Download our comprehensive fundraising guide with step-by-step instructions, tips, and templates to make your fundraiser a success.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Download Guide (PDF) →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <svg className="w-12 h-12 text-primary-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Media Kit</h3>
              <p className="text-gray-700 mb-4">
                Access our media kit with logos, images, impact stories, and social media templates to help promote your fundraiser.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Access Media Kit →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <svg className="w-12 h-12 text-primary-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fundraiser Support</h3>
              <p className="text-gray-700 mb-4">
                Our dedicated fundraising team is here to help you every step of the way. Contact us for personalized support and advice.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact Support →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do I set up my fundraising page?</h3>
              <p className="text-gray-700">
                After submitting the fundraiser form, our team will review your information and help you set up your personalized fundraising page. You'll receive an email with instructions and a link to access and customize your page within 1-2 business days.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I fundraise for a specific project or country?</h3>
              <p className="text-gray-700">
                Yes! You can choose to direct your fundraising efforts toward a specific project, country, or emergency appeal. When setting up your fundraiser, you'll have the option to select the cause you want to support. If you have a specific project in mind that isn't listed, please contact our fundraising team.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How will donors receive tax receipts?</h3>
              <p className="text-gray-700">
                All donors who contribute to your fundraiser will automatically receive a tax receipt via email for their donation. The receipt will be issued by Our Ancestors Foundation and can be used for tax deduction purposes where applicable.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I fundraise as a team or organization?</h3>
              <p className="text-gray-700">
                Absolutely! We welcome team and organizational fundraisers. When filling out the fundraiser form, simply indicate that you're fundraising as a group in the description field. Our team will help you set up a team page where individual members can join and contribute to the collective goal.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How will I know the impact of my fundraiser?</h3>
              <p className="text-gray-700">
                We believe in transparency and accountability. You'll receive regular updates on the progress of the projects supported by your fundraiser. After your fundraiser concludes, we'll provide you with an impact report that you can share with your donors, showing exactly how their contributions have made a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Bigger Impact?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Start your fundraiser today and multiply your impact by engaging your community in supporting humanitarian causes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#fundraiser-form" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Start Your Fundraiser
            </a>
            <Link to="/contact" className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              Contact Our Fundraising Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fundraise;
