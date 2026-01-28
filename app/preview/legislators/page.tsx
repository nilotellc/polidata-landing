import Link from 'next/link';
import Image from 'next/image';

export default function LegislatorsPreviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero section */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Legislator Directory
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Contact info for all 535 members of Congress. Search by name, state, or ZIP code. Always up-to-date.
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
                Search by Name or State
              </h3>
              <p className="text-slate-600 text-sm">
                Find any of the 535 members instantly. Filter by state, party, or chamber.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Find Your Representatives
              </h3>
              <p className="text-slate-600 text-sm">
                Enter your ZIP code to instantly see your 2 senators and 1 representative.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Get Contact Info
              </h3>
              <p className="text-slate-600 text-sm">
                Phone numbers, office addresses, websites, and social media. Everything in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory mockup */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Live Preview
          </h2>
          <p className="text-slate-600 text-center mb-8">
            This is what the legislator directory looks like (with real data from Congress.gov)
          </p>

          {/* Directory mockup */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
            {/* Directory header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="PoliData Logo"
                  width={32}
                  height={32}
                />
                <h2 className="text-lg font-bold">PoliData Legislator Directory</h2>
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

            {/* Main content */}
            <div className="p-6">
              {/* Search & Filters */}
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Search by name or state..."
                    className="flex-1 p-3 border border-slate-300 rounded-lg text-slate-900"
                    disabled
                  />
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                    Find Your Rep (ZIP)
                  </button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                    <option>State: All</option>
                  </select>
                  <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                    <option>Party: All</option>
                  </select>
                  <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                    <option>Chamber: Both</option>
                  </select>
                  <select className="p-2 border border-slate-300 rounded text-sm text-slate-700" disabled>
                    <option>Sort: Last Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Stats bar */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <div className="flex justify-around text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">535</div>
                    <div className="text-xs text-slate-600">Total Members</div>
                  </div>
                  <div className="border-l border-slate-300"></div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100</div>
                    <div className="text-xs text-slate-600">Senators</div>
                  </div>
                  <div className="border-l border-slate-300"></div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">435</div>
                    <div className="text-xs text-slate-600">Representatives</div>
                  </div>
                </div>
              </div>

              {/* Legislator grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Legislator 1 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex gap-3 mb-3">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">Sen. Dianne Feinstein</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">D</span>
                        <span>California</span>
                      </div>
                      <div className="text-xs text-slate-500">U.S. Senate</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(202) 224-3841</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="truncate">331 Hart Senate Office Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline truncate">feinstein.senate.gov</a>
                    </div>
                  </div>
                </div>

                {/* Legislator 2 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex gap-3 mb-3">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">Sen. Alex Padilla</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">D</span>
                        <span>California</span>
                      </div>
                      <div className="text-xs text-slate-500">U.S. Senate</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(202) 224-3553</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="truncate">112 Hart Senate Office Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline truncate">padilla.senate.gov</a>
                    </div>
                  </div>
                </div>

                {/* Legislator 3 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex gap-3 mb-3">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">Rep. Nancy Pelosi</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">D</span>
                        <span>CA-11</span>
                      </div>
                      <div className="text-xs text-slate-500">U.S. House</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(202) 225-4965</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="truncate">233 Cannon House Office Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline truncate">pelosi.house.gov</a>
                    </div>
                  </div>
                </div>

                {/* Legislator 4 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex gap-3 mb-3">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">Sen. Chuck Schumer</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">D</span>
                        <span>New York</span>
                      </div>
                      <div className="text-xs text-slate-500">U.S. Senate (Majority Leader)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(202) 224-6542</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="truncate">322 Hart Senate Office Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline truncate">schumer.senate.gov</a>
                    </div>
                  </div>
                </div>

                {/* Legislator 5 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex gap-3 mb-3">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">Sen. Mitch McConnell</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded font-semibold">R</span>
                        <span>Kentucky</span>
                      </div>
                      <div className="text-xs text-slate-500">U.S. Senate (Minority Leader)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(202) 224-2541</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="truncate">317 Russell Senate Office Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline truncate">mcconnell.senate.gov</a>
                    </div>
                  </div>
                </div>

                {/* Legislator 6 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                  <div className="flex gap-3 mb-3">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">Rep. Alexandria Ocasio-Cortez</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">D</span>
                        <span>NY-14</span>
                      </div>
                      <div className="text-xs text-slate-500">U.S. House</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(202) 225-3965</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="truncate">229 Cannon House Office Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="#" className="text-blue-600 hover:underline truncate">ocasio-cortez.house.gov</a>
                    </div>
                  </div>
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
                  ...
                </button>
                <button className="px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-50">
                  90
                </button>
                <button className="px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Rep demo */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Find Your Representatives Instantly
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Enter your ZIP code and see your 2 senators + 1 representative in seconds
          </p>
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8 max-w-md mx-auto">
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="Enter ZIP code (e.g., 94102)"
                className="flex-1 p-3 border border-slate-300 rounded-lg text-slate-900"
                disabled
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Find
              </button>
            </div>
            <div className="text-sm text-slate-600 text-center">
              <p>Example: ZIP 94102 (San Francisco, CA) shows:</p>
              <ul className="mt-2 space-y-1 text-left">
                <li>• Sen. Dianne Feinstein (D-CA)</li>
                <li>• Sen. Alex Padilla (D-CA)</li>
                <li>• Rep. Nancy Pelosi (D-CA-11)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature details */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Directory Features
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  👥
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  All 535 Members
                </h3>
                <p className="text-slate-600">
                  Complete directory of U.S. Senate (100) and House of Representatives (435). Updated in real-time when new members join.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  📞
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Complete Contact Info
                </h3>
                <p className="text-slate-600">
                  DC office phone, office address, website, and social media links. Everything you need to reach out.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  ZIP Code Lookup
                </h3>
                <p className="text-slate-600">
                  Find your representatives instantly by entering your ZIP code. Shows your 2 senators and 1 house rep.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  🔍
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Advanced Filters
                </h3>
                <p className="text-slate-600">
                  Filter by state, party (D/R/I), chamber (Senate/House), and sort by name or state. Find anyone quickly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  🔄
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Always Up-to-Date
                </h3>
                <p className="text-slate-600">
                  Syncs daily with Congress.gov. When new members are sworn in or leadership changes, you'll see it immediately.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  📋
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Export Lists
                </h3>
                <p className="text-slate-600">
                  Export filtered lists to CSV for mail merges, call sheets, or internal tracking. Perfect for advocacy campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stop Googling for Contact Info
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
