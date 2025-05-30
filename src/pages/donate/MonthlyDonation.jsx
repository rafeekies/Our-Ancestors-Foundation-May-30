import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MonthlyDonation = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [selectedProject, setSelectedProject] = useState('general');
  const [isRecurring, setIsRecurring] = useState(true);
  
  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setIsCustom(false);
  };
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (value) {
      setDonationAmount(parseInt(value));
    } else {
      setDonationAmount(0);
    }
  };
  
  const handleCustomClick = () => {
    setIsCustom(true);
    setDonationAmount(customAmount ? parseInt(customAmount) : 0);
  };
  
  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the donation process
    console.log({
      amount: donationAmount,
      project: selectedProject,
      recurring: isRecurring
    });
    // Redirect to cart or checkout page
    window.location.href = '/cart';
  };
  
  const projects = [
    { id: 'general', name: 'Where Most Needed' },
    { id: 'water', name: 'Water Projects' },
    { id: 'education', name: 'Education Programs' },
    { id: 'healthcare', name: 'Healthcare Initiatives' },
    { id: 'orphans', name: 'Orphan Sponsorship' },
    { id: 'food', name: 'Food Security' },
    { id: 'emergency', name: 'Emergency Relief' }
  ];
  
  const impactItems = [
    {
      amount: 30,
      title: "Provide Clean Water",
      description: "Monthly support for sustainable water solutions in communities facing water scarcity.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      amount: 50,
      title: "Educate a Child",
      description: "Monthly support for a child's education, including school supplies, uniforms, and teacher salaries.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      amount: 100,
      title: "Feed a Family",
      description: "Monthly food packages for a family of five, ensuring nutritious meals throughout the month.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      amount: 200,
      title: "Sponsor an Orphan",
      description: "Monthly comprehensive care for an orphaned child, including food, education, healthcare, and emotional support.",
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Monthly Giving</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join our community of monthly donors and make a lasting impact on communities in need around the world.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Become a Monthly Donor</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Select Monthly Amount</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[30, 50, 100, 200].map(amount => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-3 px-4 rounded-md border ${
                            donationAmount === amount && !isCustom
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'
                          } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
                          onClick={() => handleAmountClick(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex items-center">
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-l-md border ${
                          isCustom
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'
                        } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
                        onClick={handleCustomClick}
                      >
                        Custom
                      </button>
                      <div className="relative flex-1">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                        <input
                          type="text"
                          className="w-full py-3 pl-8 pr-4 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onClick={handleCustomClick}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Selection */}
                  <div className="mb-8">
                    <label htmlFor="project" className="block text-gray-700 font-medium mb-3">
                      Direct Your Monthly Gift To
                    </label>
                    <select
                      id="project"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      value={selectedProject}
                      onChange={handleProjectChange}
                    >
                      {projects.map(project => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Recurring Toggle */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Donation Frequency</label>
                    <div className="flex rounded-md overflow-hidden border border-gray-300">
                      <button
                        type="button"
                        className={`flex-1 py-3 px-4 ${
                          isRecurring
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsRecurring(true)}
                      >
                        Monthly
                      </button>
                      <button
                        type="button"
                        className={`flex-1 py-3 px-4 ${
                          !isRecurring
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsRecurring(false)}
                      >
                        One-time
                      </button>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                  >
                    {isRecurring ? 'Become a Monthly Donor' : 'Make a One-time Donation'}
                  </button>
                  
                  {/* Secure Payment Notice */}
                  <div className="mt-4 flex items-center justify-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure payment processing</span>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Impact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Monthly Impact</h2>
              
              <div className="space-y-6">
                {impactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          ${item.amount}/month: {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Monthly Giving?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Sustainable Impact:</strong> Your regular support allows us to plan long-term projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Convenience:</strong> Set up once and your donation is processed automatically</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Flexibility:</strong> You can change or cancel your monthly gift at any time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Community:</strong> Join a dedicated group of supporters making a difference</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">From Our Monthly Donors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm">Monthly donor since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I love knowing that every month, my donation is helping provide clean water to families in need. The regular updates I receive show me exactly how my support is making a difference."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Michael Chen</h3>
                  <p className="text-gray-600 text-sm">Monthly donor since 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a monthly donor, I feel like I'm part of something bigger. It's easy to set up, and I know my consistent support helps the foundation plan for the future and create lasting change."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Aisha Rahman" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Aisha Rahman</h3>
                  <p className="text-gray-600 text-sm">Monthly donor since 2019</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I sponsor two orphans through monthly giving, and it's been incredible to see their progress over the years. The foundation makes it easy to stay connected and see the impact of my support."
              </p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">How does monthly giving work?</h3>
              <p className="text-gray-700">
                Monthly giving is a convenient way to make a recurring donation. Once you set up your monthly gift, your donation will be automatically processed on the same day each month. You'll receive a receipt for each donation, and you can change or cancel your monthly gift at any time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I change my monthly donation amount?</h3>
              <p className="text-gray-700">
                Yes, you can change your monthly donation amount at any time by logging into your donor account or contacting our donor support team. Your changes will be applied to your next scheduled donation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How will I know my donation is making an impact?</h3>
              <p className="text-gray-700">
                As a monthly donor, you'll receive regular updates about the projects your donations are supporting. These updates include stories, photos, and reports that show how your contributions are making a difference in the lives of those we serve.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is my monthly donation tax-deductible?</h3>
              <p className="text-gray-700">
                Yes, all donations to Our Ancestors Foundation are tax-deductible to the extent allowed by law. You will receive an annual tax receipt summarizing your donations for the year, which you can use for tax purposes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do I cancel my monthly donation?</h3>
              <p className="text-gray-700">
                You can cancel your monthly donation at any time by logging into your donor account or contacting our donor support team. There are no penalties or fees for cancellation, and we're grateful for whatever support you've been able to provide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Join Our Community of Monthly Donors</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your monthly gift creates lasting change for communities in need. Together, we can build a better future for generations to come.
          </p>
          <Link to="/donate/monthly" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
            Become a Monthly Donor Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MonthlyDonation;
