export default function WaitlistForm() {
  return (
    <section id="waitlist" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-slate-600">
            Be the first to know when we launch. No spam, we promise.
          </p>
        </div>

        {/* Tally Form Embed - Replace with actual Tally form URL after creating */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@organization.org"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            {/* Organization Name */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                placeholder="Your Advocacy Organization"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            {/* Job Title (Optional) */}
            <div>
              <label htmlFor="job-title" className="block text-sm font-medium text-slate-700 mb-2">
                Job Title <span className="text-slate-400 text-sm">(optional)</span>
              </label>
              <input
                type="text"
                id="job-title"
                name="job-title"
                placeholder="Policy Director, Advocacy Manager, etc."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            {/* Keywords (Optional) */}
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-slate-700 mb-2">
                What bills do you track? <span className="text-slate-400 text-sm">(optional)</span>
              </label>
              <textarea
                id="keywords"
                name="keywords"
                rows={3}
                placeholder="e.g., education, healthcare, climate change, civil rights"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none"
              />
            </div>

            {/* Source */}
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-slate-700 mb-2">
                How did you find us?
              </label>
              <select
                id="source"
                name="source"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter/X</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </button>

            <p className="text-sm text-slate-500 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Note about Tally integration */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-900">
            <strong>⚠️ Dev Note:</strong> Replace this form with actual Tally embed after creating Tally form at{' '}
            <a href="https://tally.so" target="_blank" rel="noopener noreferrer" className="underline">
              tally.so
            </a>
            . This is a placeholder form for now.
          </p>
        </div>
      </div>
    </section>
  );
}
