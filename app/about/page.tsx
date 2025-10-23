import Link from 'next/link';
import { ArrowRight, Target, Users, Award, Heart, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Ace Biz - Leading Sydney Accounting Firm',
  description: 'Learn about Ace Biz, a leading accounting firm in Sydney providing expert financial services to businesses across Australia since establishment.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, delivering exceptional service and accurate results.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparent, honest, and ethical practices in all our client relationships.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside you as true partners, invested in your success and long-term growth.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace technology and modern solutions to deliver efficient, cutting-edge accounting services.'
    }
  ];

  const whyChooseUs = [
    'Experienced team of qualified accountants and advisors',
    'Personalized service tailored to your unique needs',
    'Proactive approach to tax planning and compliance',
    'Latest accounting technology and automation tools',
    'Strong relationships with Xero, QuickBooks, and leading platforms',
    'Commitment to ongoing education and industry best practices',
    '4.8/5 client satisfaction rating',
    'Trusted by businesses across Sydney and Australia'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Ace Biz</h1>
            <p className="text-xl text-primary-100 mb-8">
              Your trusted partner in financial success. We are a leading accounting firm in Sydney,
              dedicated to helping businesses and individuals achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Ace Biz was founded with a simple yet powerful vision: to transform the way businesses manage
                their finances. We saw too many businesses struggling with outdated accounting practices,
                complex tax regulations, and a lack of strategic financial guidance.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we serve a diverse range of clients across Australia, from startups and small businesses
                to established enterprises and high-net-worth individuals. Our team of experienced professionals
                brings together expertise in accounting, taxation, business advisory, and technology to deliver
                comprehensive financial solutions.
              </p>
              <p className="text-gray-600">
                Located in Norwest, Sydney, we combine local knowledge with national expertise, leveraging the
                latest technology to provide efficient, accurate, and strategic financial services that drive
                real business outcomes.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-12">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                  <p className="text-gray-700">Happy Clients</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary-600 mb-2">4.8/5</div>
                  <p className="text-gray-700">Client Satisfaction Rating</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
                  <p className="text-gray-700">Compliance Record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-lg flex items-center justify-center">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Ace Biz?</h2>
              <p className="text-gray-600 mb-8">
                When you partner with Ace Biz, you gain more than just an accounting firm - you gain
                a dedicated team committed to your financial success. Here&apos;s what sets us apart:
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0 text-primary-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-accent-600 text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-primary-100 mb-8">
                To empower businesses and individuals with expert financial guidance, innovative solutions,
                and personalized service that drives sustainable growth and success.
              </p>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-primary-100">
                To be the most trusted and innovative accounting firm in Australia, known for transforming
                financial complexity into strategic opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Ace Biz?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Experience the difference of working with a dedicated team that truly cares about your success.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
