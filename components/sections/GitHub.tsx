"use client";

import { Section } from "../ui/Section";
import { Star, GitFork, ExternalLink, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const repos = [
  {
    id: 1,
    name: "Handsign-gujrati",
    description: "Machine learning system for detecting and translating Gujarati hand signs.",
    html_url: "https://github.com/Datadeveloper03/Handsign-gujrati",
    homepage: "https://github.com/Datadeveloper03/Handsign-gujrati",
    stargazers_count: 5,
    language: "Python",
    updated_at: "2024-03-12T00:00:00Z",
    forks_count: 2,
  },
  {
    id: 2,
    name: "Glacier-Retreat-GHG-Emission-Analysis",
    description: "Data analysis project investigating the complex relationship between greenhouse gas emissions and global glacier retreat.",
    html_url: "https://github.com/Datadeveloper03/Glacier-Retreat-GHG-Emission-Analysis",
    homepage: "https://github.com/Datadeveloper03/Glacier-Retreat-GHG-Emission-Analysis",
    stargazers_count: 8,
    language: "Jupyter Notebook",
    updated_at: "2023-11-20T00:00:00Z",
    forks_count: 1,
  },
  {
    id: 3,
    name: "foooddetect",
    description: "AI-powered computer vision model for real-time food detection, bounding box generation, and nutritional classification.",
    html_url: "https://github.com/Datadeveloper03/foooddetect",
    homepage: "https://github.com/Datadeveloper03/foooddetect",
    stargazers_count: 12,
    language: "Python",
    updated_at: "2024-01-05T00:00:00Z",
    forks_count: 4,
  },
];

export function GitHubSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <Section id="github" className="bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent-blue neon-text-blue mb-4">
              Open Source
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent rounded-full neon-glow-mixed"></div>
          </div>
          <a
            href="https://github.com/Datadeveloper03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent-blue transition-colors"
          >
            View GitHub Profile
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-card border border-border p-8 rounded-2xl hover:border-accent-blue hover:neon-glow-mixed hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-background border border-border rounded-lg group-hover:scale-110 group-hover:border-accent-blue transition-all">
                  <FaGithub className="w-6 h-6 text-foreground group-hover:text-accent-blue transition-colors" />
                </div>
                <div className="flex items-center gap-3 text-foreground/80 text-sm font-medium">
                  <span className="flex items-center gap-1 group-hover:text-accent transition-colors">
                    <Star className="w-4 h-4" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-accent-blue transition-colors">
                    <GitFork className="w-4 h-4" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 truncate group-hover:text-accent transition-colors" title={repo.name}>
                {repo.name}
              </h3>
              <p className="text-foreground/80 text-sm mb-6 flex-grow line-clamp-3">
                {repo.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-foreground/80">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_5px_rgba(255,0,60,0.8)]"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    {formatDate(repo.updated_at)}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-foreground hover:text-accent-blue transition-colors rounded-md hover:bg-background"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground hover:text-accent-blue transition-colors rounded-md hover:bg-background"
                    title="Source Code"
                  >
                    <FaGithub className="w-4 h-4" />
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
