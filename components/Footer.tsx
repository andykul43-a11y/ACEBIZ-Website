import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Ace Biz Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm mb-4">
              Leading accounting firm in Sydney, delivering expert financial services to help your business thrive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/advisory" className="hover:text-primary-500 transition-colors">
                  Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="hover:text-primary-500 transition-colors">
                  Analytics & Automations
                </Link>
              </li>
              <li>
                <Link href="/services/accounting" className="hover:text-primary-500 transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/services/taxation" className="hover:text-primary-500 transition-colors">
                  Taxation
                </Link>
              </li>
              <li>
                <Link href="/services/bookkeeping" className="hover:text-primary-500 transition-colors">
                  Bookkeeping & Payroll
                </Link>
              </li>
              <li>
                <Link href="/services/smsf" className="hover:text-primary-500 transition-colors">
                  SMSF
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/due-dates" className="hover:text-primary-500 transition-colors">
                  Due Dates
                </Link>
              </li>
              <li>
                <Link href="/resources/forms" className="hover:text-primary-500 transition-colors">
                  Links & Forms
                </Link>
              </li>
              <li>
                <Link href="/resources/thresholds" className="hover:text-primary-500 transition-colors">
                  Thresholds
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-primary-500" />
                <span>204/11 Solent Circuit, Norwest NSW 2153, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-500" />
                <a href="tel:0296866333" className="hover:text-primary-500 transition-colors">
                  02 9686 6333
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-500" />
                <a href="mailto:admin@acebiz.com.au" className="hover:text-primary-500 transition-colors">
                  admin@acebiz.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Ace Biz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
