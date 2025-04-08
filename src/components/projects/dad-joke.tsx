"use client";

import React, { useState } from "react";

const jokes = [
  "I'm afraid for the calendar. Its days are numbered.",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "Why did the math book look sad? Because it had too many problems.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to be addicted to soap, but I’m clean now.",
  "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "I would tell you a construction joke, but I'm still working on it.",
  "Did you hear about the circus fire? It was in tents.",
];

export default function DadJoke() {
  const [joke, setJoke] = useState("Click the button for a dad joke!");

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Dad Joke Generator 🤓
      </h2>
      <p className="text-lg text-gray-600 min-h-[60px] transition-all duration-300">
        {joke}
      </p>
      <button
        onClick={getRandomJoke}
        className="px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition"
      >
        Tell Me A Joke
      </button>
    </div>
  );
}
