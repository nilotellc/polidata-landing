export default function Solution() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Automated Bill Tracking for <span className="text-amber-600">$100/month</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            PoliData monitors Congress.gov 24/7 and sends you daily alerts when relevant bills are introduced or updated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
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

          {/* Feature 2 */}
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

          {/* Feature 3 */}
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
              Set unlimited keywords to track the topics that matter to your organization (education, healthcare, climate, etc.).
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
                  <span>Save 10+ hours per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Get daily alerts in your inbox</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Never miss relevant bills again</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Pay only $100/month ($1,200/year)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
