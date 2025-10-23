'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Ace Biz Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About Us
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/advisory" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Advisory
                </Link>
                <Link href="/services/analytics" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Analytics & Automations
                </Link>
                <Link href="/services/accounting" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Accounting
                </Link>
                <Link href="/services/taxation" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Taxation
                </Link>
                <Link href="/services/bookkeeping" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Bookkeeping & Payroll
                </Link>
                <Link href="/services/smsf" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  SMSF
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/resources/due-dates" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Due Dates
                </Link>
                <Link href="/resources/forms" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Links & Forms
                </Link>
                <Link href="/resources/thresholds" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Thresholds
                </Link>
                <Link href="/resources/blog" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                  Blog
                </Link>
              </div>
            </div>

            <Link href="/contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-600">
              About Us
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/services/advisory" className="block py-2 text-gray-600 hover:text-primary-600">
                    Advisory
                  </Link>
                  <Link href="/services/analytics" className="block py-2 text-gray-600 hover:text-primary-600">
                    Analytics & Automations
                  </Link>
                  <Link href="/services/accounting" className="block py-2 text-gray-600 hover:text-primary-600">
                    Accounting
                  </Link>
                  <Link href="/services/taxation" className="block py-2 text-gray-600 hover:text-primary-600">
                    Taxation
                  </Link>
                  <Link href="/services/bookkeeping" className="block py-2 text-gray-600 hover:text-primary-600">
                    Bookkeeping & Payroll
                  </Link>
                  <Link href="/services/smsf" className="block py-2 text-gray-600 hover:text-primary-600">
                    SMSF
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/resources/due-dates" className="block py-2 text-gray-600 hover:text-primary-600">
                    Due Dates
                  </Link>
                  <Link href="/resources/forms" className="block py-2 text-gray-600 hover:text-primary-600">
                    Links & Forms
                  </Link>
                  <Link href="/resources/thresholds" className="block py-2 text-gray-600 hover:text-primary-600">
                    Thresholds
                  </Link>
                  <Link href="/resources/blog" className="block py-2 text-gray-600 hover:text-primary-600">
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block mt-4 bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
