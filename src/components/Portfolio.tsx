import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import calculatorImage from "@/assets/project-calculator.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce website with shopping cart functionality, product listings, and responsive design. Built with React and styled with modern UI components.",
      image: ecommerceImage,
      tags: ["React", "CSS", "JavaScript", "UI/UX"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Calculator App",
      description:
        "A sleek calculator application with a beautiful purple gradient theme. Features all basic mathematical operations with a clean, intuitive interface.",
      image: calculatorImage,
      tags: ["JavaScript", "CSS", "HTML", "Design"],
      demoLink: "#",
      githubLink: "https://yonishussein936.github.io/Calculator-Project/",
    },
    {
      title: "Portfolio Designs",
      description:
        "Collection of professional portfolio website designs created in Figma. Showcasing modern layouts, color schemes, and user-friendly navigation patterns.",
      image: ecommerceImage,
      tags: ["Figma", "UI/UX", "Design", "Prototyping"],
      demoLink: "#",
      githubLink: "https://my-portfolio-brown-nine-88.vercel.app/",
    },
    
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing my skills in web development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/10 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="secondary" size="icon" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="secondary" size="icon" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
