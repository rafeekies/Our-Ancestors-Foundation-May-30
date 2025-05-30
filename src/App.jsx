import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import DonationCart from './pages/DonationCart';
import DonationConfirmation from './pages/DonationConfirmation';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import DonorPortal from './pages/DonorPortal';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// About sub-pages
import OurStory from './pages/about/OurStory';
import OurTeam from './pages/about/OurTeam';
import OurImpact from './pages/about/OurImpact';
import FinancialReports from './pages/about/FinancialReports';

// Project category pages
import WaterProjects from './pages/projects/WaterProjects';
import EducationProjects from './pages/projects/EducationProjects';
import HealthcareProjects from './pages/projects/HealthcareProjects';
import EmergencyProjects from './pages/projects/EmergencyProjects';

// Country pages
import Palestine from './pages/countries/Palestine';
import Sudan from './pages/countries/Sudan';
import Somalia from './pages/countries/Somalia';
import Afghanistan from './pages/countries/Afghanistan';
import Syria from './pages/countries/Syria';
import Lebanon from './pages/countries/Lebanon';
import Pakistan from './pages/countries/Pakistan';
import Bangladesh from './pages/countries/Bangladesh';
import India from './pages/countries/India';
import Africa from './pages/countries/Africa';

// Donation pages
import MonthlyDonation from './pages/donate/MonthlyDonation';
import ZakatDonation from './pages/donate/ZakatDonation';
import SadaqahDonation from './pages/donate/SadaqahDonation';
import EmergencyDonation from './pages/donate/EmergencyDonation';

// Get Involved pages
import Volunteer from './pages/get-involved/Volunteer';
import Fundraise from './pages/get-involved/Fundraise';
import Partner from './pages/get-involved/Partner';
import Careers from './pages/get-involved/Careers';

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/our-impact" element={<OurImpact />} />
          <Route path="/about/financial-reports" element={<FinancialReports />} />
          
          {/* Projects Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects/water" element={<WaterProjects />} />
          <Route path="/projects/education" element={<EducationProjects />} />
          <Route path="/projects/healthcare" element={<HealthcareProjects />} />
          <Route path="/projects/emergency" element={<EmergencyProjects />} />
          
          {/* Country Routes */}
          <Route path="/countries/palestine" element={<Palestine />} />
          <Route path="/countries/sudan" element={<Sudan />} />
          <Route path="/countries/somalia" element={<Somalia />} />
          <Route path="/countries/afghanistan" element={<Afghanistan />} />
          <Route path="/countries/syria" element={<Syria />} />
          <Route path="/countries/lebanon" element={<Lebanon />} />
          <Route path="/countries/pakistan" element={<Pakistan />} />
          <Route path="/countries/bangladesh" element={<Bangladesh />} />
          <Route path="/countries/india" element={<India />} />
          <Route path="/countries/africa" element={<Africa />} />
          
          {/* Donation Routes */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/monthly" element={<MonthlyDonation />} />
          <Route path="/donate/zakat" element={<ZakatDonation />} />
          <Route path="/donate/sadaqah" element={<SadaqahDonation />} />
          <Route path="/donate/emergency" element={<EmergencyDonation />} />
          
          {/* Get Involved Routes */}
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/fundraise" element={<Fundraise />} />
          <Route path="/get-involved/partner" element={<Partner />} />
          <Route path="/get-involved/careers" element={<Careers />} />
          
          {/* Other Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<DonationCart />} />
          <Route path="/checkout" element={<DonationConfirmation />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/donor-portal" element={<DonorPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
