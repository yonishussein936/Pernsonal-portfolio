import { Github, Mail, Code2, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-yunis.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-card rounded-full shadow-elegant flex items-center justify-center animate-float">
        <Github className="w-8 h-8 text-foreground" />
      </div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-secondary rounded-full shadow-elegant flex items-center justify-center animate-float-delayed">
        <Code2 className="w-8 h-8 text-secondary-foreground" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-accent rounded-full shadow-elegant flex items-center justify-center animate-float">
        <Palette className="w-7 h-7 text-accent-foreground" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hire Me To
                <br />
                Design Your
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                  Website.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 2 250 2 298 10"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(250 70% 60%)" />
                        <stop offset="100%" stopColor="hsl(240 90% 70%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mt-8">
                My name is Yunis Hussein and I am currently a university student. I am a front-end
                developer passionate about designing beautiful and functional websites.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/yunishussein"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:yunishussein@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Yunis Hussein Abdullahi - Front-End Developer"
                  className="rounded-3xl shadow-elegant w-full max-w-md mx-auto"
                />
              </div>

              {/* Info Card */}
              <div className="absolute bottom-8 -right-4 md:right-0 bg-gradient-primary rounded-2xl p-6 shadow-elegant max-w-xs z-20">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary-foreground mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      Front-End Developer
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Hi there! I'm Yunis Hussein, a passionate web designer who loves to take
                      challenges and create stunning website designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
