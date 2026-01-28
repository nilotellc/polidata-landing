import Link from 'next/link';

export default function ProductPreview() {
  return (
    <section className="py-20 px-6 bg-white" id="preview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            See What You'll Get
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Explore interactive mockups of the dashboard, email alerts, and legislator directory before you sign up.
          </p>
          <Link
            href="/preview"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition font-semibold text-lg shadow-lg"
          >
            Explore Product Mockups →
          </Link>
        </div>

        {/* Quick preview cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Dashboard preview */}
          <Link
            href="/preview/dashboard"
            className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Bill Tracking Dashboard
              </h3>
            </div>
            <p className="text-slate-700 mb-4">
              Search, filter, and browse federal legislation. Track unlimited bills with your team.
            </p>
            <div className="flex items-center text-amber-700 font-semibold group-hover:gap-2 transition-all">
              <span>View Mockup</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Email preview */}
          <Link
            href="/preview/email"
            className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Daily Email Alerts
              </h3>
            </div>
            <p className="text-slate-700 mb-4">
              Get a clean daily digest of bills matching your keywords. Never miss relevant legislation.
            </p>
            <div className="flex items-center text-blue-700 font-semibold group-hover:gap-2 transition-all">
              <span>View Mockup</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Legislator preview */}
          <Link
            href="/preview/legislators"
            className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Legislator Directory
              </h3>
            </div>
            <p className="text-slate-700 mb-4">
              Contact info for all 535 members of Congress. Find your representatives by ZIP code.
            </p>
            <div className="flex items-center text-green-700 font-semibold group-hover:gap-2 transition-all">
              <span>View Mockup</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Want to see more details? Check out the full interactive preview.
          </p>
          <Link
            href="/preview"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
          >
            <span>View All Mockups</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
