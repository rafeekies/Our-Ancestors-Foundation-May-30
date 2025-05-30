import React from 'react';
import { Link } from 'react-router-dom';

const FinancialReports = () => {
  const reports = [
    {
      id: 1,
      year: 2023,
      title: "Annual Financial Report 2023",
      description: "Comprehensive overview of our financial activities, donations received, and funds allocated to various projects.",
      downloadLink: "#",
      size: "2.4 MB"
    },
    {
      id: 2,
      year: 2022,
      title: "Annual Financial Report 2022",
      description: "Detailed breakdown of donations and expenditures across all our humanitarian projects and operational costs.",
      downloadLink: "#",
      size: "2.1 MB"
    },
    {
      id: 3,
      year: 2021,
      title: "Annual Financial Report 2021",
      description: "Complete financial statement including emergency response funding and long-term development projects.",
      downloadLink: "#",
      size: "1.9 MB"
    },
    {
      id: 4,
      year: 2020,
      title: "Annual Financial Report 2020",
      description: "Financial overview during the global pandemic, highlighting our COVID-19 response efforts.",
      downloadLink: "#",
      size: "1.8 MB"
    },
    {
      id: 5,
      title: "Audit Report 2023",
      description: "Independent audit confirming our financial transparency and adherence to international accounting standards.",
      downloadLink: "#",
      size: "1.2 MB"
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Financial Reports & Transparency
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We are committed to complete transparency in how we use your donations to create lasting change.
          </p>
        </div>

        {/* Transparency commitment */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-16">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Transparency</h2>
            <p className="text-gray-600 mb-4">
              We believe that donors have the right to know exactly how their contributions are being used. 
              That's why we publish detailed financial reports and undergo regular independent audits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 text-lg mb-2">92%</h3>
                <p className="text-green-700">of donations go directly to our humanitarian projects</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 text-lg mb-2">5%</h3>
                <p className="text-blue-700">allocated to administrative costs</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 text-lg mb-2">3%</h3>
                <p className="text-purple-700">used for fundraising activities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reports list */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md mb-16">
          <ul className="divide-y divide-gray-200">
            {reports.map((report) => (
              <li key={report.id}>
                <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{report.description}</p>
                    <p className="mt-2 text-xs text-gray-400">File size: {report.size}</p>
                  </div>
                  <div className="ml-4">
                    <a
                      href={report.downloadLink}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-2xl">Logo</span>
              </div>
              <h3 className="font-medium text-gray-900">Charity Navigator</h3>
              <p className="text-sm text-gray-500 text-center mt-1">4-Star Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-2xl">Logo</span>
              </div>
              <h3 className="font-medium text-gray-900">GuideStar</h3>
              <p className="text-sm text-gray-500 text-center mt-1">Platinum Transparency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-2xl">Logo</span>
              </div>
              <h3 className="font-medium text-gray-900">BBB Wise Giving</h3>
              <p className="text-sm text-gray-500 text-center mt-1">Accredited Charity</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-2xl">Logo</span>
              </div>
              <h3 className="font-medium text-gray-900">ECFA</h3>
              <p className="text-sm text-gray-500 text-center mt-1">Member Organization</p>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">How are my donations used?</h3>
              <p className="mt-2 text-gray-600">
                92% of all donations go directly to our humanitarian projects. The remaining 8% is split between administrative costs (5%) and fundraising activities (3%) to ensure we can continue our mission effectively.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Are my donations tax-deductible?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we are a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your records.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">How often are financial reports published?</h3>
              <p className="mt-2 text-gray-600">
                We publish comprehensive annual financial reports and undergo independent audits yearly. Quarterly updates are also provided to our regular donors through our newsletter.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Can I request specific financial information?</h3>
              <p className="mt-2 text-gray-600">
                Absolutely. We believe in full transparency. If you have specific questions about our finances or would like additional information not covered in our published reports, please <Link to="/contact" className="text-emerald-600 hover:text-emerald-500">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReports;
