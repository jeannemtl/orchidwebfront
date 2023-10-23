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

  return (
    <div>
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        placeholder="Enter your prompterminal..."
      />
      <button onClick={handleSubmit}>Submit</button>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
}
