import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Important Due Dates | Ace Biz Resources',
  description: 'Key tax and compliance due dates for Australian businesses. Stay on top of your obligations with our comprehensive calendar.',
};

export default function DueDatesPage() {
  const dueDates = [
    {
      period: 'Monthly',
      items: [
        { date: '21st of each month', task: 'BAS lodgment (monthly reporters)', category: 'tax' },
        { date: 'Last day of month', task: 'Superannuation guarantee payments', category: 'super' }
      ]
    },
    {
      period: 'Quarterly',
      items: [
        { date: '28 October', task: 'Q1 BAS lodgment (Jul-Sep)', category: 'tax' },
        { date: '28 February', task: 'Q2 BAS lodgment (Oct-Dec)', category: 'tax' },
        { date: '28 April', task: 'Q3 BAS lodgment (Jan-Mar)', category: 'tax' },
        { date: '28 July', task: 'Q4 BAS lodgment (Apr-Jun)', category: 'tax' }
      ]
    },
    {
      period: 'Annual',
      items: [
        { date: '31 October', task: 'Individual tax returns (self-lodgers)', category: 'tax' },
        { date: '15 May', task: 'Lodge tax returns (via registered agent)', category: 'tax' },
        { date: '31 October', task: 'SMSF annual returns', category: 'super' },
        { date: '28 February', task: 'Company annual returns (ASIC)', category: 'compliance' }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tax':
        return 'bg-red-100 text-red-800';
      case 'super':
        return 'bg-blue-100 text-blue-800';
      case 'compliance':
        return 'bg-primary-100 text-primary-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Calendar className="h-12 w-12 mr-4" />
            <h1 className="text-5xl font-bold">Important Due Dates</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Stay compliant with key tax and regulatory deadlines. Mark these important dates in your calendar.
          </p>
        </div>
      </section>

      {/* Alert */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Important Notice</h3>
              <p className="text-gray-700">
                These dates are general guidelines. Your specific due dates may vary based on your circumstances.
                Contact us for personalized compliance advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Due Dates Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {dueDates.map((period, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{period.period} Obligations</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {period.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-600">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                          <span className="font-semibold text-gray-900">{item.date}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-700 ml-7">{item.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Never Miss a Deadline
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us manage your compliance calendar. Contact us to stay on top of all your obligations.
          </p>
          <a
            href="/contact"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Get Compliance Support
          </a>
        </div>
      </section>
    </div>
  );
}
