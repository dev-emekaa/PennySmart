import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Track your spending",
    description: "Get a clear view of where your money is going",
    image:
      "https://plus.unsplash.com/premium_photo-1681589453442-3b383a67fcfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
  },
  {
    title: "Set and reach your goals",
    description: "Create a budget, and we'll help you stick to it",
    image:
      "https://plus.unsplash.com/premium_photo-1682309780036-9b683b2ebbcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Get personalized insights",
    description:
      "We'll give you tips and advice to help you reach your financial goals",
    image:
      "https://plus.unsplash.com/premium_photo-1682309689730-1d2f757cd49d?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Build good habits",
    description:
      "We'll help you make better financial decisions and form good money habits",
    image: "https://plus.unsplash.com/premium_photo-1677109898965-7ae03cdbc4d4?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className=" text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4">
          How PennySmart can help you
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
                <img
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
