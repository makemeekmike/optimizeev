import React from 'react';
import { Link } from 'react-router-dom';
import {
  Battery,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'News & Media', href: '/news-media' }
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {/* Brand and Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">OptimizeEV</span>
            </div>
            <p className="text-secondary-300 mb-6">
              AI-powered EV charging station management platform ensuring 97% uptime and optimal performance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <a href="mailto:contact@optimizeev.com" className="text-secondary-300 hover:text-white">
                bmcgee@optimizeev.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <a href="tel:+1-555-123-4567" className="text-secondary-300 hover:text-white">
                  +1 (248) 331-6041
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-secondary-300">
                220 West Congress Street, Detroit, MI 48226
                </span>
              </div>
            </div>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {/* <a href="#" className="text-secondary-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a> */}
              <a href="https://www.instagram.com/optimizeev/" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/optimizeevdetroit" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <p className="text-secondary-300">
                &copy; {new Date().getFullYear()} OptimizeEV. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2 md:mt-0">
                {/* Legal links could be uncommented if needed */}
                {/* {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-secondary-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;