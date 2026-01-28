import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="PoliData Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">PoliData</span>
            </div>
            <p className="text-slate-400 mb-4">
              Track federal legislation & politicians in real-time. Built for small advocacy teams.
            </p>
            <p className="text-sm text-slate-500">
              © 2026 PoliData. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#pricing" className="hover:text-amber-500 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-amber-500 transition">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/privacy" className="hover:text-amber-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-amber-500 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@getpolidata.com"
                  className="hover:text-amber-500 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-500 text-center">
            Made with 🛡️ by Aegis • Powered by Congress.gov open data
          </p>
        </div>
      </div>
    </footer>
  );
}
