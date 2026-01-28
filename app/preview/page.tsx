import Link from 'next/link';
import Image from 'next/image';

export default function PreviewOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore PoliData
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            See what you'll get when we launch. Browse mockups of the dashboard, email alerts, and legislator directory.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-semibold text-lg"
            >
              Join Waitlist
            </Link>
            <Link
              href="/"
              className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold text-lg"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Launching February 2026 • 50% off for early adopters
          </p>
        </div>
      </section>

      {/* Preview cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Three Core Features
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Click any feature below to see a detailed mockup of what your team will get.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dashboard preview card */}
            <Link
              href="/preview/dashboard"
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 h-48 flex items-center justify-center">
                <div className="text-white">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition">
                  Bill Tracking Dashboard
                </h3>
                <p className="text-slate-600 mb-4">
                  Search, filter, and browse federal legislation. Track unlimited bills with your team.
                </p>
                <div className="flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all">
                  <span>See Full Preview</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Email preview card */}
            <Link
              href="/preview/email"
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                <div className="text-white">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  Daily Email Alerts
                </h3>
                <p className="text-slate-600 mb-4">
                  Get a clean daily digest of bills matching your keywords. Never miss relevant legislation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  <span>See Full Preview</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Legislator preview card */}
            <Link
              href="/preview/legislators"
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 h-48 flex items-center justify-center">
                <div className="text-white">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition">
                  Legislator Directory
                </h3>
                <p className="text-slate-600 mb-4">
                  Contact info for all 535 members of Congress. Find your representatives by ZIP code.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                  <span>See Full Preview</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why PoliData section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Why Teams Choose PoliData
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-slate-600">
                  $79-299/month (not $20k/year like Quorum). Built for small teams with real budgets.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Team Collaboration
                </h3>
                <p className="text-slate-600">
                  Share tracking lists with 1-15 users. No more forwarding emails or shared logins.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Fast & Modern
                </h3>
                <p className="text-slate-600">
                  Clean UI, instant search, no ads. Built for daily use by busy policy teams.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Email & Chat Support
                </h3>
                <p className="text-slate-600">
                  Real support from real people. Not a community forum or chatbot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Choose the plan that fits your team size. All plans include full access to dashboard, email alerts, and legislator directory.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Starter */}
            <div className="bg-white rounded-lg border-2 border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">
                $79<span className="text-lg font-normal text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">Perfect for solo advocates</p>
              <ul className="text-sm text-slate-600 space-y-2 text-left">
                <li>✓ 1 user</li>
                <li>✓ 25 keywords</li>
                <li>✓ Unlimited bill tracking</li>
                <li>✓ Daily email alerts</li>
                <li>✓ Legislator directory</li>
              </ul>
            </div>

            {/* Team (popular) */}
            <div className="bg-white rounded-lg border-2 border-amber-500 p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Team</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">
                $149<span className="text-lg font-normal text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">Ideal for small teams</p>
              <ul className="text-sm text-slate-600 space-y-2 text-left">
                <li>✓ Up to 5 users</li>
                <li>✓ 50 keywords</li>
                <li>✓ Unlimited bill tracking</li>
                <li>✓ Daily email alerts</li>
                <li>✓ Legislator directory</li>
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-lg border-2 border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">
                $299<span className="text-lg font-normal text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">For larger organizations</p>
              <ul className="text-sm text-slate-600 space-y-2 text-left">
                <li>✓ Up to 15 users</li>
                <li>✓ 200 keywords</li>
                <li>✓ Unlimited bill tracking</li>
                <li>✓ Daily email alerts</li>
                <li>✓ Legislator directory</li>
              </ul>
            </div>
          </div>
          <Link
            href="/#pricing"
            className="inline-block text-amber-600 font-semibold hover:text-amber-700 transition"
          >
            See Full Pricing Details →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Try PoliData?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join the waitlist to get early access when we launch in February 2026.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 transition font-semibold text-lg shadow-lg"
          >
            Join Waitlist
          </Link>
          <p className="text-amber-100 text-sm mt-6">
            Early adopters get 50% off for 6 months • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
