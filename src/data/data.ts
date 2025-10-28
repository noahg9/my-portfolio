import { FaJava, FaPython, FaReact, FaMicrosoft } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

export const projects = [
    {
        title: "Job Application Tracker",
        description: "Web app built with .NET and React to track and manage job applications.",
        techStack: [".NET", "React", "Azure"],
        //link: "https://mango-flower-04c2b6503.1.azurestaticapps.net",
        github: "https://github.com/noahg9/job-tracker-backend",
        image: "/job-tracker.jpg",
    },
    {
        title: "Agentic RAG for Chemical Industries",
        description: "Agentic RAG system using vector search and multi-step QA from company-specific documents.",
        techStack: ["Python"],
        github: "https://github.com/noahg9/agentic-rag-chemical",
        image: "/agentic-rag.jpg",
        videos: [
            "https://www.youtube.com/embed/jfHgNNU7lv0"
        ],
    },
    {
        title: "Multi-User Game Platform",
        description: "Real-time multiplayer board game platform with player stats, matchmaking, and achievements.",
        techStack: ["Java", "React", "Python"],
        image: "/game-platform.jpg",
        videos: [
            "https://www.youtube.com/embed/eNvGBNqvowo",
            "https://www.youtube.com/embed/27msJlZxx24"
        ],
    },
    {
        title: "Bridea",
        description: "Web interface to visualize and analyze brainwave data to help users track focus and productivity",
        techStack: ["Java", "C++"],
        github: "https://github.com/noahg9/bridea",
        image: "/bridea-thumbnail.png",
    }
];

export const skills = [
    {
        category: "Languages",
        skills: [
            { name: "Java", icon: FaJava },
            { name: "Python", icon: FaPython },
        ],
    },
    {
        category: "Frameworks",
        skills: [
            { name: "Spring Boot", icon: SiSpring },
            { name: "React", icon: FaReact },
        ],
    },
    {
        category: "Cloud",
        skills: [
            { name: "Azure", icon: FaMicrosoft },
        ],
    },
];

export const professionalJourney = [
    {
        role: "Software Engineer",
        company: "saply.ai",
        period: "Sep 2025 - Present",
        description: "Developing an AI-powered CV engine for consultancy and staffing using Java and React.",
        logo: "/saply-ai.avif",
    },
    {
        role: "Software Engineer Intern",
        company: "we+",
        period: "Mar 2025 - Jun 2025",
        description: "Built and deployed an AI chatbot for internal HR support on AWS using Java and Angular.",
        logo: "/we-plus.png",
    },
    {
        degree: "Bachelor's Degree in Applied Computer Science",
        institution: "Karel de Grote Hogeschool",
        period: "2021 - 2025",
        logo: "/kdg.jpg",
    },
];
