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
      className={cn("flex items-center gap-2 p-4 border-t bg-white", className)}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="flex-shrink-0"
        onClick={onVoiceInput}
      >
        <Mic className="h-5 w-5" />
      </Button>

      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        className="flex-1"
        disabled={isLoading}
      />

      <Button
        type="submit"
        disabled={!message.trim() || isLoading}
        className="flex-shrink-0"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default MessageInput;
