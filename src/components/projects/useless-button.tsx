"use client";

import React, { useRef, useState } from "react";

export default function UselessButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const moveButton = () => {
    const top = Math.random() * 300;
    const left = Math.random() * 300;
    setPosition({ top, left });
  };

  return (
    <div className="relative h-96 w-full flex items-center justify-center bg-blue-100 rounded-lg shadow-md">
      <button
        ref={buttonRef}
        style={{ position: "absolute", top: position.top, left: position.left }}
        className="px-6 py-3 bg-blue-400 text-white font-bold rounded hover:bg-blue-500 transition cursor-not-allowed"
        onMouseEnter={moveButton}
        onMouseDown={moveButton}
        tabIndex={-1}
        onClick={(e) => e.preventDefault()}
        aria-disabled="true"
      >
        Try to Click Me!
      </button>
    </div>
  );
}
