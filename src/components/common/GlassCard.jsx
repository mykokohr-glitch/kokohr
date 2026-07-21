export default function GlassCard({
  icon,
  title,
  value,
  color = "cyan",
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className={`rounded-xl bg-${color}-500/20 p-3`}>
          {icon}
        </div>

        <div>
          <p className="text-slate-400">{title}</p>
          <h3 className="text-xl font-bold text-white">{value}</h3>
        </div>
      </div>
    </div>
  );
}