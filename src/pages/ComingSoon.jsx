const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        {/* Logo */}
        <div className="mx-auto w-28 h-28 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl">
          <h1 className="text-5xl font-black">K</h1>
        </div>

        {/* Brand */}
        <p className="mt-8 uppercase tracking-[10px] text-cyan-400 font-semibold">
          KokoHR
        </p>

        {/* Heading */}
        <h1 className="mt-5 text-6xl md:text-8xl font-black">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-gray-300 leading-9 max-w-3xl mx-auto">
          A Complete Human Resource Management System for modern organizations.
          Recruitment, Attendance, Leave, Payroll, Performance Management,
          Training, Reports and much more.
        </p>

        {/* Features */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <span className="px-5 py-3 rounded-full bg-blue-600">
            Recruitment
          </span>

          <span className="px-5 py-3 rounded-full bg-green-600">
            Attendance
          </span>

          <span className="px-5 py-3 rounded-full bg-purple-600">
            Payroll
          </span>

          <span className="px-5 py-3 rounded-full bg-orange-600">
            Leave
          </span>

          <span className="px-5 py-3 rounded-full bg-pink-600">
            Performance
          </span>

          <span className="px-5 py-3 rounded-full bg-cyan-600">
            Training
          </span>

          <span className="px-5 py-3 rounded-full bg-red-600">
            Reports
          </span>

          <span className="px-5 py-3 rounded-full bg-indigo-600">
            Employee Portal
          </span>

        </div>

        {/* Button */}
        <button className="mt-16 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-10 py-4 rounded-xl text-xl font-semibold shadow-xl">
          Launching Soon
        </button>

        {/* Footer */}
        <div className="mt-20 border-t border-slate-700 pt-8">

          <p className="text-gray-400">
            © 2026 KokoHR • Human Resource Management System
          </p>

          <p className="mt-2 text-gray-500">
            Powered by React • Tailwind CSS • PHP • MySQL
          </p>

        </div>

      </div>

    </div>
  );
};

export default ComingSoon;