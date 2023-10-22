// components/home/prompt.client.tsx
"use client";// Add this line at the top of your file

import { useState } from "react";

export default function Prompt() {
  const [inputPrompt, setInputPrompt] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button onClick={() => console.log(inputPrompt)}>Submit</button>
    </div>
  );
}
