import React from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

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
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const [hasNewMessage, setHasNewMessage] = React.useState(false);

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = scrollAreaRef.current;
      const isScrolledToBottom = scrollHeight - clientHeight <= scrollTop + 100;

      if (isScrolledToBottom || hasNewMessage) {
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        setHasNewMessage(false);
      }
    }
  }, [messages, isTyping, hasNewMessage]);

  React.useEffect(() => {
    setHasNewMessage(true);
  }, [messages.length]);

  const groupedMessages = messages.reduce<
    {
      date: string;
      messages: Message[];
    }[]
  >((acc, message) => {
    const date = new Date(message.timestamp).toLocaleDateString();
    const existingGroup = acc.find((group) => group.date === date);

    if (existingGroup) {
      existingGroup.messages.push(message);
    } else {
      acc.push({ date, messages: [message] });
    }

    return acc;
  }, []);

  return (
    <div className="h-[842px] w-full flex flex-col relative overflow-hidden bg-dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <ScrollArea
        className="flex-1 px-4 py-6 relative scroll-smooth"
        ref={scrollAreaRef}
      >
        <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
          {groupedMessages.map((group, groupIndex) => (
            <div key={group.date} className="space-y-6">
              {groupIndex > 0 && (
                <div className="flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/50 bg-background/95 px-3 py-1 rounded-full shadow-sm ring-1 ring-border/5">
                    {group.date}
                  </span>
                </div>
              )}
              {group.messages.map((message, index) => {
                const showAvatar =
                  index === 0 ||
                  group.messages[index - 1]?.isAI !== message.isAI;
                const isLastInGroup =
                  index === group.messages.length - 1 ||
                  group.messages[index + 1]?.isAI !== message.isAI;

                return (
                  <div
                    key={message.id}
                    className={cn(
                      "transition-opacity duration-300",
                      index === group.messages.length - 1 &&
                        "animate-in fade-in-0 slide-in-from-bottom-3",
                      !isLastInGroup && message.isAI && "mb-2",
                      !isLastInGroup && !message.isAI && "mb-2",
                    )}
                  >
                    <MessageBubble
                      message={message.content}
                      isAI={message.isAI}
                      timestamp={message.timestamp}
                      avatar={showAvatar ? message.avatar : undefined}
                    />
                  </div>
                );
              })}
            </div>
          ))}
          {isTyping && (
            <div className="ml-14 animate-in fade-in-0 slide-in-from-bottom-3">
              <TypingIndicator isTyping={true} />
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageList;
