import { GraduationCap, BookOpen, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-yunis.jpg";

const About = () => {
  const milestones = [
    {
      year: "2022",
      title: "Completed Secondary School",
      description: "I graduated from secondary school in Somalia, specifically from Luuq district in the Gedo region of southern Somalia.",
      icon: GraduationCap,
    },

    {
      year: "2024-Present",
      title: "University Student",
      description: "Currently, I’m studying at a university in Bangladesh while actively expanding my skills in full-stack web development and push myself to grow into a highly skilled and creative developer.",
      icon: Code,
    },
    {
      year: "2025",
      title: "Completed Front-end & Backend",
      description: "A Full-Stack Developer who completed professional web development training at Creative IT Institute over a year ago. I build modern, responsive websites and functional back-end systems using clean, efficient code.",
      icon: Code,
    },
  ];

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Figma", level: 90 },
    { name: "Ms Excel / Ms Powerpoint", level: 85 },
    { name: "Bootstrap / Tailwind", level: 88},
    { name: "Node / Express", level: 75},

  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Yunis Hussein Abdullahi"
              className="w-32 h-32 rounded-full object-cover shadow-elegant border-4 border-primary/20"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A passionate developer with a unique journey from teaching to technology and I bring
          creativity, patience, and problem-solving skills into every project I build.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-bold text-primary">{milestone.year}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
