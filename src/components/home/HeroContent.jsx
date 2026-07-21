import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import Button from "../common/Button";
import HeroStats from "./Stats";
import TrustedCompanies from "./TrustedCompanies";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="max-w-2xl"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
      >
        <span className="mr-2 text-lg">🚀</span>

        <span className="text-sm font-medium text-cyan-300">
          Next Generation HR Software
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl"
      >
        Smart HR

        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Management
        </span>

        Platform
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
      >
        Manage your entire workforce with one intelligent HR platform.

        Recruitment, Attendance, Payroll, Leave Management,
        Performance Management, Employee Self-Service,
        Compliance, Analytics and AI Automation—all in one place.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Button
          variant="primary"
          icon={<ArrowRight size={18} />}
        >
          Get Started
        </Button>

        <Button
          variant="secondary"
          icon={<PlayCircle size={20} />}
        >
          Watch Demo
        </Button>
      </motion.div>

      {/* Statistics */}
      <Stats />

      {/* Trusted Companies */}
      <TrustedCompanies />
    </motion.div>
  );
}