const Loader = ({ message = "Loading...", fullScreen = false }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 ${
        fullScreen ? "min-h-screen" : "py-8"
      }`}
    >
      {/* Dual counter-rotating rings */}
      <div className="relative flex items-center justify-center w-14 h-14">
        <div
          className="w-14 h-14 rounded-full border-[3px] border-gray-200 dark:border-zinc-800 border-t-gray-900 dark:border-t-zinc-100"
          style={{ animation: "spin .9s cubic-bezier(.6,.2,.4,.8) infinite" }}
        />
        <div
          className="absolute w-[38px] h-[38px] rounded-full border-[3px] border-gray-200 dark:border-zinc-800 border-b-gray-500 dark:border-b-zinc-400"
          style={{ animation: "spin-reverse .7s cubic-bezier(.6,.2,.4,.8) infinite" }}
        />
      </div>

      {/* Bouncing dots */}
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-500"
            style={{ animation: `fadeUp 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>

      {message && (
        <p
          className="text-xs tracking-widest text-gray-400 dark:text-zinc-500 uppercase"
          style={{ animation: "pulse-text 1.8s ease-in-out infinite" }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Loader;