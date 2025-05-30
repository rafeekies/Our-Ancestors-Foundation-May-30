import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart, FaMoon, FaHeart, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
  };

  const menuItems = [
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'Our Story', path: '/about/our-story' },
        { name: 'Our Team', path: '/about/our-team' },
        { name: 'Our Impact', path: '/about/our-impact' },
        { name: 'Financial Reports', path: '/about/financial-reports' }
      ]
    },
    {
      name: 'Projects',
      path: '/projects',
      submenu: [
        { name: 'All Projects', path: '/projects' },
        { name: 'Water & Sanitation', path: '/projects/water' },
        { name: 'Education', path: '/projects/education' },
        { name: 'Healthcare', path: '/projects/healthcare' },
        { name: 'Emergency Relief', path: '/projects/emergency' }
      ]
    },
    {
      name: 'Countries',
      path: '/countries',
      submenu: [
        { name: 'Palestine', path: '/countries/palestine' },
        { name: 'Sudan', path: '/countries/sudan' },
        { name: 'Somalia', path: '/countries/somalia' },
        { name: 'Afghanistan', path: '/countries/afghanistan' },
        { name: 'Syria', path: '/countries/syria' },
        { name: 'Lebanon', path: '/countries/lebanon' },
        { name: 'Pakistan', path: '/countries/pakistan' },
        { name: 'Bangladesh', path: '/countries/bangladesh' },
        { name: 'India', path: '/countries/india' },
        { name: 'Africa', path: '/countries/africa' }
      ]
    },
    {
      name: 'Donate',
      path: '/donate',
      submenu: [
        { name: 'One-time Donation', path: '/donate' },
        { name: 'Monthly Giving', path: '/donate/monthly' },
        { name: 'Zakat', path: '/donate/zakat' },
        { name: 'Sadaqah', path: '/donate/sadaqah' },
        { name: 'Emergency Appeals', path: '/donate/emergency' }
      ]
    },
    {
      name: 'Get Involved',
      path: '/get-involved',
      submenu: [
        { name: 'Volunteer', path: '/get-involved/volunteer' },
        { name: 'Fundraise', path: '/get-involved/fundraise' },
        { name: 'Partner With Us', path: '/get-involved/partner' },
        { name: 'Careers', path: '/get-involved/careers' }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      submenu: null
    },
    {
      name: 'Donor Portal',
      path: '/donor-portal',
      submenu: null
    }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 mr-3 rounded-full bg-primary-600 flex items-center justify-center">
            <FaHeart className="text-white text-xl" />
          </div>
          <span className="text-2xl font-bold text-primary-600 arabic-title">Our Ancestors Foundation</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group" onMouseLeave={closeSubmenu}>
              {item.submenu ? (
                <>
                  <button 
                    className={`flex items-center text-gray-700 hover:text-primary-600 ${activeSubmenu === item.name ? 'text-primary-600 font-medium' : ''}`}
                    onClick={() => toggleSubmenu(item.name)}
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                  >
                    {item.name}
                    <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {activeSubmenu === item.name && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                            onClick={closeSubmenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <NavLink 
                  to={item.path} 
                  className={({isActive}) => isActive ? "text-primary-600 font-medium" : "text-gray-700 hover:text-primary-600"}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 hover:text-primary-600" />
            {cartItems && cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col px-4 py-2">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.submenu ? (
                    <div>
                      <button 
                        className={`flex items-center justify-between w-full text-left ${activeSubmenu === item.name ? 'text-primary-600 font-medium' : 'text-gray-700'}`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary-100">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink 
                      to={item.path} 
                      className={({isActive}) => isActive ? "text-primary-600 font-medium" : "text-gray-700"}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <Link 
                to="/cart" 
                className="py-2 text-gray-700 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingCart className="mr-2" />
                Cart {cartItems && cartItems.length > 0 && <span className="ml-1">({cartItems.length})</span>}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
