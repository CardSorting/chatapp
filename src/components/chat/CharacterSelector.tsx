import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant&backgroundColor=b6e3f4",
    description: "Helpful AI Assistant",
  },
  {
    id: "2",
    name: "Mentor",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor&backgroundColor=c0aede",
    description: "Wise AI Mentor",
  },
  {
    id: "3",
    name: "Friend",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=friend&backgroundColor=ffb6c1",
    description: "Friendly AI Companion",
  },
];

const CharacterSelector = ({
  selectedCharacter = defaultCharacters[0],
  characters = defaultCharacters,
  onCharacterSelect = () => {},
}: CharacterSelectorProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full h-20 px-4 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <Avatar className="h-12 w-12 ring-2 ring-primary/10 transition-all duration-300 relative hover:ring-primary/30 shadow-sm hover:shadow-md">
            <img
              src={selectedCharacter.avatar}
              alt={selectedCharacter.name}
              className="h-full w-full object-cover scale-90 transition-transform duration-300 group-hover:scale-95"
            />
          </Avatar>
        </div>
        <div className="space-y-0.5 group cursor-pointer">
          <h3 className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 transition-all duration-300 group-hover:from-primary/90 group-hover:to-primary">
            {selectedCharacter.name}
          </h3>
          <p className="text-sm text-muted-foreground/90 transition-colors duration-300 group-hover:text-muted-foreground">
            {selectedCharacter.description}
          </p>
        </div>
      </div>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "gap-2 transition-all duration-300",
              isOpen
                ? "bg-secondary/80 shadow-md ring-2 ring-secondary"
                : "hover:bg-secondary/80 hover:shadow-md",
            )}
            size="sm"
          >
            Change Character
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform duration-300",
                isOpen && "rotate-180",
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 p-2" sideOffset={8}>
          {characters.map((character, index) => (
            <React.Fragment key={character.id}>
              {index > 0 && <DropdownMenuSeparator className="my-1" />}
              <DropdownMenuItem
                onClick={() => {
                  onCharacterSelect(character);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 cursor-pointer rounded-lg py-2.5 px-3 transition-all duration-300",
                  "hover:bg-secondary/80 hover:shadow-sm focus:bg-secondary/80",
                  "group/item relative",
                )}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur opacity-0 group-hover/item:opacity-100 transition duration-300" />
                  <Avatar className="h-9 w-9 ring-1 ring-primary/5 shadow-sm transition-all duration-300 hover:shadow-md hover:ring-primary/20 relative">
                    <img
                      src={character.avatar}
                      alt={character.name}
                      className="h-full w-full object-cover scale-90 transition-transform duration-300 group-hover/item:scale-95"
                    />
                  </Avatar>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="font-medium text-sm">{character.name}</span>
                  <span className="text-xs text-muted-foreground/80 line-clamp-1 transition-colors duration-300 group-hover/item:text-muted-foreground">
                    {character.description}
                  </span>
                </div>
                {selectedCharacter.id === character.id && (
                  <Check className="h-4 w-4 text-primary animate-in fade-in-0 zoom-in-50" />
                )}
              </DropdownMenuItem>
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CharacterSelector;
