import Link from 'next/link';
import Image from 'next/image';

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Preview header */}
      <header className="bg-slate-900 text-white py-4 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="PoliData Logo"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <Link href="/" className="text-lg font-bold hover:text-amber-500 transition leading-none">
                  PoliData
                </Link>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Preview</span>
              </div>
            </div>
            {/* Mobile waitlist button (visible only on small screens) */}
            <Link
              href="/#waitlist"
              className="md:hidden bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 transition text-xs font-semibold"
            >
              Waitlist
            </Link>
          </div>
          
          <nav className="flex items-center justify-between md:justify-end gap-2 sm:gap-6 text-xs sm:text-sm overflow-x-auto pb-1 md:pb-0">
            <Link href="/preview" className="flex flex-col items-center gap-1 hover:text-amber-500 transition whitespace-nowrap px-2 md:px-0">
              <svg className="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <span>Overview</span>
            </Link>
            <Link href="/preview/dashboard" className="flex flex-col items-center gap-1 hover:text-amber-500 transition whitespace-nowrap px-2 md:px-0">
              <svg className="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <span>Dashboard</span>
            </Link>
            <Link href="/preview/email" className="flex flex-col items-center gap-1 hover:text-amber-500 transition whitespace-nowrap px-2 md:px-0">
              <svg className="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Alerts</span>
            </Link>
            <Link href="/preview/legislators" className="flex flex-col items-center gap-1 hover:text-amber-500 transition whitespace-nowrap px-2 md:px-0">
              <svg className="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>Legislators</span>
            </Link>
          </nav>
          
          {/* Desktop waitlist button */}
          <Link
            href="/#waitlist"
            className="hidden md:block bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition text-sm font-semibold whitespace-nowrap"
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
