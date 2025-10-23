import { FileText, ExternalLink, Download, Users, RefreshCw, Building2, FileSpreadsheet } from 'lucide-react';

export const metadata = {
  title: 'Useful Links & Forms | Ace Biz Resources',
  description: 'Access important tax forms, ATO resources, and regulatory links all in one place.',
};

export default function FormsPage() {
  const aceBizForms = [
    {
      name: 'Employee Onboarding',
      url: 'https://forms.office.com/r/hc7RYYJmtP',
      description: 'Complete employee onboarding forms and documentation',
      icon: Users,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      name: 'Send Rollovers Form',
      url: 'https://zfrmz.com.au/GTrVYFEfB46t2lHVQUcg',
      description: 'Submit superannuation rollover requests',
      icon: RefreshCw,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      name: 'Company Formation',
      url: 'https://zfrmz.com.au/0njNqy3D3lnF5dv8rwNX',
      description: 'Apply for new company registration and setup',
      icon: Building2,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      name: 'ITR 2025 Questionnaire',
      url: 'https://zfrmz.com.au/cVIgh69CtpSKXAEXnWlW',
      description: 'Income tax return questionnaire for 2025',
      icon: FileSpreadsheet,
      color: 'bg-primary-100 text-primary-600'
    },
  ];

  const essentialLinks = [
    { name: 'ATO Online Services', url: 'https://www.ato.gov.au/online-services', description: 'Access all ATO online services', icon: '🏛️' },
    { name: 'myGov', url: 'https://my.gov.au', description: 'Government services portal', icon: '🔐' },
    { name: 'Business.gov.au', url: 'https://business.gov.au', description: 'Business information and registration', icon: '🏢' },
    { name: 'ABN Lookup', url: 'https://abr.business.gov.au', description: 'Search and verify ABN/ACN', icon: '🔍' },
    { name: 'ASIC Connect', url: 'https://connectonline.asic.gov.au', description: 'Company registration and filings', icon: '📋' },
    { name: 'Super Fund Lookup', url: 'https://superfundlookup.gov.au', description: 'Find and verify super funds', icon: '💰' },
  ];

  const links = [
    {
      category: 'Australian Taxation Office (ATO)',
      items: [
        { name: 'ATO Portal', url: 'https://www.ato.gov.au', description: 'Official ATO website' },
        { name: 'myGov', url: 'https://my.gov.au', description: 'Access government services online' },
        { name: 'Business Portal', url: 'https://bp.ato.gov.au', description: 'Manage your business tax obligations' },
        { name: 'Tax File Number', url: 'https://www.ato.gov.au/individuals/tax-file-number', description: 'Apply for or update TFN' }
      ]
    },
    {
      category: 'ASIC & Business Registration',
      items: [
        { name: 'ASIC Portal', url: 'https://www.asic.gov.au', description: 'Australian Securities and Investments Commission' },
        { name: 'ABN Lookup', url: 'https://abr.business.gov.au', description: 'Search and verify ABNs' },
        { name: 'Business Registration', url: 'https://www.business.gov.au', description: 'Register your business' }
      ]
    },
    {
      category: 'Superannuation',
      items: [
        { name: 'Super Fund Lookup', url: 'https://superfundlookup.gov.au', description: 'Find superannuation funds' },
        { name: 'ATO Super', url: 'https://www.ato.gov.au/super', description: 'Superannuation information and resources' },
        { name: 'SMSF Association', url: 'https://www.smsfassociation.com', description: 'SMSF resources and support' }
      ]
    },
    {
      category: 'Accounting Software',
      items: [
        { name: 'Xero', url: 'https://www.xero.com/au', description: 'Cloud accounting software' },
        { name: 'QuickBooks', url: 'https://quickbooks.intuit.com/au', description: 'Accounting and bookkeeping software' },
        { name: 'MYOB', url: 'https://www.myob.com/au', description: 'Business management solutions' }
      ]
    }
  ];

  const commonForms = [
    { name: 'Tax File Number Declaration', code: 'NAT 3092' },
    { name: 'Superannuation Standard Choice Form', code: 'NAT 13080' },
    { name: 'Application for ABN', code: 'NAT 2938' },
    { name: 'GST Registration', code: 'NAT 2954' },
    { name: 'PAYG Withholding Registration', code: 'NAT 3377' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <FileText className="h-12 w-12 mr-4" />
            <h1 className="text-5xl font-bold">Useful Links & Forms</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Quick access to important government portals, regulatory bodies, and essential business forms.
          </p>
        </div>
      </section>

      {/* Ace Biz Forms Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 border-t-4 border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              OUR FORMS
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Ace Biz Forms & Services</h2>
            <p className="text-center text-gray-700 text-xl max-w-3xl mx-auto">Access our specialized forms and services - complete them online in minutes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aceBizForms.map((form, index) => (
              <a
                key={index}
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-400 group text-center"
              >
                <div className={`${form.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <form.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {form.name}
                </h3>
                <p className="text-sm text-gray-600">{form.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Links Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Essential Links</h2>
          <p className="text-center text-gray-600 mb-8">Most frequently used portals and resources</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-500 group"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{link.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors flex items-center justify-between">
                      {link.name}
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </h3>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Links Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Additional Resources</h2>
          <p className="text-center text-gray-600 mb-12">More helpful links organized by category</p>
          <div className="space-y-12">
            {links.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-gray-600">{link.description}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors ml-4 flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Forms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Commonly Used Forms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonForms.map((form, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  <Download className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{form.name}</h3>
                    <p className="text-sm text-gray-600">{form.code}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Visit the{' '}
              <a href="https://www.ato.gov.au/forms" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">
                ATO Forms page
              </a>
              {' '}to download these and other forms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help with Forms or Applications?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can assist you with completing and lodging all necessary forms and registrations.
          </p>
          <a
            href="/contact"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
