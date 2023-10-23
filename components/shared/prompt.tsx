"use client";
import { useState } from "react";
import './prompt.css';


export default function Prompt() {
  const [isLoading, setIsLoading] = useState(false);

  const [inputPrompt, setInputPrompt] = useState("");
  const [message, setMessage] = useState(""); // State for feedback to the user

  const handleSubmit = async () => {
    setIsLoading(true); 
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
        setMessage("Check what she says on TG!"); // Set success message
        setInputPrompt(""); // Clear the input field
        setIsLoading(false); 
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        placeholder="Go ahead, chat with her..."
        style={{
          width: "100%",
          borderRadius: "15px",
          padding: "15px 10px",
          border: "1px solid #ccc",
          marginBottom: "10px" // Adds space below the input field
        }}
      />
      <button
  onClick={handleSubmit}
  className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
>
  {isLoading ? (
    // Spinner loader here
    <span className="spinner"></span>
  ) : (
    <>
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
    </>
  )}
</button>

  
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
  
  
}


