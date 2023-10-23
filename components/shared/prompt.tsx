"use client";
import { useState } from "react";
import './prompt.css';

type MessageType = {
  type: "success" | "error";
  text: string;
} | null;


export default function Prompt() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [message, setMessage] = useState<MessageType>(null);


  const endpoint = "http://127.0.0.1:5000/send_prompt"; 

  const handleApiCall = async () => {
    setIsLoading(true);
    
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
        setMessage({
          type: "success",
          text: "Check out what she says on TG!"
        });
        setInputPrompt(""); 
      } else {
        setMessage({
          type: "error",
          text: `Error: ${data.message || "Failed to send prompt"}`
        });
      }
      setIsLoading(false); 
    } catch (error) {
      console.error("Error sending data:", error);
      setMessage({
        type: "error",
        text: "Failed to send prompt due to a network error."
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="prompt-container">
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        placeholder="Go ahead, chat with her..."
        aria-label="Chat input"
        className="prompt-input"
      />
      <button
        onClick={handleApiCall}
        className="submit-button"
        aria-label="Submit"
      >
        {isLoading ? (
          <span className="spinner" aria-label="Loading"></span>
        ) : (
          <>
            <svg
              className="submit-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
  
      {message && (
        <p className={`feedback-message ${message.type}`}>
          {message.text}
        </p>
      )}
    </div>
  );
}
