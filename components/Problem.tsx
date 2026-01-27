export default function Problem() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Problem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Policy teams waste <span className="text-amber-600 font-semibold">1-2 hours every day</span> manually checking Congress.gov for relevant bills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pain Point 1 */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Time-Consuming
            </h3>
            <p className="text-slate-600">
              Manually searching through hundreds of bills daily takes hours away from actual advocacy work.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Easy to Miss
            </h3>
            <p className="text-slate-600">
              Important bills slip through the cracks when you're overwhelmed with information.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Expensive Alternatives
            </h3>
            <p className="text-slate-600">
              Enterprise tools like Quorum cost <span className="font-semibold">$20,000+/year</span> — too expensive for small advocacy teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
