import React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

interface MessageBubbleProps {
  message?: string;
  isAI?: boolean;
  timestamp?: string;
  avatar?: string;
}

const MessageBubble = ({
  message = "Hello, how can I help you today?",
  isAI = true,
  timestamp = new Date().toLocaleTimeString(),
  avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${isAI ? "ai" : "user"}`,
}: MessageBubbleProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-2 p-4 bg-white",
        isAI ? "justify-start" : "justify-end",
      )}
    >
      {isAI && (
        <Avatar className="h-8 w-8">
          <img
            src={avatar}
            alt="AI Avatar"
            className="h-full w-full object-cover"
          />
        </Avatar>
      )}

      <div
        className={cn(
          "max-w-[600px] rounded-2xl px-4 py-2",
          isAI ? "bg-gray-100 text-gray-900" : "bg-blue-500 text-white",
        )}
      >
        <p className="text-sm">{message}</p>
        <p
          className={cn(
            "text-xs mt-1",
            isAI ? "text-gray-500" : "text-blue-100",
          )}
        >
          {timestamp}
        </p>
      </div>

      {!isAI && (
        <Avatar className="h-8 w-8">
          <img
            src={avatar}
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </Avatar>
      )}
    </div>
  );
};

export default MessageBubble;
