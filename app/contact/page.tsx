'use client';

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Get in touch with our expert team. We are here to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">204/11 Solent Circuit</p>
                    <p className="text-gray-600">Norwest NSW 2153</p>
                    <p className="text-gray-600">Australia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:0296866333" className="text-primary-600 hover:text-primary-700 text-lg">
                      02 9686 6333
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:admin@acebiz.com.au" className="text-primary-600 hover:text-primary-700 text-lg">
                      admin@acebiz.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-600">Map Location: Norwest NSW 2153</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 bg-primary-50 border border-primary-200 text-primary-800 px-4 py-3 rounded-lg">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="04XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="advisory">Advisory</option>
                      <option value="analytics">Analytics & Automations</option>
                      <option value="accounting">Accounting</option>
                      <option value="taxation">Taxation</option>
                      <option value="bookkeeping">Bookkeeping & Payroll</option>
                      <option value="smsf">SMSF</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
