"use client";
import { useState } from "react";

export default function Prompt() {
  const [inputPrompt, setInputPrompt] = useState("");
  const [message, setMessage] = useState(""); // State for feedback to the user

  const handleSubmit = async () => {
    const endpoint = "http://127.0.0.1:5000/send_prompt"
; // Ensure this URL points to your backend

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputPrompt })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Prompt sent successfully!"); // Set success message
        setInputPrompt(""); // Clear the input field
      } else {
        setMessage(`Error: ${data.message || "Failed to send prompt"}`); // Set error message from server response or a default message
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setMessage("Failed to send prompt due to a network error."); // Set a generic error message
    }
  };

  // ...

return (
  <div>
    <input
      type="text"
      value={inputPrompt}
      onChange={(e) => setInputPrompt(e.target.value)}
      placeholder="Enter your prompt for chatgpt..."
      style={{ width: "100%" }} // This will make the input field take up the full width of its parent container
    />
   <button
  onClick={handleSubmit}
  className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
>
  <svg
    className="h-4 w-4 group-hover:text-black"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L20 20H4L12 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <p>Submit</p>
</button>

    {message && <p>{message}</p>} {/* Display feedback message */}
  </div>
);

}
