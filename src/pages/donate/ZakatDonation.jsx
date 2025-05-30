import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ZakatDonation = () => {
  const [donationAmount, setDonationAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [zakatType, setZakatType] = useState('general');
  
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
  
  const handleZakatTypeChange = (e) => {
    setZakatType(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the donation process
    console.log({
      amount: donationAmount,
      zakatType: zakatType
    });
    // Redirect to cart or checkout page
    window.location.href = '/cart';
  };
  
  const zakatTypes = [
    { id: 'general', name: 'General Zakat' },
    { id: 'maal', name: 'Zakat al-Maal' },
    { id: 'fitr', name: 'Zakat al-Fitr' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 arabic-title">Zakat Donation</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Fulfill your religious obligation and purify your wealth by giving Zakat to those in need.
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Give Your Zakat</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">Select Zakat Amount</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[100, 250, 500, 1000].map(amount => (
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
                  
                  {/* Zakat Type Selection */}
                  <div className="mb-8">
                    <label htmlFor="zakatType" className="block text-gray-700 font-medium mb-3">
                      Zakat Type
                    </label>
                    <select
                      id="zakatType"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500"
                      value={zakatType}
                      onChange={handleZakatTypeChange}
                    >
                      {zakatTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                  >
                    Give Zakat Now
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
              
              {/* Zakat Calculator */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Zakat Calculator</h2>
                <p className="text-gray-700 mb-4">
                  Use our Zakat calculator to determine how much Zakat you need to pay based on your assets.
                </p>
                <Link
                  to="/zakat-calculator"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md text-center transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Open Zakat Calculator
                </Link>
              </div>
            </div>
            
            {/* Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Zakat</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What is Zakat?</h3>
                <p className="text-gray-700 mb-4">
                  Zakat is one of the Five Pillars of Islam and a mandatory charitable contribution for all Muslims who meet the necessary criteria of wealth. It is a form of worship and self-purification.
                </p>
                <p className="text-gray-700">
                  The word Zakat means "purification" and "growth." By giving Zakat, Muslims purify their wealth and gain spiritual growth. Zakat is calculated as 2.5% of a Muslim's total savings and wealth that has been in their possession for one lunar year.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Who is Eligible to Receive Zakat?</h3>
                <p className="text-gray-700 mb-4">
                  The Holy Quran specifies eight categories of people who are eligible to receive Zakat:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>The poor (Al-Fuqara)</li>
                  <li>The needy (Al-Masakin)</li>
                  <li>Zakat administrators</li>
                  <li>Those whose hearts are to be reconciled</li>
                  <li>Those in bondage (slaves and captives)</li>
                  <li>The debt-ridden</li>
                  <li>In the cause of Allah (Fi Sabilillah)</li>
                  <li>The wayfarer (travelers in need)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How We Distribute Your Zakat</h3>
                <p className="text-gray-700 mb-4">
                  Our Ancestors Foundation ensures that your Zakat reaches those who need it most, in accordance with Islamic principles. We distribute Zakat to eligible recipients in the following ways:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Emergency Relief:</strong> Providing food, shelter, and medical aid to those affected by conflicts and natural disasters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Poverty Alleviation:</strong> Supporting poor families with basic necessities and sustainable livelihood programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Orphan Care:</strong> Providing comprehensive support for orphaned children</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Education:</strong> Funding educational programs for underprivileged children and youth</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Healthcare:</strong> Supporting medical facilities and healthcare services in underserved areas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Zakat Policy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>100% Donation Policy:</strong> All of your Zakat goes directly to those in need</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Shariah Compliance:</strong> Our Zakat collection and distribution follows Islamic principles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Transparency:</strong> Detailed reporting on how your Zakat is used</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Immediate Distribution:</strong> We ensure your Zakat reaches recipients promptly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Zakat Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">The Impact of Your Zakat</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
                alt="Family receiving aid" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Fatima's Family in Syria</h3>
                <p className="text-gray-700 mb-4">
                  After losing their home in the conflict, Fatima and her five children struggled to survive. Through Zakat funds, we provided them with shelter, food, and educational support for the children.
                </p>
                <Link to="/impact-stories/fatima" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read their story →
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8459804/pexels-photo-8459804.jpeg" 
                alt="Medical clinic" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Healthcare in Gaza</h3>
                <p className="text-gray-700 mb-4">
                  Your Zakat helped establish a medical clinic in Gaza that serves over 5,000 patients monthly, providing essential healthcare services to those who would otherwise go without.
                </p>
                <Link to="/impact-stories/gaza-clinic" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read the story →
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg" 
                alt="School children" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Education in Somalia</h3>
                <p className="text-gray-700 mb-4">
                  Zakat funds helped build and operate a school in Somalia that provides quality education to 300 children, many of whom are orphans or from extremely poor families.
                </p>
                <Link to="/impact-stories/somalia-school" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read the story →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Who is required to pay Zakat?</h3>
              <p className="text-gray-700">
                Zakat is obligatory upon every adult Muslim who possesses wealth equal to or exceeding the nisab (minimum threshold) for one lunar year. The nisab is approximately the value of 87.48 grams of gold or 612.36 grams of silver.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How is Zakat calculated?</h3>
              <p className="text-gray-700">
                Zakat is calculated at 2.5% of a Muslim's total savings and wealth that has been in their possession for one lunar year. This includes cash, gold, silver, stocks, business merchandise, and other assets. Certain assets like personal residence, vehicles for personal use, and household items are exempt.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">When should I pay my Zakat?</h3>
              <p className="text-gray-700">
                Zakat should be paid once every lunar year on the wealth that has been in your possession for a full year. Many Muslims choose to pay their Zakat during Ramadan for the extra spiritual rewards, but it can be paid at any time during the year.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is my Zakat donation tax-deductible?</h3>
              <p className="text-gray-700">
                Yes, all donations to Our Ancestors Foundation, including Zakat, are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that you can use for tax purposes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do I know my Zakat is being distributed correctly?</h3>
              <p className="text-gray-700">
                Our Ancestors Foundation follows strict Shariah guidelines for Zakat distribution. We ensure that your Zakat reaches the eligible recipients as specified in the Quran. We provide regular reports and updates on our Zakat distribution projects, and our financial statements are audited annually.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 arabic-title">Purify Your Wealth Through Zakat</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your Zakat has the power to transform lives. Give today and help those in desperate need around the world.
          </p>
          <Link to="/donate/zakat" className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
            Give Your Zakat Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ZakatDonation;
