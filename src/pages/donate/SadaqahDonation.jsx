import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandHoldingHeart, FaHeart, FaStar, FaQuran, FaGift } from 'react-icons/fa';

const SadaqahDonation = () => {
  const [donationAmount, setDonationAmount] = React.useState('');
  const [customAmount, setCustomAmount] = React.useState('');
  const [donationType, setDonationType] = React.useState('general');
  const [isRecurring, setIsRecurring] = React.useState(false);
  const [dedicationType, setDedicationType] = React.useState('none');
  const [dedicationName, setDedicationName] = React.useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value);
  };

  const handleDedicationTypeChange = (e) => {
    setDedicationType(e.target.value);
  };

  const handleDonate = () => {
    // In a real app, this would handle the donation process
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    console.log('Sadaqah donation:', finalAmount, 'Type:', donationType, 'Recurring:', isRecurring);
    if (dedicationType !== 'none') {
      console.log('Dedication:', dedicationType, 'Name:', dedicationName);
    }
  };

  const sadaqahProjects = [
    {
      id: 'water-wells',
      title: 'Water Wells',
      description: 'Provide clean water access to communities in Somalia, Pakistan, and Bangladesh.',
      image: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg',
      amount: 1000
    },
    {
      id: 'food-distribution',
      title: 'Food Distribution',
      description: 'Feed hungry families in Palestine, Syria, and Yemen with nutritious meals.',
      image: 'https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg',
      amount: 50
    },
    {
      id: 'orphan-sponsorship',
      title: 'Orphan Sponsorship',
      description: 'Support orphaned children with education, healthcare, and basic needs.',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg',
      amount: 35
    },
    {
      id: 'masjid-construction',
      title: 'Masjid Construction',
      description: 'Help build and renovate mosques in underserved communities.',
      image: 'https://images.pexels.com/photos/1537086/pexels-photo-1537086.jpeg',
      amount: 5000
    }
  ];

  const virtues = [
    {
      title: 'Continuous Reward',
      description: 'The Prophet Muhammad (peace be upon him) said: "When a person dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous charity), knowledge from which benefit is gained, or a righteous child who prays for him."',
      icon: <FaStar className="text-primary-600 text-3xl mb-4" />
    },
    {
      title: 'Purification of Wealth',
      description: 'Sadaqah purifies wealth and increases blessings. The Prophet (peace be upon him) said: "Charity does not decrease wealth."',
      icon: <FaHeart className="text-primary-600 text-3xl mb-4" />
    },
    {
      title: 'Protection from Hardship',
      description: 'The Prophet (peace be upon him) said: "Give charity without delay, for it stands in the way of calamity."',
      icon: <FaShieldAlt className="text-primary-600 text-3xl mb-4" />
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
              Sadaqah Donation
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Give voluntary charity (Sadaqah) to help those in need and earn continuous rewards for your generosity.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#donation-form"
                className="flex items-center bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
              >
                <FaHandHoldingHeart className="mr-2" />
                Donate Sadaqah Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Sadaqah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Understanding Sadaqah</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Sadaqah is voluntary charity given by Muslims, seeking Allah's pleasure and blessings. Unlike Zakat, there is no specific time or amount prescribed for Sadaqah.
              </p>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg mb-12">
              <div className="flex items-start">
                <FaQuran className="text-primary-600 text-3xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">The Virtues of Sadaqah</h3>
                  <p className="text-gray-700 mb-6">
                    The Quran and Hadith emphasize the importance and rewards of giving Sadaqah:
                  </p>
                  <div className="italic text-gray-700 mb-4 pl-4 border-l-4 border-primary-300">
                    "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills." (Quran 2:261)
                  </div>
                  <p className="text-gray-700">
                    Sadaqah is not limited to monetary donations. The Prophet Muhammad (peace be upon him) said: "Every act of kindness is charity."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {virtues.map((virtue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="flex justify-center">
                    {virtue.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{virtue.title}</h3>
                  <p className="text-gray-700">{virtue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sadaqah Projects */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Sadaqah Projects</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your Sadaqah can support these impactful projects across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sadaqahProjects.map((project, index) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary-600 font-bold">${project.amount}</span>
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
                  <button
                    onClick={() => {
                      handleAmountSelect(project.amount);
                      setDonationType(project.id);
                      window.scrollTo({
                        top: document.getElementById('donation-form').offsetTop - 100,
                        behavior: 'smooth'
                      });
                    }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Donate to This Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sadaqah Jariyah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Sadaqah Jariyah</h2>
              <div className="islamic-divider mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Sadaqah Jariyah is continuous charity that benefits people even after your lifetime, providing ongoing rewards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary-700 mb-4 flex items-center">
                  <FaGift className="mr-2 text-primary-600" />
                  What is Sadaqah Jariyah?
                </h3>
                <p className="text-gray-700 mb-4">
                  Sadaqah Jariyah refers to a form of charity that continues to benefit people and generate rewards for the giver even after they have passed away. It is a powerful way to establish a lasting legacy of goodness.
                </p>
                <p className="text-gray-700">
                  The Prophet Muhammad (peace be upon him) said: "When a person dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous charity), knowledge from which benefit is gained, or a righteous child who prays for him."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Examples of Sadaqah Jariyah</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Building water wells and water systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Constructing or supporting mosques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Establishing schools and educational institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Planting trees and sustainable agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Building hospitals and healthcare facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Publishing and distributing beneficial knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Form */}
      <section id="donation-form" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center arabic-title">Donate Sadaqah</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Select Donation Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg border ${
                      donationAmount === amount 
                        ? 'bg-primary-600 text-white border-primary-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-600'
                    } transition duration-300 text-center font-medium`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Custom amount"
                  className={`w-full px-4 py-3 pl-8 border rounded-lg ${
                    donationAmount === 'custom' 
                      ? 'border-primary-600 ring-2 ring-primary-200' 
                      : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-600`}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Select Project</label>
              <select
                value={donationType}
                onChange={handleDonationTypeChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-600"
              >
                <option value="general">General Sadaqah (Greatest Need)</option>
                <option value="water-wells">Water Wells</option>
                <option value="food-distribution">Food Distribution</option>
                <option value="orphan-sponsorship">Orphan Sponsorship</option>
                <option value="masjid-construction">Masjid Construction</option>
                <option value="education">Education Support</option>
                <option value="medical">Medical Aid</option>
              </select>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <input
                  id="recurring"
                  type="checkbox"
                  checked={isRecurring}
                  onChange={() => setIsRecurring(!isRecurring)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="recurring" className="ml-2 text-gray-700 font-medium">
                  Make this a recurring monthly donation
                </label>
              </div>
              {isRecurring && (
                <p className="text-sm text-gray-600 ml-6">
                  Your donation will be processed automatically each month. You can cancel at any time.
                </p>
              )}
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Dedicate Your Donation (Optional)</label>
              <select
                value={dedicationType}
                onChange={handleDedicationTypeChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-600 mb-4"
              >
                <option value="none">No dedication</option>
                <option value="memory">In memory of someone</option>
                <option value="honor">In honor of someone</option>
                <option value="behalf">On behalf of someone</option>
              </select>
              
              {dedicationType !== 'none' && (
                <input
                  type="text"
                  value={dedicationName}
                  onChange={(e) => setDedicationName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-600"
                />
              )}
            </div>
            
            <div className="text-center">
              <Link
                to="/cart"
                onClick={handleDonate}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
              >
                Add to Donation Cart
              </Link>
            </div>
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">What is the difference between Sadaqah and Zakat?</h3>
                <p className="text-gray-700">
                  Zakat is an obligatory charity that is one of the five pillars of Islam, required from Muslims who possess wealth above a certain threshold. Sadaqah, on the other hand, is voluntary charity that can be given at any time, in any amount, by anyone.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I give Sadaqah on behalf of someone else?</h3>
                <p className="text-gray-700">
                  Yes, you can give Sadaqah on behalf of living or deceased individuals. The rewards of the charity will reach them, by Allah's permission. This is a beautiful way to honor loved ones or contribute to their good deeds in the hereafter.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is there a specific time to give Sadaqah?</h3>
                <p className="text-gray-700">
                  Sadaqah can be given at any time, but certain times are considered especially virtuous, such as during Ramadan, on Fridays, when in need, or during times of hardship. The Prophet Muhammad (peace be upon him) was most generous during Ramadan.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How is my Sadaqah donation used?</h3>
                <p className="text-gray-700">
                  Your Sadaqah donation is used according to the project or fund you select. If you choose the "General Sadaqah" option, we will direct your donation to where it's needed most. We ensure that all donations are used effectively and transparently to help those in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Give Sadaqah, Change Lives</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your Sadaqah can transform lives and communities across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#donation-form"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Donate Sadaqah Now
            </a>
            <Link to="/contact" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SadaqahDonation;
