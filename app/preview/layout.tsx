import Link from 'next/link';
import Image from 'next/image';
import PreviewNav from '../../components/PreviewNav';

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
          
          <PreviewNav />
          
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
