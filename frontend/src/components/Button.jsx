
const Button = ({ children, onClick, type = "primary", loading = false }) => {
  const base = [
    "relative overflow-hidden",
    "px-5 py-2.5 rounded-xl",
    "font-semibold text-sm tracking-wide text-white",
    "transition-all duration-200 ease-out",
    "active:scale-95",
    "before:absolute before:inset-0",
    "before:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,0.22)_50%,transparent_70%)]",
    "before:translate-x-[-100%] hover:before:translate-x-[100%]",
    "before:transition-transform before:duration-500 before:ease-in-out",
  ].join(" ");

  const variants = {
    primary: [
      "bg-gradient-to-br from-indigo-500 to-indigo-400",
      "shadow-[0_4px_15px_rgba(99,102,241,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
      "hover:-translate-y-0.5 hover:scale-[1.02]",
      "hover:shadow-[0_8px_25px_rgba(99,102,241,0.55)]",
      "hover:brightness-110",
    ].join(" "),

    secondary: [
      "bg-gradient-to-br from-gray-700 to-gray-600",
      "shadow-[0_4px_15px_rgba(55,65,81,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]",
      "hover:-translate-y-0.5 hover:scale-[1.02]",
      "hover:shadow-[0_8px_25px_rgba(55,65,81,0.55)]",
      "hover:brightness-110",
    ].join(" "),
  };

  const addRipple = (e) => {
    const btn = e.currentTarget;
    const r = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    Object.assign(r.style, {
      position: "absolute",
      width: `${size}px`, height: `${size}px`,
      left: `${e.clientX - rect.left - size / 2}px`,
      top: `${e.clientY - rect.top - size / 2}px`,
      background: "rgba(255,255,255,0.28)",
      borderRadius: "50%",
      transform: "scale(0)",
      animation: "ripple 600ms linear forwards",
      pointerEvents: "none",
    });
    btn.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  };

  return (
    <>
      <style>{`
        @keyframes ripple { to { transform: scale(4); opacity: 0; } }
      `}</style>
      <button
        onClick={(e) => { addRipple(e); onClick?.(e); }}
        disabled={loading}
        className={`${base} ${variants[type] ?? variants.primary} ${
          loading ? "opacity-75 cursor-wait" : "cursor-pointer"
        } inline-flex items-center gap-2`}
      >
        {loading && (
          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {children}
      </button>
    </>
  );
};

export default Button;