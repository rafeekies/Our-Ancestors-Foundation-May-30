import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalculator, FaHandHoldingHeart, FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';

const ZakatDonation = () => {
  const [zakatAmount, setZakatAmount] = React.useState('');
  const [calculatedZakat, setCalculatedZakat] = React.useState(null);
  const [showCalculator, setShowCalculator] = React.useState(false);
  
  // Calculator form state
  const [savings, setSavings] = React.useState('');
  const [investments, setInvestments] = React.useState('');
  const [gold, setGold] = React.useState('');
  const [silver, setSilver] = React.useState('');
  const [property, setProperty] = React.useState('');
  const [debts, setDebts] = React.useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleCalculateZakat = (e) => {
    e.preventDefault();
    
    // Convert inputs to numbers
    const savingsNum = parseFloat(savings) || 0;
    const investmentsNum = parseFloat(investments) || 0;
    const goldNum = parseFloat(gold) || 0;
    const silverNum = parseFloat(silver) || 0;
    const propertyNum = parseFloat(property) || 0;
    const debtsNum = parseFloat(debts) || 0;
    
    // Calculate total wealth
    const totalWealth = savingsNum + investmentsNum + goldNum + silverNum + propertyNum - debtsNum;
    
    // Calculate Zakat (2.5% of total wealth)
    const zakat = totalWealth * 0.025;
    
    setCalculatedZakat(zakat > 0 ? zakat : 0);
  };

  const handleDonateZakat = () => {
    // In a real app, this would handle the donation process
    console.log('Donating zakat amount:', zakatAmount || calculatedZakat);
  };

  const zakatProjects = [
    {
      id: 'emergency-relief',
      title: 'Emergency Relief',
      description: 'Providing immediate aid to those affected by conflicts and disasters in Palestine, Syria, and Sudan.',
      image: 'https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg'
    },
    {
      id: 'food-security',
      title: 'Food Security',
      description: 'Distributing food packages to families facing hunger in Somalia, Afghanistan, and Yemen.',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg'
    },
    {
      id: 'orphan-support',
      title: 'Orphan Support',
      description: 'Caring for orphaned children in Bangladesh, Pakistan, and across Africa with education and basic needs.',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg'
    },
    {
      id: 'water-access',
      title: 'Water Access',
      description: 'Building wells and water systems in communities facing water scarcity in Somalia, Sudan, and Pakistan.',
      image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg'
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
              Zakat Donation
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Fulfill your Zakat obligation and help purify your wealth while supporting those in need across the Muslim world.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex items-center bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
              >
                <FaCalculator className="mr-2" />
                {showCalculator ? 'Hide Zakat Calculator' : 'Use Zakat Calculator'}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zakat Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Understanding Zakat</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Zakat is one of the five pillars of Islam, a form of obligatory charity that purifies wealth and helps those in need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaInfoCircle className="mr-2 text-primary-600" />
                  What is Zakat?
                </h3>
                <p className="text-gray-700 mb-4">
                  Zakat is an annual obligation on Muslims who possess wealth above a certain threshold (nisab). It is calculated at 2.5% of qualifying wealth and is meant to be distributed to specific categories of recipients.
                </p>
                <p className="text-gray-700">
                  The Quran states: "And establish prayer and give zakah, and whatever good you put forward for yourselves - you will find it with Allah." (Quran 2:110)
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary-700 mb-4 flex items-center">
                  <FaQuestionCircle className="mr-2 text-primary-600" />
                  Who Receives Zakat?
                </h3>
                <p className="text-gray-700 mb-4">
                  The Quran specifies eight categories of people eligible to receive Zakat:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>The poor (al-fuqara)</li>
                  <li>The needy (al-masakin)</li>
                  <li>Zakat administrators</li>
                  <li>Those whose hearts are to be reconciled</li>
                  <li>Those in bondage (slaves and captives)</li>
                  <li>The debt-ridden</li>
                  <li>In the cause of Allah</li>
                  <li>The wayfarer (stranded traveler)</li>
                </ul>
              </div>
            </div>
            
            {/* Zakat Calculator */}
            {showCalculator && (
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Zakat Calculator</h3>
                
                <form onSubmit={handleCalculateZakat}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Cash & Savings ($)</label>
                      <input
                        type="number"
                        value={savings}
                        onChange={(e) => setSavings(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Investments & Stocks ($)</label>
                      <input
                        type="number"
                        value={investments}
                        onChange={(e) => setInvestments(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Gold Value ($)</label>
                      <input
                        type="number"
                        value={gold}
                        onChange={(e) => setGold(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Silver Value ($)</label>
                      <input
                        type="number"
                        value={silver}
                        onChange={(e) => setSilver(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Other Assets/Property ($)</label>
                      <input
                        type="number"
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Debts & Liabilities ($)</label>
                      <input
                        type="number"
                        value={debts}
                        onChange={(e) => setDebts(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                      Calculate My Zakat
                    </button>
                  </div>
                </form>
                
                {calculatedZakat !== null && (
                  <div className="mt-8 p-6 bg-primary-50 rounded-lg text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Your Estimated Zakat</h4>
                    <p className="text-3xl font-bold text-primary-600 mb-4">${calculatedZakat.toFixed(2)}</p>
                    <p className="text-gray-600 mb-4">
                      This is an estimate based on the information provided. For specific rulings, please consult with a qualified scholar.
                    </p>
                    <button
                      onClick={() => {
                        setZakatAmount(calculatedZakat.toFixed(2));
                        setShowCalculator(false);
                        window.scrollTo({
                          top: document.getElementById('donation-form').offsetTop - 100,
                          behavior: 'smooth'
                        });
                      }}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                    >
                      Use This Amount
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Donation Form */}
            <div id="donation-form" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Donate Your Zakat</h3>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Zakat Amount ($)</label>
                <input
                  type="number"
                  value={zakatAmount}
                  onChange={(e) => setZakatAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your zakat amount"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Select Zakat Distribution</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="general">General Zakat Fund (All Categories)</option>
                  <option value="poor">The Poor & Needy</option>
                  <option value="refugees">Refugees & Displaced Persons</option>
                  <option value="orphans">Orphans & Vulnerable Children</option>
                  <option value="emergency">Emergency Relief</option>
                </select>
                <p className="mt-2 text-sm text-gray-600">
                  Our Zakat policy ensures that 100% of your Zakat reaches eligible recipients according to Islamic guidelines.
                </p>
              </div>
              
              <div className="text-center">
                <Link
                  to="/cart"
                  onClick={handleDonateZakat}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
                >
                  Add to Donation Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zakat Projects */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Zakat-Eligible Projects</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These projects specifically serve Zakat-eligible recipients across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {zakatProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Zakat Eligible
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">How do you ensure my Zakat reaches eligible recipients?</h3>
                <p className="text-gray-700">
                  We have a dedicated Zakat compliance team that works with Islamic scholars to ensure all Zakat funds are distributed according to Islamic guidelines. We maintain separate accounting for Zakat funds and provide detailed reports on their distribution.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I specify which country my Zakat goes to?</h3>
                <p className="text-gray-700">
                  Yes, you can indicate your preference for specific countries or regions. However, we prioritize distributing Zakat based on need and urgency to ensure it reaches those most deserving, regardless of location.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is Zakat due on all types of wealth?</h3>
                <p className="text-gray-700">
                  Zakat is due on certain types of wealth that meet the nisab threshold and have been in your possession for a lunar year. This typically includes cash, gold, silver, investments, business inventory, and certain types of property. Personal items like your primary residence, vehicle, and personal belongings are generally exempt.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I pay my Zakat in installments?</h3>
                <p className="text-gray-700">
                  While Zakat is typically due as a lump sum once a year, we understand that some donors may prefer to pay in installments. You can set up monthly Zakat payments, but it's recommended to calculate your total obligation and ensure it's fulfilled within the lunar year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Purify Your Wealth, Transform Lives</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your Zakat has the power to bring hope and dignity to those in need across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="#donation-form" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Donate Zakat Now
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Speak to a Zakat Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZakatDonation;
