import { motion } from "framer-motion";

const companies = [
  "Bajaj",
  "Infosys",
  "TCS",
  "Wipro",
  "Reliance",
  "HCL",
];

export default function TrustedCompanies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.8,
      }}
      className="mt-14"
    >
      <p className="mb-6 text-sm font-medium uppercase tracking-[4px] text-slate-500">
        Trusted by Leading Companies
      </p>

      <div className="flex flex-wrap items-center gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={company}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1 + index * 0.1,
            }}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            className="cursor-pointer rounded-xl border border-transparent px-4 py-2 text-lg font-semibold text-slate-400 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/5 hover:text-cyan-400"
          >
            {company}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}