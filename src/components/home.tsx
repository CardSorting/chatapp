import React from "react";
import CharacterSelector from "./chat/CharacterSelector";
import MessageList from "./chat/MessageList";
import MessageInput from "./chat/MessageInput";

interface Character {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: string;
  avatar?: string;
}

interface HomeProps {
  initialCharacter?: Character;
  initialMessages?: Message[];
}

const defaultCharacter: Character = {
  id: "1",
  name: "Assistant",
  avatar:
    "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant&backgroundColor=b6e3f4",
  description: "Helpful AI Assistant",
};

const defaultMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm your AI companion. How can I assist you today?",
    isAI: true,
    timestamp: new Date().toISOString(),
    avatar: defaultCharacter.avatar,
  },
];

const Home = ({
  initialCharacter = defaultCharacter,
  initialMessages = defaultMessages,
}: HomeProps) => {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] =
    React.useState<Character>(initialCharacter);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isAI: false,
      timestamp: new Date().toISOString(),
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=user&backgroundColor=c0aede",
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setIsTyping(true);
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: "I understand your message. How can I help you further?",
          isAI: true,
          timestamp: new Date().toISOString(),
          avatar: selectedCharacter.avatar,
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      },
      1500 + Math.random() * 1000,
    ); // Random delay between 1.5-2.5s for more natural feeling
  };

  const handleVoiceInput = () => {
    // Implement voice input functionality
    console.log("Voice input triggered");
  };

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    const systemMessage: Message = {
      id: Date.now().toString(),
      content: `You are now chatting with ${character.name}, ${character.description.toLowerCase()}.`,
      isAI: true,
      timestamp: new Date().toISOString(),
      avatar: character.avatar,
    };
    setMessages((prev) => [...prev, systemMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <CharacterSelector
        selectedCharacter={selectedCharacter}
        onCharacterSelect={handleCharacterSelect}
      />
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput
        onSend={handleSendMessage}
        onVoiceInput={handleVoiceInput}
        isLoading={isTyping}
        placeholder={`Message ${selectedCharacter.name}...`}
      />
    </div>
  );
};

export default Home;
