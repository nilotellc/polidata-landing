'use client';

import { useEffect } from 'react';

export default function WaitlistForm() {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
            data-tally-src="https://tally.so/embed/ob2ZRb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            loading="lazy"
            width="100%"
            height="694"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join the Waitlist"
            className="w-full"
          ></iframe>
          
          {/* Privacy Notice */}
          <p className="text-sm text-slate-600 mt-6 text-center">
            By signing up, you agree to our{' '}
            <a href="/privacy" className="text-amber-600 hover:text-amber-700 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-amber-600 hover:text-amber-700 underline">
              Terms of Service
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

// TypeScript definition for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}
