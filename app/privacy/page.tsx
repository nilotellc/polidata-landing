import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PoliData",
  description: "How PoliData collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">
          <strong>Effective Date:</strong> January 28, 2026<br />
          <strong>Last Updated:</strong> January 28, 2026
        </p>

        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-700 mb-4">
              PoliData (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>getpolidata.com</strong> and use our services.
            </p>
            <p className="text-slate-700 mb-4">
              By using PoliData, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Personal Information</h3>
            <p className="text-slate-700 mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Join our waitlist (name, email address, organization, role)</li>
              <li>Create an account (name, email address, password, organization details)</li>
              <li>Subscribe to our service (billing information processed by Stripe)</li>
              <li>Contact us for support (name, email address, message content)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-slate-700 mb-4">
              When you visit our website, we automatically collect certain information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Analytics Data:</strong> We use Plausible Analytics (privacy-focused, GDPR-compliant) to collect anonymized usage data: page views, referrers, country, device type. No cookies, no personal data tracking.</li>
              <li><strong>Log Data:</strong> IP address, browser type, pages visited, time/date stamps (stored temporarily for security and performance)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.3 Usage Data</h3>
            <p className="text-slate-700 mb-4">
              When you use PoliData&apos;s service, we collect:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Bills you track and save</li>
              <li>Searches and filters you use</li>
              <li>Email notification preferences</li>
              <li>Feature usage patterns (to improve the product)</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Provide Services:</strong> Create your account, deliver bill tracking, send email alerts</li>
              <li><strong>Process Payments:</strong> Handle subscriptions via Stripe (we do not store credit card details)</li>
              <li><strong>Communication:</strong> Send waitlist updates, product announcements, billing notifications, customer support responses</li>
              <li><strong>Improve Product:</strong> Analyze usage patterns to enhance features and user experience</li>
              <li><strong>Security:</strong> Detect and prevent fraud, abuse, and technical issues</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. How We Share Your Information</h2>
            <p className="text-slate-700 mb-4">
              We <strong>do not sell</strong> your personal information. We only share your data with:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Service Providers</h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>SendGrid:</strong> Email delivery for notifications and alerts</li>
              <li><strong>Stripe:</strong> Payment processing (subject to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">Stripe&apos;s Privacy Policy</a>)</li>
              <li><strong>Supabase:</strong> Database hosting (encrypted storage)</li>
              <li><strong>Render:</strong> Application hosting infrastructure</li>
              <li><strong>Plausible Analytics:</strong> Privacy-focused analytics (no personal data shared)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Legal Requirements</h3>
            <p className="text-slate-700 mb-4">
              We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.3 Business Transfers</h3>
            <p className="text-slate-700 mb-4">
              If PoliData is acquired or merged, your information may be transferred to the new owner. We will notify you before your data is subject to a different privacy policy.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Encryption:</strong> Data encrypted in transit (HTTPS/TLS) and at rest (AES-256)</li>
              <li><strong>Authentication:</strong> Passwords hashed with bcrypt</li>
              <li><strong>Access Controls:</strong> Strict internal access policies</li>
              <li><strong>Monitoring:</strong> Regular security audits and vulnerability scanning</li>
            </ul>
            <p className="text-slate-700 mb-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
            <p className="text-slate-700 mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
              <li><strong>Deleted Accounts:</strong> Data deleted within 30 days of account deletion (except as required by law)</li>
              <li><strong>Waitlist Data:</strong> Retained until you unsubscribe or we launch the product</li>
              <li><strong>Billing Records:</strong> Retained for 7 years (tax/legal compliance)</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Your Privacy Rights</h2>
            <p className="text-slate-700 mb-4">
              Depending on your location, you may have the following rights:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.1 GDPR Rights (EU/EEA Users)</h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your data for certain purposes</li>
              <li><strong>Restriction:</strong> Restrict processing of your data in certain circumstances</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (doesn&apos;t affect prior processing)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.2 CCPA Rights (California Users)</h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Know:</strong> Request disclosure of data we collect, use, and share</li>
              <li><strong>Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of sale of personal information (we do not sell data)</li>
              <li><strong>Non-Discrimination:</strong> Equal service and pricing regardless of privacy rights exercise</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">7.3 How to Exercise Your Rights</h3>
            <p className="text-slate-700 mb-4">
              To exercise any of these rights, email us at: <a href="mailto:privacy@getpolidata.com" className="text-amber-600 hover:text-amber-700">privacy@getpolidata.com</a>
            </p>
            <p className="text-slate-700 mb-4">
              We will respond within 30 days. We may ask you to verify your identity before fulfilling your request.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-slate-700 mb-4">
              PoliData is not intended for users under 18 years old. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately at <a href="mailto:privacy@getpolidata.com" className="text-amber-600 hover:text-amber-700">privacy@getpolidata.com</a>.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. International Data Transfers</h2>
            <p className="text-slate-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Standard Contractual Clauses (EU-approved)</li>
              <li>Service providers certified under EU-US Data Privacy Framework</li>
              <li>Encryption and security measures meeting international standards</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Third-Party Links</h2>
            <p className="text-slate-700 mb-4">
              Our website may contain links to third-party sites (e.g., Congress.gov). We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>Posting the updated policy on this page</li>
              <li>Updating the &quot;Last Updated&quot; date</li>
              <li>Sending email notification for material changes (if you have an account)</li>
            </ul>
            <p className="text-slate-700 mb-4">
              Your continued use of PoliData after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-slate-700">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@getpolidata.com" className="text-amber-600 hover:text-amber-700">privacy@getpolidata.com</a></p>
              <p className="mb-2"><strong>Support:</strong> <a href="mailto:support@getpolidata.com" className="text-amber-600 hover:text-amber-700">support@getpolidata.com</a></p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
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
