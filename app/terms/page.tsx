import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PoliData",
  description: "Terms and conditions for using PoliData's bill tracking service.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <a href="/" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8">
          <strong>Effective Date:</strong> January 28, 2026<br />
          <strong>Last Updated:</strong> January 28, 2026
        </p>

        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of PoliData&apos;s website, products, and services (collectively, the &quot;Service&quot;). By accessing or using PoliData, you agree to be bound by these Terms and our <a href="/privacy" className="text-amber-600 hover:text-amber-700">Privacy Policy</a>.
            </p>
            <p className="text-slate-700 mb-4">
              If you do not agree to these Terms, you may not access or use the Service. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Service Description</h2>
            <p className="text-slate-700 mb-4">
              PoliData provides automated tracking of U.S. federal legislation and politicians, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Real-time bill status updates from Congress.gov</li>
              <li>Email alerts for bill actions and updates</li>
              <li>Search and filtering tools for legislation</li>
              <li>Politician voting records and contact information</li>
            </ul>
            <p className="text-slate-700 mb-4">
              <strong>Data Source:</strong> PoliData aggregates public data from Congress.gov (official U.S. government source). We do not guarantee the accuracy, completeness, or timeliness of this data. Always verify critical information with official sources.
            </p>
          </section>

          {/* Account Registration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Account Registration</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Eligibility</h3>
            <p className="text-slate-700 mb-4">
              You must be at least 18 years old to use PoliData. By creating an account, you represent that you meet this requirement and that all information you provide is accurate and complete.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.2 Account Security</h3>
            <p className="text-slate-700 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Maintaining the confidentiality of your password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p className="text-slate-700 mb-4">
              We are not liable for losses caused by unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.3 Account Termination</h3>
            <p className="text-slate-700 mb-4">
              We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion.
            </p>
          </section>

          {/* Subscription and Billing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Subscription and Billing</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Pricing Plans</h3>
            <p className="text-slate-700 mb-4">
              PoliData offers monthly subscription plans:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Starter:</strong> $79/month (up to 25 tracked bills)</li>
              <li><strong>Team:</strong> $149/month (up to 100 tracked bills, team sharing)</li>
              <li><strong>Pro:</strong> $299/month (unlimited tracked bills, priority support)</li>
            </ul>
            <p className="text-slate-700 mb-4">
              We reserve the right to change pricing with 30 days&apos; notice. Existing subscribers will be grandfathered at their current price for 12 months.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Billing and Payment</h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Payment Processing:</strong> All payments are processed by Stripe. We do not store credit card information.</li>
              <li><strong>Recurring Billing:</strong> Subscriptions automatically renew monthly unless canceled.</li>
              <li><strong>Billing Cycle:</strong> You will be charged on the same day each month (e.g., if you subscribe on Jan 15, you&apos;ll be charged on Feb 15, Mar 15, etc.).</li>
              <li><strong>Failed Payments:</strong> If payment fails, we will retry up to 3 times. After 3 failures, your account will be suspended until payment is updated.</li>
              <li><strong>Taxes:</strong> Prices exclude applicable sales tax and VAT. Taxes will be calculated and added at checkout based on your location, as required by law.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.3 Cancellation and Refunds</h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Cancel Anytime:</strong> You can cancel your subscription at any time from your account settings.</li>
              <li><strong>Access Until End of Period:</strong> If you cancel, you retain access until the end of your current billing period (no prorated refunds).</li>
              <li><strong>Refund Policy:</strong> We offer a 14-day money-back guarantee for first-time subscribers. Email <a href="mailto:support@getpolidata.com" className="text-amber-600 hover:text-amber-700">support@getpolidata.com</a> to request a refund.</li>
              <li><strong>No Refunds After 14 Days:</strong> After 14 days, all payments are non-refundable (except as required by law).</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.4 Free Trial (If Offered)</h3>
            <p className="text-slate-700 mb-4">
              We may offer a free trial period. You will not be charged until the trial ends. If you do not cancel before the trial ends, you will be automatically charged for the subscription plan you selected.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Acceptable Use Policy</h2>
            <p className="text-slate-700 mb-4">
              You agree <strong>not</strong> to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction (including copyright laws)</li>
              <li>Scrape, crawl, or automated-extract data from PoliData (use our API if available)</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
              <li>Upload viruses, malware, or other malicious code</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Resell, redistribute, or share your account credentials</li>
              <li>Use the Service to send spam or unsolicited communications</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
            </ul>
            <p className="text-slate-700 mb-4">
              Violation of this policy may result in immediate account termination without refund.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">6.1 PoliData&apos;s Rights</h3>
            <p className="text-slate-700 mb-4">
              PoliData owns all rights, title, and interest in the Service, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Software, code, and algorithms</li>
              <li>Trademarks, logos, and branding</li>
              <li>Website design and user interface</li>
              <li>Documentation and content we create</li>
            </ul>
            <p className="text-slate-700 mb-4">
              You may not copy, modify, distribute, or create derivative works without our written permission.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">6.2 User Content</h3>
            <p className="text-slate-700 mb-4">
              You retain ownership of any data you input into PoliData (e.g., saved bills, notes). By using the Service, you grant us a license to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Store and process your data to provide the Service</li>
              <li>Use anonymized, aggregated data for analytics and product improvement</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">6.3 Public Data</h3>
            <p className="text-slate-700 mb-4">
              Legislative data from Congress.gov is in the public domain. PoliData&apos;s aggregation, organization, and presentation of this data is protected by copyright.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.1 No Warranty</h3>
            <p className="text-slate-700 mb-4">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Accuracy, completeness, or timeliness of legislative data</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Security or freedom from viruses</li>
              <li>Fitness for a particular purpose</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.2 Data Accuracy</h3>
            <p className="text-slate-700 mb-4">
              <strong>Important:</strong> PoliData aggregates data from Congress.gov. While we strive for accuracy, we do not guarantee that data is complete, current, or error-free. You should verify critical information with official sources before taking action.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.3 Service Availability</h3>
            <p className="text-slate-700 mb-4">
              We do not guarantee 100% uptime. The Service may be unavailable due to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Scheduled maintenance (we will notify you in advance)</li>
              <li>Technical issues or outages</li>
              <li>Force majeure events (natural disasters, cyberattacks, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.4 Limitation of Liability</h3>
            <p className="text-slate-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLIDATA SHALL NOT BE LIABLE FOR ANY:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from your reliance on legislative data</li>
            </ul>
            <p className="text-slate-700 mb-4">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO POLIDATA IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.5 Indemnification</h3>
            <p className="text-slate-700 mb-4">
              You agree to indemnify and hold harmless PoliData from any claims, damages, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Your violation of these Terms</li>
              <li>Your use of the Service</li>
              <li>Your violation of any law or third-party rights</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Third-Party Services</h2>
            <p className="text-slate-700 mb-4">
              PoliData integrates with third-party services:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Stripe:</strong> Payment processing (subject to <a href="https://stripe.com/legal/ssa" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">Stripe&apos;s Terms</a>)</li>
              <li><strong>Congress.gov:</strong> Legislative data source (U.S. government public domain data)</li>
              <li><strong>SendGrid:</strong> Email delivery</li>
            </ul>
            <p className="text-slate-700 mb-4">
              We are not responsible for the availability, accuracy, or practices of third-party services. Your use of third-party services is subject to their own terms and policies.
            </p>
          </section>

          {/* Modification and Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Modification and Termination of Service</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">9.1 Changes to Service</h3>
            <p className="text-slate-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Modify or discontinue features at any time</li>
              <li>Change pricing with 30 days&apos; notice</li>
              <li>Update these Terms (we will notify you of material changes)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">9.2 Service Discontinuation</h3>
            <p className="text-slate-700 mb-4">
              If we decide to shut down PoliData, we will:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Provide at least 60 days&apos; notice</li>
              <li>Allow you to export your data</li>
              <li>Issue prorated refunds for unused subscription time</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">10.1 Informal Resolution</h3>
            <p className="text-slate-700 mb-4">
              Before filing a claim, please contact us at <a href="mailto:support@getpolidata.com" className="text-amber-600 hover:text-amber-700">support@getpolidata.com</a> to resolve the issue informally.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">10.2 Governing Law</h3>
            <p className="text-slate-700 mb-4">
              These Terms shall be governed by the laws of Poland, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">10.3 Arbitration</h3>
            <p className="text-slate-700 mb-4">
              Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA). You agree to waive your right to a jury trial or to participate in a class action lawsuit.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Exception:</strong> You may opt-out of arbitration by emailing <a href="mailto:legal@getpolidata.com" className="text-amber-600 hover:text-amber-700">legal@getpolidata.com</a> within 30 days of account creation.
            </p>
          </section>

          {/* Miscellaneous */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Miscellaneous</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">11.1 Entire Agreement</h3>
            <p className="text-slate-700 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and PoliData.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">11.2 Severability</h3>
            <p className="text-slate-700 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">11.3 Waiver</h3>
            <p className="text-slate-700 mb-4">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">11.4 Assignment</h3>
            <p className="text-slate-700 mb-4">
              You may not assign or transfer these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">11.5 Force Majeure</h3>
            <p className="text-slate-700 mb-4">
              We shall not be liable for any failure to perform due to events beyond our reasonable control (e.g., natural disasters, war, terrorism, pandemics, government actions, internet outages).
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-slate-700">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@getpolidata.com" className="text-amber-600 hover:text-amber-700">legal@getpolidata.com</a></p>
              <p className="mb-2"><strong>Support:</strong> <a href="mailto:support@getpolidata.com" className="text-amber-600 hover:text-amber-700">support@getpolidata.com</a></p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-slate-800 font-semibold mb-2">
                ✅ By using PoliData, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-slate-700 text-sm">
                Last updated: January 28, 2026
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-600 text-sm">
          <p>© 2026 PoliData. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
