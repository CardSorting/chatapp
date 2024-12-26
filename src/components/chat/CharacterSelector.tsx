import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Character {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

interface CharacterSelectorProps {
  selectedCharacter?: Character;
  characters?: Character[];
  onCharacterSelect?: (character: Character) => void;
}

const defaultCharacters: Character[] = [
  {
    id: "1",
    name: "Assistant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant",
    description: "Helpful AI Assistant",
  },
  {
    id: "2",
    name: "Mentor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor",
    description: "Wise AI Mentor",
  },
  {
    id: "3",
    name: "Friend",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=friend",
    description: "Friendly AI Companion",
  },
];

const CharacterSelector = ({
  selectedCharacter = defaultCharacters[0],
  characters = defaultCharacters,
  onCharacterSelect = () => {},
}: CharacterSelectorProps) => {
  return (
    <div className="w-full h-20 px-4 flex items-center justify-between border-b bg-white">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <img
            src={selectedCharacter.avatar}
            alt={selectedCharacter.name}
            className="h-full w-full object-cover"
          />
        </Avatar>
        <div>
          <h3 className="font-medium text-lg">{selectedCharacter.name}</h3>
          <p className="text-sm text-gray-500">
            {selectedCharacter.description}
          </p>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            Change Character
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {characters.map((character) => (
            <DropdownMenuItem
              key={character.id}
              onClick={() => onCharacterSelect(character)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Avatar className="h-6 w-6">
                <img
                  src={character.avatar}
                  alt={character.name}
                  className="h-full w-full object-cover"
                />
              </Avatar>
              <span>{character.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CharacterSelector;
