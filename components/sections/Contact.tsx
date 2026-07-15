"use client";

import { Section } from "../ui/Section";
import { Mail, FileText, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9d052a3c-ede6-4792-88a4-d3d132c5e608");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.log("Error", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section id="contact" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              I'm always open to discussing new opportunities, collaborations in the AI space, or just having a chat about the latest in deep learning and generative AI.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:sabarishsathiya77@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors w-fit p-3 rounded-xl hover:bg-card">
                <div className="p-3 bg-card border border-border rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">sabarishsathiya77@gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/sabarishsathiya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors w-fit p-3 rounded-xl hover:bg-card">
                <div className="p-3 bg-card border border-border rounded-xl">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">LinkedIn</span>
              </a>

              <a href="https://github.com/Datadeveloper03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors w-fit p-3 rounded-xl hover:bg-card">
                <div className="p-3 bg-card border border-border rounded-xl">
                  <FaGithub className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">GitHub</span>
              </a>

              <a href="/resume.pdf" download className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors w-fit p-3 rounded-xl hover:bg-card">
                <div className="p-3 bg-card border border-border rounded-xl">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">Download Resume</span>
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground"
                  placeholder="Collaboration Opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground resize-none"
                  placeholder="Hi Sabarish, I would like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-4 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-4 ${
                  status === "success" 
                    ? "bg-green-500/20 text-green-500 border border-green-500" 
                    : status === "error"
                    ? "bg-red-500/20 text-red-500 border border-red-500"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                <Send className="w-4 h-4" />
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Error - Try Again"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </Section>
  );
}
