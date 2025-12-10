import { Palette, Layout, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Creating beautiful, modern designs using Figma that capture your brand's essence and engage your audience.",
    },
    {
      icon: Layout,
      title: "Responsive Development",
      description:
        "Building websites that work seamlessly across all devices, from mobile phones to desktop computers.",
    },
    {
      icon: Sparkles,
      title: "Graphic Design",
      description:
        "Experienced in graphic design with hands-on knowledge of tools like Photoshop, Illustrator, and Figma to craft engaging visuals.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Ensuring your website loads fast and runs smoothly, providing the best experience for your visitors.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional web design and development services tailored to your needs, delivering responsive, user-friendly, and visually appealing websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/10 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Methodology */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">My Design Approach</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              I specialize in creating professional websites using Figma as my primary design tool.
              My approach combines modern design principles with user-centered thinking to deliver
              websites that not only look great but also serve your business goals. From initial
              concept to final delivery, I work closely with clients to ensure their vision comes
              to life.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
