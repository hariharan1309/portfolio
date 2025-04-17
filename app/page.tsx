import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StayCationImg from "@/public/stayCation.png";
import ProfileImg from "@/public/Profile.jpg";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm Hariharan A
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm a Front End Engineer with expertise in Next.js, TypeScript,
            TailwindCSS, React.js and RizzUI. Dedicated to maintaining robust
            web applications while implementing innovative features that elevate
            user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="w-full sm:w-auto">Download CV</Button>
            <div className="sm:hidden">
              <Button variant="outline" className="w-full sm:w-auto">
                <Link href={"tel:+919344628710"}>Contact Me</Link>
              </Button>
            </div>
            <div className="max-sm:hidden">
              <Button variant="outline" className="w-full sm:w-auto">
                <Link href={"mailto:hariharana1309@gmail.com"}>Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-muted">
          <Image
            src={ProfileImg}
            alt="Hariharan's profile"
            fill
            className="object-cover size-80"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        className="container mx-auto lg:max-w-[70%] px-4 py-12 md:py-20"
        id="about"
      >
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
          <div className="space-y-6">
            <p>
              I'm a passionate Front End Engineer with expertise in Next.js,
              TypeScript, TailwindCSS, React.js and RizzUI. I'm dedicated to
              maintaining robust web applications while implementing innovative
              features that elevate user experience.
            </p>
            <p>
              My journey in web development began during my engineering studies,
              and I've since grown my skills through internships and
              professional roles. I enjoy collaborating with teams to build
              efficient, user-friendly applications that solve real problems.
            </p>
            <p>
              I'm constantly learning and improving my skills to stay current
              with the latest web development technologies and best practices.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">
                Quick facts about me:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Bachelor of Engineering in Electronics and Communication
                </li>
                <li>Front End Engineer at Gym Force</li>
                <li>Passionate about creating exceptional user experiences</li>
                <li>Continuously learning and growing as a developer</li>
              </ul>
            </div>
            <p className="pt-4">
              I'm available for freelance work and new opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="container mx-auto lg:max-w-[70%]  px-4 py-16 md:py-24 bg-muted/30"
        id="skills"
      >
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <p className="text-center mb-12">
            The technologies and tools I specialize in:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-background rounded-full shadow-sm">
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="container mx-auto lg:max-w-[70%]  px-4 py-16 md:py-24"
        id="experience"
      >
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <p className="text-center mb-12">My professional journey:</p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-24">
                      <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-md">
                        {exp.logo}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <p className="text-muted-foreground">{exp.period}</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        className="container mx-auto lg:max-w-[70%] px-4 py-16 md:py-24 bg-muted/30"
        id="education"
      >
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-24">
                  <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Bachelor of Engineering - (ECE)
                      </h3>
                      <p className="text-muted-foreground">
                        KPR Institute of Engineering and Technology
                      </p>
                    </div>
                    <p className="text-muted-foreground">08/2019 - 04/2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="container mx-auto lg:max-w-[70%] px-4 py-16 md:py-24"
        id="work"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <p className="text-center mb-12">Some of my notable projects:</p>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={
                            project.image ||
                            "/placeholder.svg?height=400&width=600"
                          }
                          alt={project.title}
                          fill
                          className="object-fit"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className={project.link ? "" : "hidden"}
                        >
                          <Link href={project.link || ""}>View Project</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={project.github ? "" : "hidden"}
                        >
                          <Link href={project.github || ""}>GitHub</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="container mx-auto px-4 py-16 md:py-24 bg-muted/30"
        id="contact"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
          <p className="mb-12">
            Feel free to reach out if you're looking for a developer, have a
            query, or simply want to connect.
          </p>

          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:hariharana1309@gmail.com"
                className="text-lg hover:underline"
              >
                hariharana1309@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+919344628710" className="text-lg hover:underline">
                +91 9344628710
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4">Connect with me on these platforms:</p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://github.com/hariharan1309"
                className="p-2 rounded-full bg-muted hover:bg-muted/80"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hari-haran-b59019187/"
                className="p-2 rounded-full bg-muted hover:bg-muted/80"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto p-4 text-center text-muted-foreground">
        <p>© 2024 | Designed and coded with ❤️ by Hariharan A</p>
      </footer>
    </main>
  );
}

// Updated data
const skills = [
  { name: "Next.js", icon: <span className="text-2xl">N</span> },
  { name: "React.js", icon: <span className="text-2xl">R</span> },
  { name: "TypeScript", icon: <span className="text-2xl">TS</span> },
  { name: "TailwindCSS", icon: <span className="text-2xl">T</span> },
  { name: "Node.js", icon: <span className="text-2xl">N</span> },
];

const experiences = [
  {
    role: "Frontend Engineer",
    company: "GymForce Technologies",
    period: "09/2024 - Present",
    logo: <span className="text-xl">GF</span>,
    responsibilities: [
      "Maintaining and Enhancing web applications while delivering new features for improved user experience.",
      "Collaborating with the team to implement requirements and optimize functionality using Next.js, TypeScript, RizzUI, and TailwindCSS.",
    ],
  },
  {
    role: "Frontend Developer - Intern",
    company: "GymForce Technologies",
    period: "06/2024 - 09/2024",
    logo: <span className="text-xl">GF</span>,
    responsibilities: [
      "Collaborated closely with developers to build and enhance web applications, gaining hands-on experience with industry-standard development workflows.",
    ],
  },
  {
    role: "Next JS Developer - Intern",
    company: "Achintya Solutions",
    period: "03/2024 - 06/2024",
    logo: <span className="text-xl">AS</span>,
    responsibilities: [
      "Assisting the team in building products as per the requirement, and learning along with the process.",
    ],
  },
];

const projects = [
  {
    title: "Gym Force Web Application",
    description:
      "A comprehensive web application for gym management, featuring user profiles, workout tracking, and membership management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "RizzUI",
      "React.js",
    ],
  },
  {
    title: "StayCation",
    description:
      "StayCation is a vacation rental platform built with Next.js, TypeScript, and Tailwind CSS, offering seamless booking experiences with role-based access for users and property owners.",
    image: StayCationImg,
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Shadcn UI",
    ],
    link: "https://staycation-eight-delta.vercel.app/",
    github: "https://github.com/hariharan1309/staycation",
  },
];
