import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandHoldingHeart, FaRegClock, FaRegCalendarAlt, FaShieldAlt, FaUsers } from 'react-icons/fa';

const MonthlyDonation = () => {
  const [donationAmount, setDonationAmount] = React.useState('');
  const [customAmount, setCustomAmount] = React.useState('');
  const [donationType, setDonationType] = React.useState('general');
  
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

  const handleDonate = () => {
    // In a real app, this would handle the donation process
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    console.log('Monthly donation:', finalAmount, 'Type:', donationType);
  };

  const impactItems = [
    {
      amount: 10,
      description: 'Provides clean water to a family for a month',
      icon: <FaTint className="text-primary-600 text-3xl mb-4" />
    },
    {
      amount: 25,
      description: 'Feeds a refugee family for a week',
      icon: <FaUtensils className="text-primary-600 text-3xl mb-4" />
    },
    {
      amount: 50,
      description: 'Supports education for two children for a month',
      icon: <FaGraduationCap className="text-primary-600 text-3xl mb-4" />
    },
    {
      amount: 100,
      description: 'Provides emergency medical care for five people',
      icon: <FaHospital className="text-primary-600 text-3xl mb-4" />
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed K.',
      location: 'London, UK',
      quote: 'Becoming a monthly donor was one of the best decisions I've made. It's easy to set up, and I know my regular support is helping families in need consistently.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      name: 'Fatima J.',
      location: 'Toronto, Canada',
      quote: 'I appreciate the regular updates showing how my monthly donations are making a difference. It's wonderful to see the ongoing impact in communities around the world.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Yusuf M.',
      location: 'Sydney, Australia',
      quote: 'As a monthly donor for over two years, I've seen how sustainable support creates lasting change. The process is seamless, and I can adjust my donation anytime.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
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
              Monthly Giving Program
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join our community of monthly donors and provide consistent, reliable support to those in need around the world.
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
                Become a Monthly Donor
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Why Give Monthly?</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Monthly giving provides sustainable support that allows us to plan long-term projects and respond quickly to emergencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <FaRegClock className="text-primary-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Convenient & Effortless</h3>
              <p className="text-gray-600">
                Set up your donation once and it processes automatically each month. You can modify or cancel at any time.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <FaRegCalendarAlt className="text-primary-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">
                Regular donations allow us to plan ahead, implement long-term projects, and create lasting change in communities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <FaShieldAlt className="text-primary-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Response</h3>
              <p className="text-gray-600">
                Monthly donations provide a reliable funding base that allows us to respond quickly when emergencies strike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">Your Monthly Impact</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your monthly donation creates consistent, meaningful change for those in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center shadow-md"
              >
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">${item.amount}/month</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto mb-6">
              "The best charity is that given continuously, even if it is small." — Prophet Muhammad (peace be upon him)
            </p>
            <a 
              href="#donation-form"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Start Your Monthly Giving
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-title">From Our Monthly Donors</h2>
            <div className="islamic-divider mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Donation Form */}
      <section id="donation-form" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center arabic-title">Become a Monthly Donor</h2>
            <div className="islamic-divider mx-auto mb-8"></div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Select Monthly Amount</label>
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
                    ${amount}/month
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Custom amount"
                  className={`w-full px-4 py-3 border rounded-lg ${
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
              <label className="block text-gray-700 font-medium mb-2">Where Would You Like to Direct Your Support?</label>
              <select
                value={donationType}
                onChange={handleDonationTypeChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-600"
              >
                <option value="general">General Fund (Greatest Need)</option>
                <option value="water">Clean Water Projects</option>
                <option value="food">Food Security Programs</option>
                <option value="education">Education Initiatives</option>
                <option value="healthcare">Healthcare Services</option>
                <option value="orphans">Orphan Sponsorship</option>
                <option value="emergency">Emergency Relief</option>
              </select>
              <p className="mt-2 text-sm text-gray-600">
                Your monthly donation will be directed to this cause area, helping us create sustainable impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <FaUsers className="text-primary-600 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Join Our Monthly Donor Community</h3>
                  <p className="text-gray-700">
                    As a monthly donor, you'll receive:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                    <li>Quarterly impact reports showing how your donations are making a difference</li>
                    <li>Exclusive updates from the field</li>
                    <li>Priority invitations to events and webinars</li>
                    <li>Annual tax receipt for all your donations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/cart"
                onClick={handleDonate}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
              >
                Become a Monthly Donor
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                You can modify or cancel your monthly donation at any time by logging into your account or contacting our donor support team.
              </p>
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">How does monthly giving work?</h3>
                <p className="text-gray-700">
                  When you sign up for monthly giving, your donation will be automatically processed on the same date each month using your preferred payment method. You'll receive a confirmation email for each donation, and you can modify or cancel your monthly gift at any time.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is my monthly donation eligible for tax benefits?</h3>
                <p className="text-gray-700">
                  Yes, all donations are tax-deductible to the extent allowed by law. You'll receive a consolidated annual receipt for all your monthly donations at the beginning of each year for tax purposes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I change my monthly donation amount?</h3>
                <p className="text-gray-700">
                  Absolutely! You can increase, decrease, or cancel your monthly donation at any time by logging into your account on our website or by contacting our donor support team. Changes will be applied to your next scheduled donation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How is my monthly donation used?</h3>
                <p className="text-gray-700">
                  Your monthly donation goes directly to support the cause area you've selected. If you choose the "General Fund," we'll allocate your gift to the areas of greatest need. We maintain a commitment to low administrative costs, ensuring that the maximum amount of your donation reaches those in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white islamic-pattern-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-title">Join Our Community of Monthly Donors</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your consistent support creates sustainable change for vulnerable communities across Sudan, Palestine, Somalia, Afghanistan, Bangladesh, Pakistan, India, Syria, Lebanon, and Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#donation-form"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Start Your Monthly Gift
            </a>
            <Link to="/contact" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
              Contact Donor Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyDonation;
