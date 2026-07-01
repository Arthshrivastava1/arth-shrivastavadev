import {
  Brain, Code2, Bug, ShieldCheck, Wrench, Database,
  Github, Linkedin, Mail, Phone, FileText,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const ROLES = [
  "AI Engineer",
  "Software Testing Engineer",
  "Python Developer",
  "Cybersecurity Enthusiast",
];

export const STATS = [
  { value: 100, suffix: "+", label: "DSA Problems" },
  { value: 3, suffix: "+", label: "Major Projects" },
  { value: 2, suffix: "+", label: "Professional Experiences" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 2026, suffix: "", label: "Graduation" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "C++", "SQL", "HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    items: ["Machine Learning", "Deep Learning", "TensorFlow", "ANN", "CNN", "Prompt Engineering", "LLM Evaluation", "Data Analysis"],
  },
  {
    title: "Software Testing",
    icon: Bug,
    items: ["Functional Testing", "System Testing", "Smoke Testing", "Regression", "Requirement Analysis", "Test Case Design", "Defect Analysis", "Debugging", "Validation"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    items: ["Linux", "Kali Linux", "Nmap", "Wireshark", "Burp Suite", "OWASP Top 10", "Network Security", "Ethical Hacking"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Power BI", "Excel", "MySQL", "GitHub Copilot", "VS Code"],
  },
  {
    title: "Data",
    icon: Database,
    items: ["MySQL", "Data Analysis", "Power BI", "Excel"],
  },
];

export const TIMELINE = [
  { year: "2022", title: "Started B.Tech", desc: "Began the Information Technology journey." },
  { year: "2023", title: "Python & DSA", desc: "Deep dive into algorithms and Python fundamentals." },
  { year: "2024", title: "Startup Experience", desc: "First real-world product work with a startup." },
  { year: "2025", title: "AI Projects", desc: "Deep learning models, CNNs and ANN-based systems." },
  { year: "2026", title: "LLM Internship", desc: "LLM generalist role — prompts, evals, validation." },
  { year: "Next", title: "AI & Cybersecurity Engineer", desc: "Building secure, intelligent products." },
];

export const EXPERIENCE = [
  {
    company: "Ethara AI",
    role: "LLM Generalist Intern",
    bullets: [
      "Prompt Engineering & LLM Validation",
      "AI Evaluation and Response Quality Analysis",
      "Requirement Analysis & Software Validation",
      "Model Improvement and Documentation",
    ],
  },
  {
    company: "Local Expert Hai Kya",
    role: "PR Associate · Graphic Designer",
    bullets: [
      "Brand Communication & Client Coordination",
      "Marketing campaigns and outreach",
      "Creative design across digital collateral",
    ],
  },
];

export const PROJECTS = [
  {
    title: "EV Battery Life Prediction",
    tags: ["Python", "TensorFlow", "ANN", "Deep Learning"],
    desc: "ANN model predicting the Remaining Useful Life of lithium-ion batteries using deep learning.",
    links: [
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "Live Demo", href: "#", icon: FileText },
    ],
    hue: "from-blue-500/30 to-cyan-500/20",
  },
  {
    title: "Self Driving Car Simulation",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
    desc: "Autonomous steering prediction system built with Behavioral Cloning and Convolutional Neural Networks.",
    links: [
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "Live Demo", href: "#", icon: FileText },
    ],
    hue: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "Software Testing Validation Tool",
    tags: ["Python", "Automation", "Testing"],
    desc: "Automated software validation workflows for functional testing, defect detection and reporting.",
    links: [
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "Docs", href: "#", icon: FileText },
    ],
    hue: "from-cyan-500/30 to-emerald-500/20",
  },
];

export const CERTIFICATES = [
  { name: "Google GDG DevFest", issuer: "Google Developers", status: "Completed" },
  { name: "Python for Data Science", issuer: "Online", status: "Completed" },
  { name: "CodeFiesta", issuer: "College", status: "Completed" },
  { name: "Google Cybersecurity Certificate", issuer: "Google", status: "In progress" },
  { name: "eJPT", issuer: "INE Security", status: "Planned" },
  { name: "CompTIA Security+", issuer: "CompTIA", status: "Planned" },
];

export const ACHIEVEMENTS = [
  "Solved 100+ DSA Problems",
  "Coding Competition Finalist",
  "Google GDG DevFest Participant",
  "Inter-College Volleyball Player",
  "Developed Multiple AI Projects",
];

export const SERVICES = [
  { title: "AI Development", desc: "Custom ML/DL models, LLM tooling, and evaluation pipelines." },
  { title: "Python Development", desc: "Automation, data workflows, backend scripting." },
  { title: "Software Testing", desc: "Functional, regression, and validation frameworks." },
  { title: "Automation", desc: "End-to-end automation for repetitive engineering tasks." },
  { title: "Frontend Development", desc: "Modern React interfaces with premium motion." },
  { title: "Cybersecurity Learning", desc: "Network security, OWASP-informed development." },
];

export const CONTACT = {
  email: "arthshrivastava9@gmail.com",
  phone: "+91 8435699761",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
};

export const SOCIAL = [
  { label: "GitHub", href: CONTACT.github, icon: Github },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail },
  { label: "Phone", href: `tel:${CONTACT.phone}`, icon: Phone },
];
