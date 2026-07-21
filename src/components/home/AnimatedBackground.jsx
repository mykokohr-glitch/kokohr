import FloatingBlobs from "./FloatingBlobs";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07132c] to-slate-950" />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb25,transparent_40%),radial-gradient(circle_at_bottom_left,#06b6d425,transparent_40%)]" />

      {/* Floating Animated Blobs */}
      <FloatingBlobs />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-cyan-600/10 to-transparent blur-3xl" />

    </div>
  );
}