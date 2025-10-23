import { TrendingUp, DollarSign, Info } from 'lucide-react';

export const metadata = {
  title: 'Tax Thresholds & Rates | Ace Biz Resources',
  description: 'Current Australian tax rates, thresholds, and key financial benchmarks for individuals and businesses.',
};

export default function ThresholdsPage() {
  const individualRates = [
    { income: '$0 - $18,200', rate: '0%', description: 'Tax-free threshold' },
    { income: '$18,201 - $45,000', rate: '19%', description: 'On income over $18,200' },
    { income: '$45,001 - $120,000', rate: '32.5%', description: 'On income over $45,000' },
    { income: '$120,001 - $180,000', rate: '37%', description: 'On income over $120,000' },
    { income: '$180,001+', rate: '45%', description: 'On income over $180,000' }
  ];

  const businessThresholds = [
    { name: 'GST Registration Threshold', amount: '$75,000', description: 'Turnover threshold for GST registration (general)' },
    { name: 'GST Non-Profit Threshold', amount: '$150,000', description: 'Turnover threshold for GST registration (non-profits)' },
    { name: 'Small Business Entity', amount: '$10 million', description: 'Aggregated annual turnover threshold' },
    { name: 'PAYG Instalments', amount: '$2 million', description: 'Business and investment income threshold' }
  ];

  const superRates = [
    { name: 'Super Guarantee Rate', rate: '11.5%', period: '2024-25' },
    { name: 'Super Guarantee Rate', rate: '12%', period: '2025-26 onwards' },
    { name: 'Concessional Cap', rate: '$30,000', period: 'Annual limit' },
    { name: 'Non-Concessional Cap', rate: '$120,000', period: 'Annual limit' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-12 w-12 mr-4" />
            <h1 className="text-5xl font-bold">Tax Thresholds & Rates</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Current tax rates, thresholds, and key financial benchmarks for Australian taxpayers.
          </p>
        </div>
      </section>

      {/* Info Alert */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Information Current as of 2024-25 Tax Year</h3>
              <p className="text-gray-700">
                These rates and thresholds are subject to change. Always verify with the ATO or consult with our team
                for the most current information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Tax Rates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <DollarSign className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Individual Income Tax Rates</h2>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Taxable Income</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tax Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {individualRates.map((rate, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">{rate.income}</td>
                    <td className="px-6 py-4 text-primary-600 font-bold text-lg">{rate.rate}</td>
                    <td className="px-6 py-4 text-gray-600">{rate.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: These rates do not include the Medicare Levy (2%) or Medicare Levy Surcharge (if applicable).
          </p>
        </div>
      </section>

      {/* Business Thresholds */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Business Thresholds</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {businessThresholds.map((threshold, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{threshold.name}</h3>
                <p className="text-3xl font-bold text-primary-600 mb-2">{threshold.amount}</p>
                <p className="text-gray-600">{threshold.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Superannuation Rates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Superannuation Rates & Caps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {superRates.map((rate, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{rate.name}</h3>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {rate.period}
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary-600">{rate.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Tax */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Tax Rates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Base Rate Entities</h3>
              <p className="text-5xl font-bold text-primary-600 mb-4">25%</p>
              <p className="text-gray-600">
                Companies with aggregated turnover less than $50 million and 80% or less passive income
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Companies</h3>
              <p className="text-5xl font-bold text-primary-600 mb-4">30%</p>
              <p className="text-gray-600">
                All other companies not meeting base rate entity requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Tax Planning Advice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experts can help you understand how these rates and thresholds apply to your specific situation.
          </p>
          <a
            href="/contact"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
