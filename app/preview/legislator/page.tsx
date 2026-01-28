import Link from 'next/link';
import Image from 'next/image';

export default function LegislatorDetailPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero section */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Individual Legislator Page
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Click any legislator to see their full profile: contact info, recent bills sponsored, committee memberships, and voting record.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-semibold"
            >
              Join Waitlist
            </Link>
            <Link
              href="/preview"
              className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition font-semibold"
            >
              ← Back to Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Legislator profile mockup */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Example: Senator Nancy Pelosi's Profile
          </h2>
          <p className="text-slate-600 text-center mb-8">
            This is what you see when you click on a legislator
          </p>

          {/* Profile mockup */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="PoliData Logo"
                  width={32}
                  height={32}
                />
                <h2 className="text-lg font-bold">PoliData</h2>
              </div>
              <div className="flex items-center gap-6">
                <nav className="flex gap-4 text-sm">
                  <button className="hover:text-amber-500 transition">Dashboard</button>
                  <button className="text-amber-500 font-semibold">Legislators</button>
                  <button className="hover:text-amber-500 transition">Settings</button>
                </nav>
                <div className="flex items-center gap-2 border-l border-slate-700 pl-4">
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-slate-50 px-6 py-3 text-sm text-slate-600 border-b border-slate-200">
              <Link href="#" className="hover:text-amber-600">Legislators</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-900 font-semibold">Rep. Nancy Pelosi</span>
            </div>

            {/* Main content */}
            <div className="p-6">
              {/* Profile header */}
              <div className="flex gap-6 mb-8 pb-8 border-b border-slate-200">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        Nancy Pelosi
                      </h1>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">Democrat</span>
                        <span className="text-slate-600">California, District 11</span>
                      </div>
                      <div className="text-slate-600 text-sm">
                        U.S. House of Representatives • Former Speaker of the House
                      </div>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition font-semibold text-sm">
                      Track Bills
                    </button>
                  </div>

                  {/* Contact info grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">DC Office</div>
                        <div className="font-semibold text-slate-900">(202) 225-4965</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Office Location</div>
                        <div className="font-semibold text-slate-900 text-sm">233 Cannon HOB</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Website</div>
                        <a href="#" className="font-semibold text-blue-600 hover:underline text-sm">pelosi.house.gov</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">In Office Since</div>
                        <div className="font-semibold text-slate-900">1987 (38 years)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-slate-200 mb-6">
                <div className="flex gap-6">
                  <button className="pb-3 border-b-2 border-amber-600 text-amber-600 font-semibold text-sm">
                    Recent Bills Sponsored
                  </button>
                  <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900 font-semibold text-sm">
                    Committee Memberships
                  </button>
                  <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900 font-semibold text-sm">
                    Recent Votes
                  </button>
                  <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900 font-semibold text-sm">
                    Contact History
                  </button>
                </div>
              </div>

              {/* Recent bills */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Bills Sponsored</h3>

                {/* Bill 1 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">
                        H.R. 1234 - Education Funding Act of 2026
                      </h4>
                      <div className="flex gap-3 text-xs text-slate-600 mb-2">
                        <span>Introduced: Jan 15, 2026</span>
                        <span>•</span>
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">Introduced</span>
                      </div>
                    </div>
                    <button className="text-amber-600 font-semibold text-sm hover:text-amber-700 flex-shrink-0 ml-4">
                      + Track
                    </button>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Appropriates $50 billion for K-12 education funding over 5 years. Includes teacher pay increases, school infrastructure, and special education programs.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View Details</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">Congress.gov</a>
                    <span className="text-slate-400">|</span>
                    <span className="text-slate-600">3 Cosponsors</span>
                  </div>
                </div>

                {/* Bill 2 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">
                        H.R. 987 - Affordable Housing Expansion Act
                      </h4>
                      <div className="flex gap-3 text-xs text-slate-600 mb-2">
                        <span>Introduced: Jan 10, 2026</span>
                        <span>•</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Committee</span>
                      </div>
                    </div>
                    <button className="text-amber-600 font-semibold text-sm hover:text-amber-700 flex-shrink-0 ml-4">
                      + Track
                    </button>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Provides $30 billion in grants for affordable housing construction in major metropolitan areas. Targets 200,000 new units over 3 years.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View Details</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">Congress.gov</a>
                    <span className="text-slate-400">|</span>
                    <span className="text-slate-600">12 Cosponsors</span>
                  </div>
                </div>

                {/* Bill 3 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">
                        H.R. 456 - Healthcare Access Improvement Act
                      </h4>
                      <div className="flex gap-3 text-xs text-slate-600 mb-2">
                        <span>Introduced: Dec 20, 2025</span>
                        <span>•</span>
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Passed House</span>
                      </div>
                    </div>
                    <button className="text-green-600 font-semibold text-sm flex-shrink-0 ml-4">
                      ✓ Tracking
                    </button>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Expands Medicaid eligibility in all states, reduces prescription drug costs, and increases funding for community health centers.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View Details</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">Congress.gov</a>
                    <span className="text-slate-400">|</span>
                    <span className="text-slate-600">45 Cosponsors</span>
                  </div>
                </div>

                {/* View all link */}
                <div className="text-center pt-4">
                  <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">
                    View All 127 Bills Sponsored →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What You Get on Each Legislator Page
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  📞
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Complete Contact Info
                </h3>
                <p className="text-slate-600">
                  DC office phone, office address, website, years in office. Everything in one place.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  📄
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Recent Bills Sponsored
                </h3>
                <p className="text-slate-600">
                  See all bills they've introduced. One-click to track any bill directly from their profile.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  👥
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Committee Memberships
                </h3>
                <p className="text-slate-600">
                  Which committees they sit on (Education, Foreign Affairs, etc.). Understand their areas of influence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  ✅
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Recent Voting Record
                </h3>
                <p className="text-slate-600">
                  See how they voted on recent bills. Track their voting patterns on issues you care about.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  📝
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Contact History (Team Feature)
                </h3>
                <p className="text-slate-600">
                  Log when your team has reached out to them. Track meeting notes, email threads, and call logs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🔗
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Direct Links
                </h3>
                <p className="text-slate-600">
                  Quick access to Congress.gov profile, official website, and social media. No more searching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Deep Insights on Every Member of Congress
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join the waitlist to get early access when we launch in February 2026.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-semibold text-lg"
          >
            Join Waitlist
          </Link>
          <p className="text-slate-600 text-sm mt-4">
            50% off for 6 months • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
