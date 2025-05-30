import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SadaqahDonation = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [sadaqahType, setSadaqahType] = useState('general');
  const [isRecurring, setIsRecurring] = useState(false);
  
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
  
  const handleSadaqahTypeChange = (e) => {
    setSadaqahType(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the donation process
    console.log({
      amount: donationAmount,
      sadaqahType: sadaqahType,
      recurring: isRecurring
    });
    // Redirect to cart or checkout page
    window.location.href = '/cart';
  };
  
  const sadaqahTypes = [
    { id: 'general', name: 'General Sadaqah' },
    { id: 'food', name: 'Food Distribution' },
    { id: 'water', name: 'Water Projects' },
    { id: 'orphans', name: 'Orphan Support' },
    { id: 'education', name: 'Education Programs' },
    { id: 'medical', name: 'Medical Aid' },
    { id: 'mosque', name: 'Mosque Construction' }
  ];

  const sadaqahProjects = [
    {
      id: 1,
      title: "Feed a Family",
      description: "Provide nutritious meals to a family in need for a month.",
      image: "https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg",
      amount: 50
    },
    {
      id: 2,
      title: "Water Well",
      description: "Contribute to building a water well in a water-scarce region.",
      image: "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg",
      amount: 100
    },
    {
      id: 3,
      title: "Orphan Support",
      description: "Provide essential care and education for orphaned children.",
      image: "https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg",
      amount: 75
    },
    {
      id: 4,
      title: "Medical Aid",
      description: "Support medical clinics providing healthcare to underserved communities.",
      image: "https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg",
      amount: 120
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Sadaqah Donation</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Give voluntary charity (Sadaqah) and help those in need while earning endless rewards.
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Give Sadaqah</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Select Donation Amount</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[25, 50, 100, 200].map(amount => (
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
                  
                  {/* Sadaqah Type Selection */}
                  <div className="mb-8">
                    <label htmlFor="sadaqahType" className="block text-gray-700 font-medium mb-3">
                      Direct Your Sadaqah To
                    </label>
                    <select
                      id="sadaqahType"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      value={sadaqahType}
                      onChange={handleSadaqahTypeChange}
                    >
                      {sadaqahTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name}
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
                          !isRecurring
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsRecurring(false)}
                      >
                        One-time
                      </button>
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
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                  >
                    {isRecurring ? 'Give Monthly Sadaqah' : 'Give Sadaqah Now'}
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
            
            {/* Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Sadaqah</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What is Sadaqah?</h3>
                <p className="text-gray-700 mb-4">
                  Sadaqah is a voluntary act of giving charity in Islam. Unlike Zakat, which is obligatory, Sadaqah can be given at any time, in any amount, and is not limited to monetary donations.
                </p>
                <p className="text-gray-700">
                  The Prophet Muhammad (peace be upon him) said: "Charity does not decrease wealth." By giving Sadaqah, Muslims seek to purify their wealth, express gratitude to Allah, and help those in need.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits of Sadaqah</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Spiritual Rewards:</strong> Sadaqah purifies the soul and increases blessings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Protection:</strong> Acts as a shield against calamities and hardships</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Continuous Rewards:</strong> Sadaqah Jariyah (ongoing charity) continues to benefit even after death</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Community Support:</strong> Strengthens bonds and helps those in need</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Types of Sadaqah</h3>
                <p className="text-gray-700 mb-4">
                  Sadaqah is not limited to monetary donations. The Prophet Muhammad (peace be upon him) said: "Every act of kindness is charity." Here are some ways to give Sadaqah:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Financial Donations:</strong> Giving money to those in need or to charitable causes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Sadaqah Jariyah:</strong> Ongoing charity that continues to benefit others (e.g., building wells, schools, hospitals)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Acts of Kindness:</strong> Helping others, smiling, removing harmful objects from paths</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Sharing Knowledge:</strong> Teaching others beneficial knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Sadaqah Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Sadaqah Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sadaqahProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary-600">${project.amount}</span>
                    <button 
                      onClick={() => {
                        handleAmountClick(project.amount);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition duration-300"
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sadaqah Jariyah */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sadaqah Jariyah</h2>
                <p className="text-gray-700 mb-4">
                  Sadaqah Jariyah is a form of ongoing charity that continues to benefit people even after the donor has passed away. The Prophet Muhammad (peace be upon him) said: "When a person dies, their deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them."
                </p>
                <p className="text-gray-700 mb-6">
                  By contributing to our Sadaqah Jariyah projects, you can establish a source of continuous rewards that will benefit you in this life and the next.
                </p>
                <Link to="/sadaqah-jariyah" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block">
                  Explore Sadaqah Jariyah Projects
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100 text-center">
                  <svg className="w-12 h-12 text-primary-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="font-bold text-gray-800 mb-1">Water Wells</h3>
                  <p className="text-gray-600 text-sm">Provide clean water for generations</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100 text-center">
                  <svg className="w-12 h-12 text-primary-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="font-bold text-gray-800 mb-1">Mosques</h3>
                  <p className="text-gray-600 text-sm">Build houses of worship</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100 text-center">
                  <svg className="w-12 h-12 text-primary-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <h3 className="font-bold text-gray-800 mb-1">Schools</h3>
                  <p className="text-gray-600 text-sm">Support education for children</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100 text-center">
                  <svg className="w-12 h-12 text-primary-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-gray-800 mb-1">Medical Clinics</h3>
                  <p className="text-gray-600 text-sm">Provide healthcare services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">From Our Donors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Ahmed Khan" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Ahmed Khan</h3>
                  <p className="text-gray-600 text-sm">Regular Sadaqah donor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Giving Sadaqah through Our Ancestors Foundation has been a blessing. I know my donations are reaching those who need it most, and the regular updates show the real impact of my contributions."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Layla Mahmoud" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Layla Mahmoud</h3>
                  <p className="text-gray-600 text-sm">Sadaqah Jariyah donor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I contributed to a water well project as Sadaqah Jariyah for my late father. Knowing that people will benefit from clean water for years to come gives me comfort that he continues to receive rewards."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" 
                  alt="Omar Farooq" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Omar Farooq</h3>
                  <p className="text-gray-600 text-sm">Monthly Sadaqah donor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Setting up a monthly Sadaqah donation has been one of the best decisions I've made. It's easy, consistent, and I feel connected to a greater cause of helping others in need around the world."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Give Sadaqah Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your Sadaqah can change lives. Every contribution, no matter how small, makes a difference in the lives of those in need.
          </p>
          <Link to="/donate/sadaqah" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
            Donate Sadaqah Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SadaqahDonation;
