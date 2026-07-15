import { Section } from "../ui/Section";
import { Trophy, Medal, Award } from "lucide-react";

const achievements = [
  {
    title: "Hacks India Winner",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    description: "Secured 1st place in the national level hackathon.",
  },
  {
    title: "IEI Turing Test Winner",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    description: "Awarded winner for AI innovation at IEI Turing Test.",
  },
  {
    title: "Glacier Theme Runner-up",
    icon: <Medal className="w-8 h-8 text-gray-400" />,
    description: "Achieved runner-up position in Glacier Theme competition.",
  },
  {
    title: "Oracle AI Foundation",
    icon: <Award className="w-8 h-8 text-accent" />,
    description: "Certified by Oracle for AI Foundations.",
  },
  {
    title: "Cisco Data Science Foundations",
    icon: <Award className="w-8 h-8 text-accent" />,
    description: "Completed Cisco certification for Data Science.",
  },
  {
    title: "Infosys AI Foundations",
    icon: <Award className="w-8 h-8 text-accent" />,
    description: "Certified by Infosys in AI Foundations.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-2xl flex flex-col hover:border-accent/50 transition-colors hover:scale-[1.02] transform duration-300"
            >
              <div className="mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
