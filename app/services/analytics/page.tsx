import Link from 'next/link';
import { BarChart3, ArrowRight, CheckCircle2, Cpu, Database, LineChart } from 'lucide-react';

export const metadata = {
  title: 'Analytics & Automation Services | Ace Biz',
  description: 'Transform your data into strategic intelligence with cutting-edge analytics and automation solutions. Data-driven insights for better business decisions.',
};

export default function AnalyticsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Analytics & Automations</h1>
            </div>
            <p className="text-xl text-purple-100 mb-8">
              Transform your data into strategic intelligence with cutting-edge analytics and automation solutions that drive growth and efficiency.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              Unlock Your Data Potential
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
                Data-Driven Business Intelligence
              </h2>
              <p className="text-gray-600 mb-6">
                In today&apos;s data-rich environment, the ability to extract meaningful insights from your financial and
                operational data is crucial for competitive advantage. Our analytics and automation services help you
                harness the power of your data to make informed strategic decisions.
              </p>
              <p className="text-gray-600 mb-6">
                We implement advanced analytics tools and automated workflows that save time, reduce errors, and provide
                real-time visibility into your business performance. From financial dashboards to predictive analytics,
                we transform raw data into actionable intelligence.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h3>
              <ul className="space-y-4">
                {[
                  'Custom financial dashboards and reporting',
                  'Automated data collection and processing',
                  'Predictive analytics and forecasting',
                  'Business intelligence implementation',
                  'Process automation and workflow optimization',
                  'Real-time performance monitoring',
                  'Data visualization and insights',
                  'Integration with existing systems'
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
            Transform Your Business with Data
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <LineChart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Gain deep insights into your business performance with sophisticated analytics tools that reveal
                trends, patterns, and opportunities for optimization.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Cpu className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Automation</h3>
              <p className="text-gray-600">
                Streamline your operations with automated workflows that eliminate manual tasks, reduce errors,
                and free up your team for strategic work.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Database className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Integration</h3>
              <p className="text-gray-600">
                Connect all your data sources into a unified platform for comprehensive visibility and
                seamless reporting across your entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Harness the Power of Your Data?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let us help you build intelligent analytics and automation solutions that drive your business forward.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
