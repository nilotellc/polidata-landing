import Link from 'next/link';
import Image from 'next/image';

export default function EmailPreviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero section */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Daily Email Alerts
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wake up to a clean digest of bills matching your keywords. No more manually checking Congress.gov every morning.
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
            How Email Alerts Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                1. Set Your Keywords
              </h3>
              <p className="text-slate-600 text-sm">
                Add up to 200 keywords (e.g., "education funding", "climate change"). We'll match them to new bills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                2. We Monitor Daily
              </h3>
              <p className="text-slate-600 text-sm">
                Every morning at 6 AM, we check Congress.gov for new bills and status changes matching your keywords.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                3. Get Your Digest
              </h3>
              <p className="text-slate-600 text-sm">
                Receive a clean email digest by 7 AM with only relevant bills. No spam, no false positives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email mockup - Desktop version */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            What Your Daily Digest Looks Like
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Here's an example of what you'll receive each morning (desktop view)
          </p>

          {/* Email mockup container */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200">
            {/* Email header (like Gmail) */}
            <div className="bg-slate-50 p-4 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/logo.svg"
                  alt="PoliData Logo"
                  width={24}
                  height={24}
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">PoliData Daily Digest</div>
                  <div className="text-xs text-slate-600">alerts@getpolidata.com</div>
                </div>
              </div>
              <div className="text-lg font-semibold text-slate-900">
                Your Daily PoliData Digest — 5 new bills match your alerts
              </div>
              <div className="text-xs text-slate-500 mt-1">January 28, 2026 at 7:00 AM</div>
            </div>

            {/* Email body */}
            <div className="p-6 bg-white">
              {/* Greeting */}
              <p className="text-slate-700 mb-6">
                Hi there,
              </p>
              <p className="text-slate-700 mb-6">
                Here are today's federal bills matching your tracked keywords:
              </p>

              {/* Alert group 1: Education */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-1 bg-amber-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Education Legislation (3 bills)
                  </h3>
                </div>

                {/* Bill 1 */}
                <div className="mb-4 pl-4 border-l-2 border-amber-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    H.R. 1234 - Education Funding Act of 2026
                  </h4>
                  <div className="flex gap-3 text-xs text-slate-600 mb-2">
                    <span>Introduced: Jan 27, 2026</span>
                    <span>•</span>
                    <span>Sponsor: Rep. Jane Doe (D-CA)</span>
                    <span>•</span>
                    <span className="text-green-700 font-semibold">Status: Introduced</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    This bill appropriates $50 billion for K-12 education funding over the next 5 years. Includes provisions for teacher pay increases, school infrastructure improvements, and special education programs.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View on Dashboard</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">View on Congress.gov</a>
                  </div>
                </div>

                {/* Bill 2 */}
                <div className="mb-4 pl-4 border-l-2 border-amber-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    S. 234 - Teacher Pay Equity Act
                  </h4>
                  <div className="flex gap-3 text-xs text-slate-600 mb-2">
                    <span>Introduced: Jan 26, 2026</span>
                    <span>•</span>
                    <span>Sponsor: Sen. Robert Lee (D-IL)</span>
                    <span>•</span>
                    <span className="text-blue-700 font-semibold">Status: Committee</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Establishes federal baseline for teacher salaries ($60,000 minimum). Provides grants to states that meet or exceed baseline. Aims to reduce teacher shortages nationwide.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View on Dashboard</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">View on Congress.gov</a>
                  </div>
                </div>

                {/* Bill 3 */}
                <div className="mb-4 pl-4 border-l-2 border-amber-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    H.R. 3456 - College Affordability Act
                  </h4>
                  <div className="flex gap-3 text-xs text-slate-600 mb-2">
                    <span>Introduced: Jan 28, 2026</span>
                    <span>•</span>
                    <span>Sponsor: Rep. Maria Garcia (D-TX)</span>
                    <span>•</span>
                    <span className="text-green-700 font-semibold">Status: Introduced</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Doubles Pell Grant maximum award, expands income-based repayment options, and provides grants to community colleges for workforce training programs.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View on Dashboard</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">View on Congress.gov</a>
                  </div>
                </div>
              </div>

              {/* Alert group 2: Climate */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-1 bg-green-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Climate Legislation (2 bills)
                  </h3>
                </div>

                {/* Bill 4 */}
                <div className="mb-4 pl-4 border-l-2 border-green-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    S. 567 - Clean Energy Investment Act
                  </h4>
                  <div className="flex gap-3 text-xs text-slate-600 mb-2">
                    <span>Introduced: Jan 25, 2026</span>
                    <span>•</span>
                    <span>Sponsor: Sen. John Smith (D-NY)</span>
                    <span>•</span>
                    <span className="text-blue-700 font-semibold">Status: Committee</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Provides tax incentives for renewable energy investments, establishes national clean energy standards, and creates a $100B green infrastructure fund. Expected to create 500,000 jobs.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View on Dashboard</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">View on Congress.gov</a>
                  </div>
                </div>

                {/* Bill 5 */}
                <div className="mb-4 pl-4 border-l-2 border-green-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    H.R. 789 - Climate Action Now Act
                  </h4>
                  <div className="flex gap-3 text-xs text-slate-600 mb-2">
                    <span>Status Changed: Jan 28, 2026</span>
                    <span>•</span>
                    <span>Sponsor: Rep. David Chen (D-CA)</span>
                    <span>•</span>
                    <span className="text-amber-700 font-semibold">Status: Passed House</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-xs font-semibold mr-2">STATUS UPDATE</span>
                    Reduces carbon emissions 50% by 2030. Passed House 245-190. Now moves to Senate for consideration.
                  </p>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-amber-600 font-semibold hover:underline">View on Dashboard</a>
                    <span className="text-slate-400">|</span>
                    <a href="#" className="text-blue-600 hover:underline">View on Congress.gov</a>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">Today's Summary</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <strong>3 new bills</strong> matching "education funding"</li>
                  <li>• <strong>1 new bill</strong> matching "climate change"</li>
                  <li>• <strong>1 status update</strong> on tracked bill</li>
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 pt-6 text-center">
                <p className="text-slate-600 text-sm mb-4">
                  Want to adjust your alerts?
                </p>
                <div className="flex gap-4 justify-center mb-4">
                  <a href="#" className="text-amber-600 font-semibold text-sm hover:underline">
                    Manage Keywords
                  </a>
                  <span className="text-slate-400">|</span>
                  <a href="#" className="text-slate-600 text-sm hover:underline">
                    Change Email Frequency
                  </a>
                  <span className="text-slate-400">|</span>
                  <a href="#" className="text-slate-600 text-sm hover:underline">
                    Unsubscribe
                  </a>
                </div>
                <p className="text-xs text-slate-500">
                  © 2026 PoliData • Track federal legislation & legislators in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature details */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Email Alert Features
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🎯
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Keyword Matching
                </h3>
                <p className="text-slate-600">
                  Add up to 200 keywords per account. We match bill titles, summaries, and sponsor names. No false positives, only relevant bills.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  📅
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Daily Delivery
                </h3>
                <p className="text-slate-600">
                  Emails sent at 7 AM every morning (your timezone). Never miss new bills or status changes. Can also enable instant alerts for urgent matches.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🔄
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Status Updates
                </h3>
                <p className="text-slate-600">
                  Automatically notified when tracked bills change status (Introduced → Committee → Floor Vote → Passed). Never miss important movements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🎨
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Clean Format
                </h3>
                <p className="text-slate-600">
                  No ads, no clutter. Just the bills you care about with clear summaries, sponsor info, and direct links to full text.
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
                  Team Sharing
                </h3>
                <p className="text-slate-600">
                  All team members get the same digest. No more forwarding emails or managing individual subscriptions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  ⚙️
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Customizable
                </h3>
                <p className="text-slate-600">
                  Choose email frequency (daily, weekly, instant), customize keyword groups, and set quiet hours. Fits your team's workflow.
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
            Never Miss a Bill Again
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
