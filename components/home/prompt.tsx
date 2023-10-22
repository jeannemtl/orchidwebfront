import { useState } from "react";

export default function Prompt() {
  const [inputPrompt, setInputPrompt] = useState("");
  const [generatedPrompts, setGeneratedPrompts] = useState<string[]>([]);

  const handleSubmit = () => {
    // Assuming you have some logic to generate prompts based on the inputPrompt
    const newPrompt = `${inputPrompt} - generated`; // Example
    setGeneratedPrompts(prev => [...prev, newPrompt]);
  };

  return (
    <div>
      <input
        value={inputPrompt}
        onChange={e => setInputPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button onClick={handleSubmit}>Generate</button>

      <div className="flex">
        {/* Left Column */}
        <div>
          {generatedPrompts.slice(0, Math.ceil(generatedPrompts.length / 2)).map(prompt => (
            <p key={prompt}>{prompt}</p>
          ))}
        </div>
        {/* Right Column */}
        <div>
          {generatedPrompts.slice(Math.ceil(generatedPrompts.length / 2)).map(prompt => (
            <p key={prompt}>{prompt}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

