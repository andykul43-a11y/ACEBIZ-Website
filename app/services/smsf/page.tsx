import Link from 'next/link';
import { PiggyBank, ArrowRight, CheckCircle2, TrendingUp, Shield, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'SMSF Services | Ace Biz',
  description: 'Expert Self-Managed Super Fund guidance for retirement planning and investment management in Sydney. Maximize your retirement savings.',
};

export default function SMSFPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <PiggyBank className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Self-Managed Super Fund</h1>
            </div>
            <p className="text-xl text-indigo-100 mb-8">
              Expert SMSF guidance for retirement planning and investment management to help you build a secure financial future.
            </p>
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              Start Your SMSF Journey
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
                Take Control of Your Retirement
              </h2>
              <p className="text-gray-600 mb-6">
                A Self-Managed Super Fund (SMSF) gives you greater control over your retirement savings and investment
                decisions. With an SMSF, you can choose how and where to invest your super, potentially accessing a wider
                range of investment options than traditional super funds.
              </p>
              <p className="text-gray-600 mb-6">
                Our SMSF specialists provide comprehensive guidance on setup, compliance, investment strategies, and
                ongoing management. We ensure your fund remains compliant with ATO regulations while helping you make
                informed decisions about your retirement investments.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our SMSF Services</h3>
              <ul className="space-y-4">
                {[
                  'SMSF establishment and registration',
                  'Trust deed preparation and updates',
                  'Annual financial statements and audits',
                  'Tax return preparation and lodgment',
                  'Compliance and regulatory guidance',
                  'Investment strategy development',
                  'Pension setup and management',
                  'Wind-up and rollover services'
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
            SMSF Expertise You Can Trust
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Control</h3>
              <p className="text-gray-600">
                Take charge of your retirement investments with expert guidance on building a diversified
                portfolio aligned with your financial goals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Compliance</h3>
              <p className="text-gray-600">
                Stay compliant with all ATO regulations through expert management of reporting requirements,
                audits, and regulatory obligations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Briefcase className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600">
                Develop comprehensive retirement strategies that maximize tax benefits and optimize your
                super fund&apos;s performance over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Super?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Contact our SMSF specialists to discuss whether a self-managed super fund is right for you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
          >
            Book an SMSF Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
