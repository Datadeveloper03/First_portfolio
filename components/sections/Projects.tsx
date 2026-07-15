import { Section } from "../ui/Section";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Pragyan",
    description: "Advanced Retrieval-Augmented Generation system capable of intelligent document search using semantic retrieval and LLMs.",
    image: "/proj_pragyan.png",
    tech: ["LangChain", "ChromaDB", "BM25", "Python"],
    github: "https://github.com/Datadeveloper03/pragyan_2622",
    demo: "#",
  },
  {
    title: "CO2 and Machine Prediction",
    description: "Machine learning system predicting industrial emissions and recommending environmental filtration methods.",
    image: "/proj_co2.png",
    tech: ["Scikit-Learn", "Random Forest", "Data Science"],
    github: "https://github.com/Datadeveloper03/co2-and-machine",
    demo: "#",
  },
  {
    title: "Emission Filter Prediction",
    description: "Developed a machine learning model to predict CO2 and harmful emissions in mining operations and propose reduction strategies.",
    image: "/proj_landslide.png", // Temporarily keeping previous image unless new one is requested
    tech: ["Python", "Random Forest", "Machine Learning"],
    github: "https://github.com/Datadeveloper03/filtertype",
    demo: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent neon-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full neon-glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:neon-glow-mixed hover:-translate-y-2 transition-all duration-300 flex flex-col group relative"
            >
              {/* Decorative top border glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-56 w-full overflow-hidden bg-background border-b border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-blue transition-colors mb-4">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 text-base mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-background border border-border text-accent rounded-md group-hover:border-accent/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent-blue transition-colors"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent-blue transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
