import { motion } from "framer-motion";

export default function Button({
  children,
  icon,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-2xl",

    secondary:
      "border border-white/10 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15 hover:border-cyan-400/40",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}

      <span className="relative flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.button>
  );
}