import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EmergencyDonation = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [selectedCrisis, setSelectedCrisis] = useState('palestine');
  
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
  
  const handleCrisisChange = (e) => {
    setSelectedCrisis(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the donation process
    console.log({
      amount: donationAmount,
      crisis: selectedCrisis
    });
    // Redirect to cart or checkout page
    window.location.href = '/cart';
  };
  
  const crises = [
    { id: 'palestine', name: 'Palestine Emergency' },
    { id: 'syria', name: 'Syria Crisis' },
    { id: 'yemen', name: 'Yemen Humanitarian Crisis' },
    { id: 'sudan', name: 'Sudan Emergency' },
    { id: 'afghanistan', name: 'Afghanistan Crisis' },
    { id: 'somalia', name: 'Somalia Drought' },
    { id: 'lebanon', name: 'Lebanon Crisis' },
    { id: 'general', name: 'Where Most Needed' }
  ];

  const emergencyNeeds = [
    {
      title: "Food Packages",
      description: "Provide emergency food supplies to families affected by conflict and disaster.",
      amount: 50,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Medical Aid",
      description: "Support emergency medical care, medicines, and supplies for the injured and sick.",
      amount: 100,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Emergency Shelter",
      description: "Provide temporary shelter and essential household items for displaced families.",
      amount: 150,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Clean Water",
      description: "Deliver clean water and sanitation facilities to prevent disease outbreaks in crisis zones.",
      amount: 75,
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const emergencyCrises = [
    {
      id: "palestine",
      title: "Palestine Emergency",
      description: "Urgent humanitarian aid for Palestinians affected by the ongoing conflict, including medical supplies, food, and shelter.",
      image: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg",
      raised: 1250000,
      goal: 2000000
    },
    {
      id: "syria",
      title: "Syria Crisis",
      description: "Support for Syrian refugees and internally displaced people who continue to suffer from one of the world's worst humanitarian crises.",
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg",
      raised: 980000,
      goal: 1500000
    },
    {
      id: "yemen",
      title: "Yemen Humanitarian Crisis",
      description: "Critical aid for Yemeni families facing conflict, disease outbreaks, and severe food insecurity in the world's worst humanitarian crisis.",
      image: "https://images.pexels.com/photos/3889990/pexels-photo-3889990.jpeg",
      raised: 750000,
      goal: 1200000
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Emergency Relief</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Your urgent donation can save lives in crisis situations around the world. Act now to help those facing conflict, natural disasters, and humanitarian emergencies.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
            className="mt-8 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            Donate Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="w-6 h-6 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-bold">URGENT: Crisis in Palestine - Thousands of families need immediate assistance</span>
            </div>
            <button 
              onClick={() => {
                setSelectedCrisis('palestine');
                window.scrollTo({ top: 500, behavior: 'smooth' });
              }}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full text-sm transition duration-300"
            >
              Donate to Palestine Emergency
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Donation</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Crisis Selection */}
                  <div className="mb-8">
                    <label htmlFor="crisis" className="block text-gray-700 font-medium mb-3">
                      Select Emergency Crisis
                    </label>
                    <select
                      id="crisis"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      value={selectedCrisis}
                      onChange={handleCrisisChange}
                    >
                      {crises.map(crisis => (
                        <option key={crisis.id} value={crisis.id}>
                          {crisis.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Select Donation Amount</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[50, 100, 250, 500].map(amount => (
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
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Donate Now - Urgent Need
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
              
              {/* Emergency Needs */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Your Donation Provides</h3>
                <div className="space-y-4">
                  {emergencyNeeds.map((need, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 mr-4">
                        {need.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          ${need.amount} - {need.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{need.description}</p>
                        <button
                          onClick={() => handleAmountClick(need.amount)}
                          className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Donate this amount →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Emergency Crises</h2>
              
              <div className="space-y-8">
                {emergencyCrises.map((crisis, index) => (
                  <motion.div
                    key={crisis.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img 
                      src={crisis.image} 
                      alt={crisis.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{crisis.title}</h3>
                      <p className="text-gray-700 mb-4">{crisis.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">
                            ${(crisis.raised / 1000).toFixed(0)}K raised
                          </span>
                          <span className="font-medium text-gray-700">
                            Goal: ${(crisis.goal / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary-600 h-2.5 rounded-full" 
                            style={{ width: `${(crisis.raised / crisis.goal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => {
                          setSelectedCrisis(crisis.id);
                          window.scrollTo({ top: 500, behavior: 'smooth' });
                        }}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                      >
                        Donate to {crisis.title}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Emergency Response</h3>
                <p className="text-gray-700 mb-4">
                  When disaster strikes, Our Ancestors Foundation responds quickly to provide life-saving aid to those affected. Our emergency response includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Rapid Deployment:</strong> Our teams on the ground can mobilize quickly to reach affected areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Immediate Relief:</strong> Distribution of food, water, shelter, and medical aid</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Long-term Support:</strong> Ongoing assistance for recovery and rebuilding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Local Partnerships:</strong> Working with local organizations for effective distribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">The Impact of Your Emergency Donations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg" 
                alt="Medical aid" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Emergency Medical Care in Gaza</h3>
                <p className="text-gray-700 mb-4">
                  "Your donations helped us establish an emergency medical point that treated over 500 injured people in the first week of the crisis. We were able to provide critical care that saved many lives."
                </p>
                <p className="text-gray-600 italic">- Dr. Mahmoud, Emergency Physician</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg" 
                alt="Food distribution" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Food for Syrian Refugees</h3>
                <p className="text-gray-700 mb-4">
                  "When we fled our home, we had nothing. The food packages we received from your organization kept my children from starving. We are forever grateful for your support during our darkest time."
                </p>
                <p className="text-gray-600 italic">- Fatima, Syrian refugee mother of four</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg" 
                alt="Shelter" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Shelter in Yemen</h3>
                <p className="text-gray-700 mb-4">
                  "After our village was destroyed, we had nowhere to go. The emergency shelter provided by your donors gave us a safe place to stay and begin rebuilding our lives."
                </p>
                <p className="text-gray-600 italic">- Ahmed, Yemeni father</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How quickly will my donation reach those in need?</h3>
              <p className="text-gray-700">
                Our emergency response teams are already on the ground in crisis areas. Your donation will be put to use immediately to provide life-saving aid. We prioritize speed and efficiency in our emergency response to help as many people as possible in the critical first hours and days of a crisis.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What percentage of my donation goes directly to emergency relief?</h3>
              <p className="text-gray-700">
                For emergency appeals, we ensure that at least 90% of your donation goes directly to providing aid on the ground. The remaining amount covers essential administrative costs to ensure effective delivery and accountability of our emergency response.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I specify which emergency my donation supports?</h3>
              <p className="text-gray-700">
                Yes, you can select a specific emergency crisis from the dropdown menu on our donation form. If you select "Where Most Needed," we will allocate your donation to the most urgent crisis situations where funds are most critically needed at that time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do you ensure aid reaches those who need it most?</h3>
              <p className="text-gray-700">
                We work with trusted local partners and maintain our own teams on the ground to ensure aid reaches the most vulnerable. We implement strict monitoring and evaluation processes to track the distribution of aid and measure its impact. We also prioritize transparency and regularly report back to our donors on how their contributions are making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Act Now - Save Lives</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Every minute counts in an emergency. Your donation today can provide immediate relief to those facing life-threatening situations.
          </p>
          <Link to="/donate/emergency" className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
            Donate to Emergency Relief
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmergencyDonation;
