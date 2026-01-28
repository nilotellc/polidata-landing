import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 animate-pulse">
              <Image
                src="/logo.svg"
                alt="PoliData Logo"
                width={48}
                height={48}
                className="drop-shadow-lg"
              />
            </div>
            <span className="text-2xl font-bold">PoliData</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Track federal legislation <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              in real-time
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Stop spending 2 hours every day checking Congress.gov. <br />
            Get automated alerts <span className="text-amber-500 font-semibold">starting at $149/month</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </a>
            <a
              href="#pricing"
              className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all border border-slate-600"
            >
              See Pricing
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
