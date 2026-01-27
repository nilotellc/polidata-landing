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

        {/* Tally Form Embed */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
          <iframe
            data-tally-src="https://tally.so/embed/ob2ZRb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="694"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join the Waitlist"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
