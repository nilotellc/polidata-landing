'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'G-9LEH2YD3K4',
        'event_category': 'waitlist',
        'event_label': 'signup_complete',
        'value': 1
      });

      // Also track as form_submit for Tally integration
      window.gtag('event', 'form_submit', {
        'event_category': 'waitlist',
        'event_label': 'tally_form',
        'value': 1
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.svg"
            alt="PoliData Logo"
            width={64}
            height={64}
            className="animate-pulse"
          />
        </div>

        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">
          You're on the list!
        </h1>

        <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto">
          Thank you for joining the PoliData waitlist. We'll notify you as soon as we launch.
        </p>

        {/* What's Next */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8 text-left max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">What happens next?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">1.</span>
              <div>
                <p className="font-medium">We're building PoliData</p>
                <p className="text-sm text-slate-400">Creating the MVP and testing with early users</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">2.</span>
              <div>
                <p className="font-medium">You'll get early access</p>
                <p className="text-sm text-slate-400">As a waitlist member, you'll be among the first to try it</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">3.</span>
              <div>
                <p className="font-medium">Exclusive early-bird pricing</p>
                <p className="text-sm text-slate-400">First 20 customers get 50% off for 6 months</p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
          >
            Back to Home
          </Link>
          <a
            href="mailto:support@getpolidata.com"
            className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all border border-slate-600"
          >
            Contact Us
          </a>
        </div>

        {/* Social Proof */}
        <p className="text-sm text-slate-400 mt-8">
          Questions? Email us at{" "}
          <a href="mailto:support@getpolidata.com" className="text-amber-500 hover:underline">
            support@getpolidata.com
          </a>
        </p>
      </div>
    </div>
  );
}

// TypeScript definition for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}
