import Link from 'next/link';
import { TrendingUp, ArrowRight, CheckCircle2, Clock, Users as UsersIcon, Zap } from 'lucide-react';

export const metadata = {
  title: 'Bookkeeping & Payroll Services | Ace Biz',
  description: 'Professional bookkeeping and payroll management services in Sydney. Keep your finances organized and your team paid accurately and on time.',
};

export default function BookkeepingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Bookkeeping & Payroll</h1>
            </div>
            <p className="text-xl text-yellow-100 mb-8">
              Keep your finances organized with professional bookkeeping and seamless payroll management services.
            </p>
            <Link
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center"
            >
              Streamline Your Finances
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accurate Bookkeeping & Payroll
              </h2>
              <p className="text-gray-600 mb-6">
                Effective bookkeeping is the foundation of sound financial management. Our professional bookkeeping
                services ensure your financial records are accurate, up-to-date, and compliant with all regulations,
                giving you a clear picture of your business financial health at all times.
              </p>
              <p className="text-gray-600 mb-6">
                Our payroll services take the complexity out of paying your employees. We handle everything from
                calculating wages and superannuation to managing leave entitlements and producing payment summaries,
                ensuring your team is paid accurately and on time, every time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Manage</h3>
              <ul className="space-y-4">
                {[
                  'Daily transaction recording and categorization',
                  'Bank and credit card reconciliation',
                  'Accounts payable and receivable management',
                  'Payroll processing and compliance',
                  'Superannuation calculations and lodgment',
                  'PAYG and withholding tax',
                  'Leave management and tracking',
                  'Employee payment summaries'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0 text-primary-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Bookkeeping & Payroll Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Clock className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time Savings</h3>
              <p className="text-gray-600">
                Free up valuable time to focus on growing your business while we handle the day-to-day
                financial administration and payroll processing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Zap className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accuracy Guaranteed</h3>
              <p className="text-gray-600">
                Our experienced team ensures 100% accuracy in all bookkeeping and payroll calculations,
                eliminating costly errors and compliance issues.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <UsersIcon className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Happy Employees</h3>
              <p className="text-gray-600">
                Ensure your team is always paid correctly and on time, with full compliance with
                all employment and superannuation regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your Bookkeeping & Payroll?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Let us handle the details so you can focus on what matters most - growing your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
