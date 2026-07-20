const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      <div className="text-center">

        <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <h1 className="text-5xl font-bold">K</h1>
        </div>

        <h2 className="text-blue-400 uppercase tracking-[10px] font-semibold">
          KokoHR
        </h2>

        <h1 className="text-7xl font-black mt-6">
          Coming Soon
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
          Building India's Next Generation Human Resource Management Platform.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <span className="bg-blue-600 px-5 py-2 rounded-full">
            Recruitment
          </span>

          <span className="bg-green-600 px-5 py-2 rounded-full">
            Attendance
          </span>

          <span className="bg-purple-600 px-5 py-2 rounded-full">
            Payroll
          </span>

          <span className="bg-orange-600 px-5 py-2 rounded-full">
            Leave
          </span>

          <span className="bg-pink-600 px-5 py-2 rounded-full">
            Performance
          </span>

        </div>

        <button className="mt-16 bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold">
          Launching Soon
        </button>

        <p className="mt-16 text-gray-500">
          © 2026 KokoHR • All Rights Reserved
        </p>

      </div>

    </div>
  );
};

export default ComingSoon;