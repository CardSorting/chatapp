import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Bot, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-colors hover:opacity-90"
        >
          <div className="rounded-lg bg-primary/10 p-2">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold">AI Companion</span>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-auto p-0 font-medium text-base bg-transparent hover:bg-transparent">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6">
                    <h4 className="font-medium leading-none mb-2">
                      AI Companion
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Experience therapeutic conversations in a safe, supportive
                      environment.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="group grid gap-1">
                      <Link
                        to="#gentle-intro"
                        className="text-sm font-medium leading-none group-hover:text-primary"
                      >
                        Gentle Introduction
                      </Link>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        Start your journey at your own pace.
                      </p>
                    </div>
                    <div className="group grid gap-1">
                      <Link
                        to="#ai-characters"
                        className="text-sm font-medium leading-none group-hover:text-primary"
                      >
                        AI Characters
                      </Link>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        Choose from various therapeutic personalities.
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="font-medium text-base transition-colors hover:text-primary"
                asChild
              >
                <Link to="#testimonials">Testimonials</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="font-medium text-base transition-colors hover:text-primary"
                asChild
              >
                <Link to="#about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Link to="/chat">
            <Button
              size="lg"
              className="gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Start Your Journey
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
