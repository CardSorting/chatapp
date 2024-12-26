import React from "react";

interface TypingIndicatorProps {
  isTyping?: boolean;
}

const TypingIndicator = ({ isTyping = true }: TypingIndicatorProps) => {
  if (!isTyping) return null;

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg w-16 h-8">
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};

export default TypingIndicator;
