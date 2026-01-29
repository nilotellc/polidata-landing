export default function Solution() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Automated Bill Tracking <span className="text-amber-600">starting at $149/month</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dashboard + Email Alerts + Legislator Directory. Track federal bills and find your representatives&apos; contact info—all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Bill Tracking Dashboard
            </h3>
            <p className="text-slate-600">
              Browse, search, and filter federal legislation in real-time. Track bill status changes and get daily email alerts.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Legislator Directory
            </h3>
            <p className="text-slate-600">
              Access contact info for all 535 members of Congress. Phone numbers, addresses, websites, and a "Find Your Rep" tool by ZIP code.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Team Collaboration
            </h3>
            <p className="text-slate-600">
              Invite your team (2-15 users depending on plan). Share keyword tracking and bill lists across your organization.
            </p>
          </div>
        </div>

        {/* Additional features row */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Real-Time Monitoring
            </h3>
            <p className="text-slate-600">
              We check Congress.gov daily and track bill introductions, amendments, and status changes automatically.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Daily Email Alerts
            </h3>
            <p className="text-slate-600">
              Get a concise daily digest delivered to your inbox with only the bills that match your keywords.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Keyword Matching
            </h3>
            <p className="text-slate-600">
              Set up to 200 keywords to track the topics that matter to your organization (education, healthcare, climate, etc.).
            </p>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-slate-200">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">❌</span> Before PoliData
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Spend 1-2 hours/day on Congress.gov</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Manually search through hundreds of bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Risk missing important legislation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Pay $20k+/year for enterprise tools</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✅</span> After PoliData
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Web dashboard + email alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Legislator directory (all 535 members)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Team collaboration (2-15 users)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Starting at $149/month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
