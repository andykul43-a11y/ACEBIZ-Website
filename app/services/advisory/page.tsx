import Link from 'next/link';
import { Users, ArrowRight, CheckCircle2, Building2, Shield, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Business Advisory Services | Ace Biz',
  description: 'Expert advisory services for company setup, trusts, and partnerships. Strategic guidance to build strong business foundations in Sydney.',
};

export default function AdvisoryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <Users className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Advisory Services</h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Expert setup and guidance for companies, trusts, and partnerships to establish strong foundations for your business success.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Get Expert Advice
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
                Strategic Business Advisory
              </h2>
              <p className="text-gray-600 mb-6">
                Starting or restructuring a business requires careful planning and expert guidance. Our advisory services
                provide you with the strategic insights and practical support needed to make informed decisions about your
                business structure and operations.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you are setting up a new company, establishing a trust, forming a partnership, or considering
                structural changes to an existing business, our experienced advisors work closely with you to understand
                your goals and recommend the optimal approach.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'Company structure setup and registration',
                  'Trust establishment and management',
                  'Partnership formation and agreements',
                  'Business restructuring advice',
                  'Succession planning strategies',
                  'Regulatory compliance guidance',
                  'Risk assessment and mitigation',
                  'Strategic business planning'
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
            Our Advisory Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Formation</h3>
              <p className="text-gray-600">
                Complete support for setting up your company structure, from initial planning through registration
                and ongoing compliance requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Management</h3>
              <p className="text-gray-600">
                Expert guidance on establishing and managing trusts for asset protection, tax optimization,
                and estate planning purposes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Strategy</h3>
              <p className="text-gray-600">
                Strategic planning and advice to help your business scale effectively while maintaining
                financial health and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build a Stronger Business Foundation?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our advisory team today to discuss your business needs and explore the best structure for your success.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
