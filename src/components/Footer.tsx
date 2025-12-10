import { Github, Mail, Heart } from "lucide-react";
import profileImage from "@/assets/profile-yunis.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={profileImage}
                alt="Yunis Hussein Abdullahi"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Yunis Hussein Abullahi
              </span>
            </div>
            <p className="text-muted-foreground">
              Front-End Developer & Designer passionate about creating beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yonishussein936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:yonishussein936@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2024 Yunis Hussein Abdullahi. Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
