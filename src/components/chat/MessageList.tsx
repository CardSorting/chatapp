import React from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: string;
  avatar?: string;
}

interface MessageListProps {
  messages?: Message[];
  isTyping?: boolean;
}

const MessageList = ({
  messages = [
    {
      id: "1",
      content: "Hello! How can I assist you today?",
      isAI: true,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: "2",
      content: "I have a question about my account.",
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: "3",
      content: "I'd be happy to help you with any account-related questions.",
      isAI: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  isTyping = false,
}: MessageListProps) => {
  return (
    <div className="h-[842px] w-full bg-gray-50 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message.content}
              isAI={message.isAI}
              timestamp={message.timestamp}
              avatar={message.avatar}
            />
          ))}
          {isTyping && (
            <div className="ml-4">
              <TypingIndicator isTyping={true} />
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageList;
