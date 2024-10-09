import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Track your spending",
    description: "Get a clear view of where your money is going",
    image:
      "/penny_track.avif",
  },
  {
    title: "Set and reach your goals",
    description: "Create a budget, and we'll help you stick to it",
    image:
      "/penny_goals.avif",
  },
  {
    title: "Get personalized insights",
    description:
      "We'll give you tips and advice to help you reach your financial goals",
    image:
      "/penny_insights.avif",
  },
  {
    title: "Build good habits",
    description:
      "We'll help you make better financial decisions and form good money habits",
    image:
      "/penny_habits.avif",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className=" text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4">
          How <span className=" text-green-2">PennySmart</span> can help you
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          PennySmart is the AI personal financial assistant you most certainly
          need. It helps you track your spending, stick to your budgets, set and
          reach your financial goals, as well as get personalized insights to
          help you make better financial decisions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-4 ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={100}
                  className="w-full h-[140px] object-cover rounded-md"
                />
              </CardHeader>
              <CardContent className="flex-grow flex flex-col p-4">
                <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
