import React from "react";
import CharacterSelector from "./chat/CharacterSelector";
import MessageList from "./chat/MessageList";
import MessageInput from "./chat/MessageInput";

interface HomeProps {
  initialCharacter?: {
    id: string;
    name: string;
    avatar: string;
    description: string;
  };
  initialMessages?: Array<{
    id: string;
    content: string;
    isAI: boolean;
    timestamp: string;
    avatar?: string;
  }>;
}

const Home = ({
  initialCharacter = {
    id: "1",
    name: "Assistant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant",
    description: "Helpful AI Assistant",
  },
  initialMessages = [
    {
      id: "1",
      content: "Hello! How can I assist you today?",
      isAI: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
}: HomeProps) => {
  const [messages, setMessages] = React.useState(initialMessages);
  const [isTyping, setIsTyping] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] =
    React.useState(initialCharacter);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      content: message,
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: "This is a simulated AI response.",
        isAI: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    console.log("Voice input triggered");
  };

  const handleCharacterSelect = (character: typeof initialCharacter) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <CharacterSelector
        selectedCharacter={selectedCharacter}
        onCharacterSelect={handleCharacterSelect}
      />
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput
        onSend={handleSendMessage}
        onVoiceInput={handleVoiceInput}
        isLoading={isTyping}
      />
    </div>
  );
};

export default Home;
