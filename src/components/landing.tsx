import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Heart, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />

      <div className="container relative">
        {/* Hero Section */}
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-24 md:py-32">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Experience Therapy, Risk-Free
          </span>
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your First Step Towards{" "}
            <span className="text-primary">Mental Wellness</span>
          </h1>
          <p className="max-w-[700px] text-center text-muted-foreground md:text-xl">
            Try our simulated conversations to experience what therapy feels
            like. A safe, pressure-free way to explore therapeutic support.
          </p>
          <div className="flex gap-4">
            <Link to="/chat">
              <Button size="lg" className="gap-2">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="mx-auto mb-12 max-w-[580px] text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              A Safe Space to Explore
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take your first steps towards understanding therapy in a
              comfortable, risk-free environment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="mx-auto mb-12 max-w-[580px] text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Real Stories, Real Progress
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how others have benefited from taking their first step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full ring-2 ring-primary/10"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Card className="bg-primary-foreground">
            <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Take the first step towards understanding therapy in a safe,
                supportive environment.
              </p>
              <Link to="/chat">
                <Button size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Start a Conversation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

const features = [
  {
    title: "A Gentle Introduction",
    description:
      "Experience what therapy feels like through simulated conversations in a pressure-free environment.",
    icon: Shield,
  },
  {
    title: "Build Confidence",
    description:
      "Practice expressing your thoughts and feelings in a safe space, at your own pace.",
    icon: Heart,
  },
  {
    title: "Move Forward",
    description:
      "When you're ready, we'll help connect you with professional therapists who match your needs.",
    icon: Clock,
  },
];

const testimonials = [
  {
    name: "Alex M.",
    title: "First-time therapy seeker",
    quote:
      "I was nervous about therapy, but practicing conversations here helped me understand what to expect. Now I feel ready to talk to a real therapist.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    name: "Jamie R.",
    title: "Now in regular therapy",
    quote:
      "This platform helped me get comfortable with expressing my feelings. It was a great first step before starting actual therapy sessions.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
  },
  {
    name: "Sam K.",
    title: "Recently started therapy",
    quote:
      "The simulated conversations showed me that therapy isn't as scary as I thought. It gave me the confidence to seek professional help.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
  },
];

export default Landing;
