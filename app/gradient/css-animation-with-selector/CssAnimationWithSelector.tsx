"use client";

import { useEffect, useRef, useState } from "react";
import "./css-animation-with-selector.css";

enum Feeling {
  Sad = 1,
  Neutral = 2,
  Happy = 3,
}

const feelingColorMap = {
  [Feeling.Sad]: ["#394e7a", "	#8e9ac7", "#4ee"],
  [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
  [Feeling.Happy]: ["#39f", "#f4e54d", "#fa3"],
};

const feelingLabelMap = {
  [Feeling.Sad]: "Could be better",
  [Feeling.Neutral]: "Okay",
  [Feeling.Happy]: "Happy",
};

export const CssAnimationWithSelector = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [feeling, setFeeling] = useState<Feeling>(Feeling.Neutral);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const [a, b, c] = feelingColorMap[feeling];

    wrapperRef.current.style.setProperty("--color-a", a);
    wrapperRef.current.style.setProperty("--color-b", b);
    wrapperRef.current.style.setProperty("--color-c", c);
  }, [feeling]);

  return (
    <div className="css-animation-with-selector-wrapper flex w-full items-center justify-center  ">
      <div
        ref={wrapperRef}
        className="blobclass relative mx-auto aspect-[9/16] w-[360px] max-w-full overflow-hidden rounded-2xl [transition-property:_--color-a,_--color-b,_--color-c] ease-in duration-500 bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] text-white  "
      >
        <div className="relative z-10">
          <h1 className="mb-12 text-5xl font-medium leading-tight text-center">
            How are you feeling today?
          </h1>
          <h2 className="mb-4 text-center text-2xl font-medium">
            {feelingLabelMap[feeling]}
          </h2>
          <div className="px-8">
            <input
              className="range"
              onChange={(e) =>
                setFeeling(e.target.value as unknown as 1 | 2 | 3)
              }
              type="range"
              min={1}
              max={3}
              step={1}
              value={feeling}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
