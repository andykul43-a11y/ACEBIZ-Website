import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights | Ace Biz Resources',
  description: 'Latest tax news, business insights, and financial tips from our expert team at Ace Biz.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'End of Financial Year Tax Planning Tips for 2025',
      excerpt: 'Maximize your tax deductions and plan ahead with our comprehensive EOFY checklist for businesses and individuals.',
      date: '15 May 2025',
      category: 'Tax Planning',
      readTime: '5 min read'
    },
    {
      title: 'Understanding the Latest Superannuation Changes',
      excerpt: 'The super guarantee rate has increased to 11.5%. Learn what this means for your business and employees.',
      date: '1 May 2025',
      category: 'Superannuation',
      readTime: '4 min read'
    },
    {
      title: 'SMSF Investment Strategies for 2025',
      excerpt: 'Explore effective investment strategies for your self-managed super fund in the current economic climate.',
      date: '20 April 2025',
      category: 'SMSF',
      readTime: '6 min read'
    },
    {
      title: 'Cloud Accounting: Why Your Business Needs to Make the Switch',
      excerpt: 'Discover the benefits of moving to cloud-based accounting software like Xero and QuickBooks.',
      date: '5 April 2025',
      category: 'Technology',
      readTime: '4 min read'
    },
    {
      title: 'Small Business Tax Concessions You Might Be Missing',
      excerpt: 'Are you taking advantage of all available tax concessions? Here are some commonly overlooked deductions.',
      date: '25 March 2025',
      category: 'Small Business',
      readTime: '5 min read'
    },
    {
      title: 'Instant Asset Write-Off: What You Need to Know',
      excerpt: 'Everything you need to know about the instant asset write-off and how it can benefit your business.',
      date: '10 March 2025',
      category: 'Tax Planning',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Tax Planning', 'Superannuation', 'SMSF', 'Technology', 'Small Business'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-12 w-12 mr-4" />
            <h1 className="text-5xl font-bold">Blog & Insights</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Expert insights, tax tips, and business advice from the Ace Biz team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <Link
                      href="#"
                      className="text-primary-600 font-semibold inline-flex items-center hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-primary-600 text-white font-medium">1</button>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 font-medium">2</button>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 font-medium">3</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest tax tips and business insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
