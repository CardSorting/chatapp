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
  avatar,
}: MessageBubbleProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-3 px-2 group/bubble",
        isAI ? "justify-start" : "justify-end",
      )}
    >
      {isAI && (
        <div className={cn("w-8", !avatar && "invisible")}>
          {avatar && (
            <div className="relative group/avatar">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary via-secondary/50 to-primary/20 rounded-full blur opacity-0 group-hover/bubble:opacity-100 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5 rounded-full opacity-0 group-hover/avatar:opacity-100 transition duration-300" />
              <Avatar className="h-8 w-8 ring-2 ring-secondary/50 shadow-sm transition-all duration-300 relative hover:shadow-md hover:ring-secondary/80">
                <img
                  src={avatar}
                  alt="AI Avatar"
                  className="h-full w-full object-cover scale-90 transition-transform duration-300 group-hover/avatar:scale-95"
                />
              </Avatar>
            </div>
          )}
        </div>
      )}

      <div
        className={cn(
          "max-w-[600px] rounded-2xl px-4 py-2.5 transition-all duration-300",
          "relative group/message",
          isAI
            ? "bg-secondary/80 text-secondary-foreground shadow-sm hover:shadow-md hover:bg-secondary/90"
            : "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90",
          isAI ? "rounded-tl-sm" : "rounded-tr-sm",
          "group-hover/bubble:translate-y-[-1px]",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.075] to-transparent opacity-0 group-hover/message:opacity-100 transition duration-500 pointer-events-none rounded-2xl" />
        <p className="text-sm leading-relaxed relative whitespace-pre-wrap break-words">
          {message}
        </p>
        <p
          className={cn(
            "text-[11px] mt-1.5 select-none opacity-70 transition-all duration-300",
            isAI ? "text-muted-foreground" : "text-primary-foreground",
            "group-hover/bubble:opacity-100",
            "relative",
          )}
        >
          {timestamp}
        </p>
      </div>

      {!isAI && (
        <div className={cn("w-8", !avatar && "invisible")}>
          {avatar && (
            <div className="relative group/avatar">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full blur opacity-0 group-hover/bubble:opacity-100 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary/10 rounded-full opacity-0 group-hover/avatar:opacity-100 transition duration-300" />
              <Avatar className="h-8 w-8 ring-2 ring-primary/30 shadow-sm transition-all duration-300 relative hover:shadow-md hover:ring-primary/50">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="h-full w-full object-cover scale-90 transition-transform duration-300 group-hover/avatar:scale-95"
                />
              </Avatar>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
