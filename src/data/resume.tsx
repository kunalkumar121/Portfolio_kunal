import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kunal Kumar",
  initials: "KK",
  url: "https://dillion.io",
  location: "Meerut , UP",
  locationLink: "https://www.google.com/maps/place/meerut",
  description:
    "Full-Stack Developer who loves turning ideas into real products. Always learning, building, and sharing along the way.",
  summary:
    "I began my journey as a full-stack software engineer, developing real-world applications and scalable systems. Over time, I’ve worked on diverse projects — from WonderLust, a travel-focused MERN app, to building the backend for an airline booking system. I’ve completed internships in cybersecurity, fintech, and currently in ServiceNow platform development, while also earning certifications from Microsoft, AWS, and LinkedIn. I’m passionate about solving problems through code, building impactful tech, and helping others grow in the developer community.I’m always exploring new tools and ideas — whether it’s cloud, AI, or backend architecture — and I actively share what I learn.",
  avatarUrl: "/kunal.jpg",
  skills: [
    "JavaScript",
    "Express.js",
    "MongoDB",
    "MYSQL",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "HTML5",
    "CSS",
    "Postgres",
    "Docker",
    "RESTful APIs",
    "Testing",
    "C++",
    "Fastify",
    "joi",
    "UI & UX Design",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kunalkumar121.mitmeerut@gmail.com",
    tel: "9798340602",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kunalkumar121",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kunal-kumar-02872b258/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kunalpoddar121",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BlueStock Fintech",
      badges: [],
      href: "https://bluestock.in/",
      location: "Remote",
      title: "Software Development Engineer (Internship)",
      logoUrl: "/images.jpeg",
      start: "January 2025",
      end: "February 2025",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Paloalto Networks",
      href: "https://www.paloaltonetworks.com/",
      badges: [],
      location: "Remote",
      title: "Cybersecurity Virtual Internship Trainee",
      logoUrl: "/PANW.png",
      start: "July 2024",
      end: "September 2024",
      description:
        "Implemented core cybersecurity concepts through real-world simulations and hands-on labs. Developed incident response workflows, threat detection strategies, and basic firewall rule configurations. Participated in red team/blue team simulations to identify and mitigate cyber threats. Built and tested secure network topologies using virtual environments. Gained practical experience with SOC operations, endpoint protection, and vulnerability assessment tools through the SkillsBuild platform.",
    }
  ],
  education: [
    {
      school: "Meerut Institute of Technology",
      href: "https://mitmeerut.ac.in/",
      degree: "B.Tech (CSE)",
      logoUrl: "/logo.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "BSEB",
      href: "https://secondary.biharboardonline.com/",
      degree: "Senior Secondary(12th)",
      logoUrl: "/images1.jpeg",
      start: "2020",
      end: "2021",
    },
    {
      school: "BSEB",
      href: "https://secondary.biharboardonline.com/",
      degree: "Secondary School (10th)",
      logoUrl: "/images1.jpeg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Airline Booking Backend",
      href: "/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Improved API response time by over 50%, enhancing user experience and enabling faster airline booking operations",
      technologies: [
        "Node.js",
        "fastify",
        "Postman",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Stripe",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kunalkumar121/Airline-Booking-Backend-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/airline.jpg",
    },
    {
      title: "H17-TeamBF-IPO-Web-Application",
      href: "https://github.com/yvishwas40/H17-TeamBF-IPO-Web-Application",
      dates: "Jun 2025 - February 2025",
      active: true,
      description:
        "A comprehensive, full-stack platform for IPO discovery, tracking, and analytics. Seamlessly manage, analyze, and explore IPO opportunities with a modern, intuitive interface.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "TailwindCSS",
        "React 19",
        "Google reCAPTCHA",
        "Testing Library (Jest, React Testing Library)",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yvishwas40/H17-TeamBF-IPO-Web-Application",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bluestock.png",
    },
    {
      title: "wonderLust",
      href: "https://github.com/kunalkumar121/project",
      dates: "August 2024 - November 2024",
      active: true,
      description:
        "Developed a full-stack MERN travel app enabling users to explore destinations, manage listings, and post reviews withsecure authentication via Passport.js.",
      technologies: [
        "HTML5",
        "CSS",
        "Javascript",
        "Node.js",
        "express.js",
        "MongoDB",
        "Joi",
        "Passport.js",
      ],
      links: [
    
        {
          type: "Source",
          href: "https://github.com/kunalkumar121/project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wonderlust.png",
    },
  ],
  hackathons: [
    {
      title: "B-Plan Competition",
      dates: " 31rd March 2025",
      location: " Delhi, India",
      description:
        "Pitched an original startup idea at E-Summit 25 B-Plan Competition, DTU, advancing through quiz, pitch deck, and final live presentation rounds.",
      image:
        "/bplan.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
