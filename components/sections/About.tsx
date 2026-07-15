import { Section } from "../ui/Section";
import { Award, Briefcase, Code2, FolderGit2 } from "lucide-react";

const stats = [
  {
    label: "Industry Internships",
    value: "2+",
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
  {
    label: "AI Projects",
    value: "5+",
    icon: <FolderGit2 className="w-5 h-5 text-accent" />,
  },
  {
    label: "Certifications",
    value: "2+",
    icon: <Award className="w-5 h-5 text-accent" />,
  },
  {
    label: "Problems in coding platforms",
    value: "435+",
    icon: <Code2 className="w-5 h-5 text-accent" />,
  },
];

export function About() {
  return (
    <Section id="about" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I am an Artificial Intelligence and Data Science undergraduate passionate about solving real-world problems through AI. My work spans Computer Vision, Deep Learning, Retrieval-Augmented Generation (RAG), and Machine Learning.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I enjoy transforming research into practical products that are scalable, efficient, and user-friendly. Always eager to learn new technologies and build intelligent systems that make an impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-center items-start hover:border-accent/50 transition-colors group"
              >
                <div className="p-3 bg-background border border-border rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
