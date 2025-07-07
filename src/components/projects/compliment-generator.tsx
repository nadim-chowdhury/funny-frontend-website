"use client";

import React, { useState } from "react";

const compliments = [
  "You have the best laugh!",
  "Your code is so clean, it sparkles!",
  "You're like a human Stack Overflow!",
  "You make bugs run away in fear!",
  "Your CSS is so good, even IE is jealous!",
  "You debug with the power of a thousand rubber ducks!",
  "You write JavaScript like it's poetry!",
  "You're the MVP of copy-paste!",
  "Your commit messages are legendary!",
  "You could refactor spaghetti into lasagna!",
];

export default function ComplimentGenerator() {
  const [compliment, setCompliment] = useState("");

  const handleClick = () => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(random);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-yellow-100 rounded-lg shadow-md">
      <button
        className="px-4 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-500 transition"
        onClick={handleClick}
      >
        Get a Compliment
      </button>
      {compliment && (
        <div className="text-lg text-yellow-800 font-semibold text-center">
          {compliment}
        </div>
      )}
    </div>
  );
}
