import Link from 'next/link';
import { Calculator, ArrowRight, CheckCircle2, FileCheck, Briefcase, PieChart } from 'lucide-react';

export const metadata = {
  title: 'Accounting Services | Ace Biz',
  description: 'Expert accounting services and tax strategies tailored to your business needs. Comprehensive financial management in Sydney.',
};

export default function AccountingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <Calculator className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Accounting Services</h1>
            </div>
            <p className="text-xl text-primary-100 mb-8">
              Comprehensive accounting services and tax strategies tailored to your business needs, delivered by experienced professionals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center"
            >
              Get Professional Accounting
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
                Professional Accounting Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our accounting services provide comprehensive financial management solutions that keep your business
                compliant, organized, and financially healthy. We handle everything from day-to-day bookkeeping to
                complex financial reporting and strategic tax planning.
              </p>
              <p className="text-gray-600 mb-6">
                With our expert accounting team, you gain peace of mind knowing your finances are in capable hands.
                We use the latest accounting software and best practices to ensure accuracy, efficiency, and full
                compliance with all regulatory requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
              <ul className="space-y-4">
                {[
                  'Monthly and annual financial statements',
                  'General ledger management',
                  'Accounts payable and receivable',
                  'Bank reconciliation',
                  'Financial reporting and analysis',
                  'Budget preparation and monitoring',
                  'Cash flow management',
                  'Year-end accounts preparation'
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
            Complete Accounting Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <FileCheck className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Reporting</h3>
              <p className="text-gray-600">
                Stay compliant with all regulatory requirements through accurate, timely financial reporting
                and comprehensive documentation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Briefcase className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Accounting</h3>
              <p className="text-gray-600">
                Full-service accounting for businesses of all sizes, from startups to established enterprises,
                tailored to your specific industry needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <PieChart className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Analysis</h3>
              <p className="text-gray-600">
                In-depth financial analysis and insights to help you understand your business performance
                and make informed strategic decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Expert Accounting Support Today
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let our experienced accountants handle your finances so you can focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
          >
            Request a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
