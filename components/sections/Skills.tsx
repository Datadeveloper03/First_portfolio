import { Section } from "../ui/Section";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-Learn", "Random Forest", "XGBoost", "Decision Trees"],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "TensorFlow", "CNN", "OpenCV", "U-Net", "DeepLabV3+"],
  },
  {
    title: "Generative AI",
    skills: ["RAG", "ChromaDB", "BM25", "Semantic Search", "Vector Databases"],
  },
  {
    title: "Web & Tools",
    skills: ["React", "Next.js", "Tailwind", "HTML", "CSS", "Git", "GitHub"],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background border border-border p-6 rounded-2xl hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-card border border-border text-foreground/80 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
