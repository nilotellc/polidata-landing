import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPreviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero section */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Bill Tracking Dashboard
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Search, filter, and browse federal legislation in one clean interface. Track bill status changes in real-time.
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

      {/* Features overview */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What You Can Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Advanced Search
              </h3>
              <p className="text-slate-600 text-sm">
                Search by keyword, bill number, sponsor, or topic. Find exactly what you need in seconds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Smart Filters
              </h3>
              <p className="text-slate-600 text-sm">
                Filter by date, status, chamber, sponsor party. Save custom filters for quick access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📌</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Track Bills
              </h3>
              <p className="text-slate-600 text-sm">
                One-click tracking. Get notified when status changes. Share tracked bills with your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live mockup */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Live Preview
          </h2>
          <p className="text-slate-600 text-center mb-8">
            This is what your dashboard will look like (with real data from Congress.gov)
          </p>

          {/* Dashboard mockup */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
            {/* Dashboard header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="PoliData Logo"
                  width={32}
                  height={32}
                />
                <h2 className="text-lg font-bold">PoliData Dashboard</h2>
              </div>
              <div className="flex items-center gap-6">
                <nav className="flex gap-4 text-sm">
                  <button className="text-amber-500 font-semibold">Dashboard</button>
                  <button className="hover:text-amber-500 transition">Legislators</button>
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

            {/* Main content */}
            <div className="p-6 flex gap-6">
              {/* Main panel */}
              <div className="flex-1">
                {/* Search & Filters */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search bills by keyword, number, or sponsor..."
                    className="w-full p-3 border border-slate-300 rounded-lg mb-4 text-slate-900"
                    disabled
                  />
                  <div className="flex gap-3 flex-wrap">
                    <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                      <option>Status: All</option>
                    </select>
                    <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                      <option>Chamber: Both</option>
                    </select>
                    <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                      <option>Party: All</option>
                    </select>
                    <input type="date" className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled />
                  </div>
                </div>

                {/* Bill list */}
                <div className="space-y-4">
                  {/* Bill 1 */}
                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        H.R. 1234 - Education Funding Act of 2026
                      </h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Introduced
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      This bill appropriates $50 billion for K-12 education funding over the next 5 years. Includes provisions for teacher pay increases, school infrastructure improvements, and special education programs.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>Sponsor: Rep. Jane Doe (D-CA)</span>
                      <span>Introduced: Jan 27, 2026</span>
                      <span>House Committee on Education</span>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 transition font-semibold">
                      Track This Bill
                    </button>
                  </div>

                  {/* Bill 2 */}
                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        S. 567 - Clean Energy Investment Act
                      </h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Committee
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Provides tax incentives for renewable energy investments, establishes national clean energy standards, and creates a $100B green infrastructure fund. Expected to create 500,000 jobs over 10 years.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>Sponsor: Sen. John Smith (D-NY)</span>
                      <span>Introduced: Jan 25, 2026</span>
                      <span>Senate Committee on Energy</span>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 transition font-semibold">
                      Track This Bill
                    </button>
                  </div>

                  {/* Bill 3 */}
                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        H.R. 2345 - Healthcare Access Expansion Act
                      </h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Introduced
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Expands Medicaid eligibility to cover 5 million additional Americans, increases subsidies for ACA marketplace plans, and lowers prescription drug costs through Medicare negotiation authority.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>Sponsor: Rep. Maria Garcia (D-TX)</span>
                      <span>Introduced: Jan 26, 2026</span>
                      <span>House Committee on Ways and Means</span>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 transition font-semibold">
                      Track This Bill
                    </button>
                  </div>

                  {/* Bill 4 */}
                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        S. 890 - Voting Rights Restoration Act
                      </h3>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Floor Vote
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Restores key provisions of the Voting Rights Act, establishes automatic voter registration nationwide, and increases federal oversight of state election changes.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>Sponsor: Sen. Robert Lee (D-IL)</span>
                      <span>Introduced: Jan 20, 2026</span>
                      <span>Senate Judiciary Committee</span>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 transition font-semibold">
                      Track This Bill
                    </button>
                  </div>

                  {/* Bill 5 */}
                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        H.R. 3456 - Infrastructure Maintenance Act
                      </h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Introduced
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Allocates $200 billion for bridge and road repairs across all 50 states. Prioritizes rural infrastructure and creates apprenticeship programs for construction workers.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>Sponsor: Rep. David Chen (R-OH)</span>
                      <span>Introduced: Jan 28, 2026</span>
                      <span>House Committee on Transportation</span>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 transition font-semibold">
                      Track This Bill
                    </button>
                  </div>
                </div>

                {/* Pagination */}
                <div className="mt-6 flex justify-center gap-2">
                  <button className="px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-50" disabled>
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-amber-600 text-white rounded text-sm font-semibold">
                    1
                  </button>
                  <button className="px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-50">
                    2
                  </button>
                  <button className="px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-50">
                    3
                  </button>
                  <button className="px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-50">
                    Next
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="w-80 hidden lg:block">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 sticky top-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Your Tracked Bills
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-amber-200 rounded">
                      <p className="font-semibold text-sm text-slate-900">H.R. 789 - Climate Action Now Act</p>
                      <p className="text-xs text-slate-600 mt-1">Status: Passed House</p>
                    </div>
                    <div className="p-3 bg-white border border-amber-200 rounded">
                      <p className="font-semibold text-sm text-slate-900">S. 234 - Teacher Pay Equity Act</p>
                      <p className="text-xs text-slate-600 mt-1">Status: Committee</p>
                    </div>
                    <div className="p-3 bg-white border border-amber-200 rounded">
                      <p className="font-semibold text-sm text-slate-900">H.R. 456 - Broadband Access Act</p>
                      <p className="text-xs text-slate-600 mt-1">Status: Introduced</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 border border-slate-300 text-slate-700 px-4 py-2 rounded text-sm hover:bg-white transition">
                    View All (12)
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Feature details */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Dashboard Features
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  🔍
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Powerful Search
                </h3>
                <p className="text-slate-600">
                  Search across all federal bills by keyword, bill number, sponsor name, or topic. Results appear instantly with relevance ranking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  🎯
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Advanced Filters
                </h3>
                <p className="text-slate-600">
                  Filter by status (Introduced, Committee, Floor Vote, Passed), chamber (House/Senate), date range, sponsor party. Save custom filter combinations for quick access.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  📌
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  One-Click Tracking
                </h3>
                <p className="text-slate-600">
                  Track up to 200 bills per account (Starter plan). Get notified when status changes. Share tracked bills with your team members.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  🔄
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Real-Time Updates
                </h3>
                <p className="text-slate-600">
                  Bill data syncs every hour from Congress.gov. Never miss status changes, new sponsors, or committee assignments.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  📊
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Export Reports
                </h3>
                <p className="text-slate-600">
                  Export tracked bills to CSV or PDF. Perfect for board meetings, funder reports, or internal updates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  👥
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Team Collaboration
                </h3>
                <p className="text-slate-600">
                  Share tracking lists with 1-15 team members (depending on plan). Everyone sees the same bills, no duplicate work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
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
