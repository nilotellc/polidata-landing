export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 79,
      users: '1 user',
      keywords: '25 keywords',
      badge: null,
      description: 'Perfect for solo advocates',
      features: [
        'Federal bill tracking',
        'Legislator directory (535 members)',
        'Contact information (phone, address, website)',
        '"Find Your Rep" tool',
        'Email alerts',
        'Dashboard access',
        '14-day free trial'
      ]
    },
    {
      name: 'Team',
      price: 149,
      users: 'Up to 5 users',
      keywords: '50 keywords',
      badge: 'Most Popular',
      description: 'Ideal for small advocacy teams',
      features: [
        'Everything in Starter',
        'Team management (invite/remove)',
        'Shared keyword tracking',
        'Unlimited bill tracking',
        'Priority email support',
        '14-day free trial'
      ]
    },
    {
      name: 'Pro',
      price: 299,
      users: 'Up to 15 users',
      keywords: '200 keywords',
      badge: null,
      description: 'For larger organizations',
      features: [
        'Everything in Team',
        'Slack integration (coming soon)',
        'State tracking - 1 state (coming soon)',
        'Priority support',
        'Dedicated onboarding',
        '14-day free trial'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            Choose the plan that fits your team
          </p>
          <p className="text-sm text-slate-500">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-2xl shadow-xl border-2 ${
                tier.badge
                  ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-amber-500 scale-105'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <div className="mb-4">
                <h3 className={`text-2xl font-bold ${tier.badge ? 'text-white' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mt-1 ${tier.badge ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${tier.badge ? 'text-white' : 'text-slate-900'}`}>
                    ${tier.price}
                  </span>
                  <span className={`text-lg ${tier.badge ? 'text-slate-400' : 'text-slate-600'}`}>
                    /month
                  </span>
                </div>
                <p className={`text-sm mt-2 font-medium ${tier.badge ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.users} • {tier.keywords}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.badge ? 'text-amber-500' : 'text-amber-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${tier.badge ? 'text-slate-300' : 'text-slate-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  tier.badge
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Join Waitlist
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-amber-600">Early bird special:</span> First 20 customers get{' '}
            <span className="font-semibold">50% off for 6 months</span>
          </p>
          <p className="text-xs text-slate-500">
            Need custom pricing or more users?{' '}
            <a href="mailto:support@getpolidata.com" className="text-amber-600 hover:underline font-medium">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
