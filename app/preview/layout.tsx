import Link from 'next/link';

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Preview header */}
      <header className="bg-slate-900 text-white py-4 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded"></div>
            <Link href="/" className="text-xl font-bold hover:text-amber-500 transition">
              PoliData
            </Link>
            <span className="text-slate-400 text-sm">Preview</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/preview" className="hover:text-amber-500 transition">
              Overview
            </Link>
            <Link href="/preview/dashboard" className="hover:text-amber-500 transition">
              Dashboard
            </Link>
            <Link href="/preview/email" className="hover:text-amber-500 transition">
              Email Alerts
            </Link>
            <Link href="/preview/legislators" className="hover:text-amber-500 transition">
              Legislators
            </Link>
          </nav>
          <Link
            href="/#waitlist"
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition text-sm font-semibold"
          >
            Join Waitlist
          </Link>
        </div>
      </header>

      {/* Main content */}
      {children}

      {/* Preview footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            This is a preview of PoliData. The product launches February 2026.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition font-semibold"
          >
            Join Waitlist for Early Access
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            50% off for 6 months • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </footer>
    </>
  );
}
