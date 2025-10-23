import Link from 'next/link';
import {
  TrendingUp,
  Calculator,
  FileText,
  BarChart3,
  Users,
  PiggyBank,
  ArrowRight,
  Star,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Users,
      title: 'Advisory',
      description: 'Expert setup and guidance for companies, trusts, and partnerships to establish strong foundations.',
      href: '/services/advisory',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Automations',
      description: 'Transform your data into strategic intelligence with cutting-edge analytics and automation solutions.',
      href: '/services/analytics',
      color: 'bg-accent-100 text-accent-600'
    },
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Comprehensive accounting services and tax strategies tailored to your business needs.',
      href: '/services/accounting',
      color: 'bg-primary-100 text-primary-700'
    },
    {
      icon: FileText,
      title: 'Taxation',
      description: 'Strategic tax optimization and compliance to maximize returns and minimize liabilities.',
      href: '/services/taxation',
      color: 'bg-accent-100 text-accent-700'
    },
    {
      icon: TrendingUp,
      title: 'Bookkeeping & Payroll',
      description: 'Keep your finances organized with professional bookkeeping and seamless payroll management.',
      href: '/services/bookkeeping',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: PiggyBank,
      title: 'Self-Managed Super Fund',
      description: 'Expert SMSF guidance for retirement planning and investment management.',
      href: '/services/smsf',
      color: 'bg-accent-100 text-accent-600'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, Tech Startup',
      content: 'Ace Biz has been instrumental in our growth. Their strategic advice and proactive approach have saved us countless hours and thousands of dollars.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Small Business Owner',
      content: 'Professional, reliable, and always available when we need them. The team at Ace Biz truly understands our business.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Property Investor',
      content: 'Outstanding SMSF management. They make complex tax matters simple and ensure we are always compliant.',
      rating: 5
    },
  ];

  const partners = ['Xero', 'QuickBooks', 'Microsoft', 'Dext', 'Hubdoc', 'Ignition'];

  const benefits = [
    'More Time - Streamline your financial processes',
    'More Savings - Strategic tax planning and optimization',
    'Less Stress - Expert handling of compliance and reporting',
    'Better Growth - Data-driven insights for business decisions'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-accent-500 to-accent-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Imagine Your Business, But Better
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                More Time. More Savings. Less Stress.
              </p>
              <p className="text-lg mb-8 text-primary-50">
                Leading accounting firm in Sydney delivering comprehensive financial services to professionals,
                small businesses, and enterprises across Australia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary-400 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-primary-100">4.8/5 from 50+ happy clients</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose Ace Biz?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0 text-accent-400" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help your business thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across Australia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            Trusted Technology Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-white text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get in touch with our expert team today and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:0296866333"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
            >
              Call 02 9686 6333
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
