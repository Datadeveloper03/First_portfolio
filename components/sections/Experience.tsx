import { Section } from "../ui/Section";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Quambase",
    duration: "Jan 2026 – April",
    points: [
      "Built Retrieval-Augmented Generation pipeline.",
      "Developed hybrid search using ChromaDB and BM25.",
    ],
  },
  {
    role: "Deep Learning Research Intern",
    company: "Tecnonauts Technology Services",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Built landslide segmentation models using U-Net, U-Net++, and DeepLabV3+.",
      "Implemented evaluation metrics and visualization.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Femtosoft Technologies",
    duration: "Dec 2024 – Jan 2025",
    points: [
      "Built responsive logistics websites.",
      "Improved UI and animations.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent-blue neon-text-blue mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent rounded-full neon-glow-mixed"></div>
        </div>

        <div className="relative ml-3 md:ml-0 md:space-y-12 space-y-8">
          {/* Gradient Connecting Line */}
          <div className="absolute left-[3px] md:left-[3px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-blue via-purple-500 to-accent"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              {/* Timeline Dot */}
              <div className="absolute left-[-2px] md:left-[-2px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-accent-blue shadow-[0_0_10px_rgba(0,240,255,0.8)] z-10"></div>

              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                
                {/* Duration & Company for Desktop, only Duration for Mobile */}
                <div className="md:col-span-2 md:text-right mb-2 md:mb-0">
                  <div className="flex items-center md:justify-end gap-2 text-sm font-medium text-foreground/80 mb-1">
                    <Calendar className="w-4 h-4 text-accent-blue" />
                    {exp.duration}
                  </div>
                  <div className="hidden md:flex items-center justify-end gap-2 text-base font-semibold text-foreground">
                    <Building2 className="w-4 h-4 text-accent" />
                    {exp.company}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 bg-card border border-border p-6 rounded-2xl hover:border-accent-blue neon-glow-mixed transition-all duration-300 hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent mb-4 md:hidden">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start text-foreground/80 text-sm md:text-base">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_5px_rgba(255,0,60,0.8)]"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
