import { motion } from "framer-motion";
import {
  Users,
  CalendarCheck,
  Wallet,
  ShieldCheck,
  TrendingUp,
  Bell,
} from "lucide-react";

import GlassCard from "../common/GlassCard";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative"
    >
      {/* Main Dashboard */}

      <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)]">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              HR Dashboard
            </h2>

            <p className="mt-1 text-slate-400">
              Live Workforce Overview
            </p>
          </div>

          <div className="rounded-xl bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
            ● Online
          </div>

        </div>

        {/* Cards */}

        <div className="mt-8 space-y-5">

          <GlassCard
            icon={<Users size={24} />}
            title="Employees"
            value="12,584"
            color="cyan"
          />

          <GlassCard
            icon={<CalendarCheck size={24} />}
            title="Attendance"
            value="98%"
            color="emerald"
          />

          <GlassCard
            icon={<Wallet size={24} />}
            title="Payroll"
            value="₹1.82 Cr"
            color="blue"
          />

          <GlassCard
            icon={<ShieldCheck size={24} />}
            title="Compliance"
            value="100%"
            color="purple"
          />

        </div>

        {/* Bottom Analytics */}

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/40 p-5">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-slate-400">
              Productivity
            </span>

            <TrendingUp
              className="text-cyan-400"
              size={18}
            />

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-700">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{
                duration: 1.5,
                delay: 0.8,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />

          </div>

          <div className="mt-3 flex justify-between text-sm">

            <span className="text-slate-400">
              Overall Performance
            </span>

            <span className="font-semibold text-cyan-400">
              87%
            </span>

          </div>

        </div>

      </div>

      {/* Floating Attendance */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -left-10 top-12 rounded-2xl border border-cyan-400/20 bg-white/10 p-5 backdrop-blur-xl shadow-xl"
      >

        <p className="text-sm text-slate-300">
          Today's Attendance
        </p>

        <h2 className="mt-2 text-3xl font-black text-cyan-400">
          98%
        </h2>

      </motion.div>

      {/* Floating Notification */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -right-8 bottom-16 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-xl"
      >

        <div className="rounded-xl bg-cyan-500/20 p-3">

          <Bell
            size={22}
            className="text-cyan-400"
          />

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Pending Requests
          </p>

          <h4 className="font-bold text-white">
            18 Approvals
          </h4>

        </div>

      </motion.div>

    </motion.div>
  );
}