import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
      <div className="text-center max-w-md">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
            404
          </h1>
          <p className="text-gray-400 text-lg mb-2">Admin Page Not Found</p>
          <p className="text-gray-500 text-sm">
            The admin page you're looking for doesn't exist or is not accessible.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3 mb-8">
          <p className="text-gray-400 text-sm font-semibold mb-4">Admin pages:</p>
          <div className="grid gap-2">
            <Link
              href="/admin/login"
              className="block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Admin Login
            </Link>
            <Link
              href="/admin/leads"
              className="block px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Leads
            </Link>
            <Link
              href="/"
              className="block px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>

        {/* Error Message */}
        <div className="border border-gray-700 rounded-lg bg-slate-800/50 p-4 text-left">
          <p className="text-gray-400 text-xs font-mono">
            Error: The requested admin endpoint could not be found.
          </p>
        </div>
      </div>
    </div>
  );
}
