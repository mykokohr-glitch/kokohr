import { motion } from "framer-motion";

const blobs = [
  {
    size: 420,
    top: "-120px",
    left: "-120px",
    color: "from-cyan-400/40 to-blue-600/20",
    duration: 18,
    x: 120,
    y: -80,
  },
  {
    size: 350,
    top: "120px",
    right: "-100px",
    color: "from-blue-500/30 to-indigo-600/20",
    duration: 22,
    x: -100,
    y: 100,
  },
  {
    size: 300,
    bottom: "-80px",
    left: "30%",
    color: "from-violet-500/30 to-fuchsia-500/20",
    duration: 20,
    x: 80,
    y: -70,
  },
  {
    size: 220,
    bottom: "80px",
    right: "15%",
    color: "from-sky-400/30 to-cyan-500/20",
    duration: 14,
    x: 60,
    y: -50,
  },
];

export default function FloatingBlobs() {
  return (
    <>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, blob.x, 0],
            y: [0, blob.y, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[130px]"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        >
          {/* Gradient */}
          <div
            className={`h-full w-full rounded-full bg-gradient-to-br ${blob.color}`}
          />

          {/* Glass Ring */}
          <div className="absolute inset-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl" />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_120px_rgba(56,189,248,.35)]" />
        </motion.div>
      ))}

      {/* Floating Glass Particles */}

      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full border border-white/10 bg-white/10 backdrop-blur-lg"
          style={{
            width: 8 + (index % 6) * 6,
            height: 8 + (index % 6) * 6,
            left: `${(index * 13) % 95}%`,
            top: `${(index * 17) % 90}%`,
          }}
        />
      ))}
    </>
  );
}