"use client";

import React, { useState } from "react";
import Image from "next/image";

const memeTemplates = [
  {
    id: "drake",
    src: "/memes/drake.jpg",
    alt: "Drake meme",
  },
  {
    id: "distracted-boyfriend",
    src: "/memes/boyfriend.jpg",
    alt: "Distracted Boyfriend meme",
  },
  {
    id: "success-kid",
    src: "/memes/success.jpg",
    alt: "Success Kid meme",
  },
];

export default function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [selectedMeme, setSelectedMeme] = useState(memeTemplates[0]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Top text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {memeTemplates.map((meme) => (
          <button
            key={meme.id}
            onClick={() => setSelectedMeme(meme)}
            className={`p-1 border rounded hover:border-yellow-400 ${
              selectedMeme.id === meme.id
                ? "border-yellow-500"
                : "border-transparent"
            }`}
          >
            <Image
              src={meme.src}
              alt={meme.alt}
              width={100}
              height={100}
              className="rounded"
            />
          </button>
        ))}
      </div>

      <div className="relative max-w-lg mx-auto mt-6">
        <Image
          src={selectedMeme.src}
          alt={selectedMeme.alt}
          width={600}
          height={600}
          className="rounded shadow"
        />
        <p className="absolute top-4 w-full text-center text-white text-2xl font-black drop-shadow-lg uppercase px-2">
          {topText}
        </p>
        <p className="absolute bottom-4 w-full text-center text-white text-2xl font-black drop-shadow-lg uppercase px-2">
          {bottomText}
        </p>
      </div>
    </div>
  );
}
