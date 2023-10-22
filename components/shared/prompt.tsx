"use client";

import { useState } from "react";

export default function Prompt() {
  const [inputPrompt, setInputPrompt] = useState("");

  const handleSubmit = async () => {
    const endpoint = "https://vercel-bd87a8e14a83.herokuapp.com/send_prompt"; // Replace '/send_prompt' with the specific endpoint on your backend if it's different

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputPrompt })
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
