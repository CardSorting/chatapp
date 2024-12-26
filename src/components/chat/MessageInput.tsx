import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageInputProps {
  onSend?: (message: string) => void;
  onVoiceInput?: () => void;
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
}

const MessageInput = ({
  onSend = () => {},
  onVoiceInput = () => {},
  isLoading = false,
  placeholder = "Type a message...",
  className = "",
}: MessageInputProps) => {
  const [message, setMessage] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center gap-3 p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky bottom-0 transition-all duration-300",
        "relative group/form",
        isFocused ? "shadow-md" : "shadow-sm",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          "flex-shrink-0 transition-all duration-300",
          "hover:text-primary hover:bg-primary/10 hover:shadow-sm",
          "relative group/mic",
        )}
        onClick={onVoiceInput}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover/mic:opacity-100 transition duration-300" />
        <Mic className="h-5 w-5 relative" />
      </Button>

      <div className="relative flex-1 group/input">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5 rounded-lg opacity-0 group-focus-within:opacity-100 transition duration-300" />
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "flex-1 bg-transparent relative transition-all duration-300",
            "focus-visible:ring-1 shadow-sm hover:shadow-md focus:shadow-md",
            "placeholder:text-muted-foreground/50",
          )}
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        disabled={!message.trim() || isLoading}
        size="icon"
        className={cn(
          "flex-shrink-0 transition-all duration-300 relative group/send",
          message.trim() && !isLoading
            ? cn(
                "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/20",
                "hover:-translate-y-0.5 hover:scale-105",
                "bg-gradient-to-r from-primary to-primary/90",
                "hover:from-primary hover:to-primary",
              )
            : "opacity-70",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover/send:opacity-100 transition duration-300" />
        <Send className="h-5 w-5 relative" />
      </Button>
    </form>
  );
};

export default MessageInput;
