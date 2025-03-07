import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Battery, LogIn, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  if (isDashboard) {
    return null; // Dashboard has its own header in DashboardLayout
  }

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="https://res.cloudinary.com/dork9pzwh/image/upload/v1741345557/optimizeevdetroit_logo_ozpnxb.jpg" 
              alt="OptimizeEV Logo" 
              className="h-8" 
            />
          </Link>
          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/about"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <button
              onClick={() => handleNavigation('solutions')}
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavigation('resources')}
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              Resources
            </button>
            <Link
              to="/contact"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/news-media"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              News & Media
            </Link>
            <Link
              to="/login"
              className="flex items-center text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Sign In
            </Link>
            <Link
              to="/request-demo"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700"
            >
              Request Demo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => handleNavigation('solutions')}
                className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => handleNavigation('resources')}
                className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Resources
              </button>
              <Link
                to="/contact"
                className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/news-media"
                className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Media
              </Link>
              <Link
                to="/login"
                className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/request-demo"
                className="bg-primary-600 text-white block px-3 py-2 text-base font-medium rounded-md hover:bg-primary-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;