import React from "react";
import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  isTyping?: boolean;
}

const TypingIndicator = ({ isTyping = true }: TypingIndicatorProps) => {
  if (!isTyping) return null;

  return (
    <div className="group/typing relative inline-flex items-center space-x-1 rounded-2xl bg-secondary/60 px-4 py-2.5 shadow-sm transition-all duration-300 hover:bg-secondary/70 hover:shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.075] to-transparent opacity-0 group-hover/typing:opacity-100 transition duration-500 pointer-events-none rounded-2xl" />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "relative h-2 w-2 rounded-full bg-muted-foreground/50",
            "animate-bounce transition-all duration-300",
            "group-hover/typing:bg-muted-foreground/70",
            "after:absolute after:inset-0 after:rounded-full after:shadow-sm",
            "before:absolute before:-inset-0.5 before:rounded-full before:bg-gradient-to-r before:from-secondary before:to-primary/20 before:opacity-0 before:blur-sm before:transition-opacity before:duration-500 group-hover/typing:before:opacity-100",
          )}
          style={{
            animationDelay: `${i * 150}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;
