import Link from 'next/link';
import { FileText, ArrowRight, CheckCircle2, ShieldCheck, Target, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Taxation Services | Ace Biz',
  description: 'Strategic tax optimization and compliance services. Maximize returns and minimize tax liabilities with expert tax planning in Sydney.',
};

export default function TaxationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <FileText className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Taxation Services</h1>
            </div>
            <p className="text-xl text-red-100 mb-8">
              Strategic tax optimization and compliance to maximize returns and minimize liabilities while ensuring full regulatory compliance.
            </p>
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
            >
              Optimize Your Tax Strategy
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
                Expert Tax Planning & Compliance
              </h2>
              <p className="text-gray-600 mb-6">
                Tax planning is one of the most important aspects of financial management. Our taxation services help
                you navigate complex tax regulations while identifying legitimate opportunities to minimize your tax burden
                and maximize your after-tax income.
              </p>
              <p className="text-gray-600 mb-6">
                We provide comprehensive tax services for individuals, businesses, trusts, and self-managed super funds.
                Our proactive approach ensures you are always prepared for tax obligations while taking advantage of all
                available deductions, offsets, and concessions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax Services</h3>
              <ul className="space-y-4">
                {[
                  'Individual tax returns',
                  'Business tax planning and returns',
                  'Corporate tax compliance',
                  'Trust and partnership returns',
                  'Capital gains tax planning',
                  'GST and BAS lodgment',
                  'Tax dispute resolution',
                  'ATO audit support'
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
            Comprehensive Tax Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Target className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600">
                Proactive tax planning strategies that minimize your tax liabilities while ensuring full
                compliance with all tax laws and regulations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <DollarSign className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maximize Returns</h3>
              <p className="text-gray-600">
                Identify and claim all eligible deductions, offsets, and concessions to ensure you pay
                no more tax than necessary.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <ShieldCheck className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Compliance</h3>
              <p className="text-gray-600">
                Stay fully compliant with ATO requirements through accurate preparation and timely
                lodgment of all tax obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your Tax Position?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Contact our tax experts today to discuss how we can help you minimize tax and maximize your financial outcomes.
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
          >
            Schedule a Tax Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
