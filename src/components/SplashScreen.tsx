"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startFadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 600);
    const removeComponentTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => {
      clearTimeout(startFadeTimer);
      clearTimeout(removeComponentTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none bg-black transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl text-center font-black text-white tracking-widest animate-pulse">
          &lt; EM /&gt;
        </h1>
        <div className="h-1 w-48 bg-zinc-900 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#7a87fb] via-[#ff8faf] to-[#ffd49c] animate-[slide-right_1s_ease-in-out_forwards]"></div>
        </div>
      </div>
    </div>
  );
}