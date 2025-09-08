import { FaJava, FaReact, FaMicrosoft } from "react-icons/fa";
import { SiDotnet, SiAngular } from "react-icons/si";

export const experiences = [
    {
        role: "Software Developer Intern",
        company: "we+",
        period: "Mar 2025 - Jun 2025",
        description: "Built and deployed an AI chatbot from scratch using Java, Spring Boot, Angular and AWS.",
        logo: "/we+.png",
    },
];

export const education = [
    {
        degree: "Bachelor's Degree in Applied Computer Science",
        institution: "Karel de Grote Hogeschool",
        period: "2021 - 2025",
        logo: "/kdg.png",
    },
];

export const projects = [
    {
        title: "Job Application Tracker",
        description: "A full-stack app to track job applications built with .NET and React.",
        techStack: [".NET", "React", "Azure"],
        link: "https://mango-flower-04c2b6503.1.azurestaticapps.net",
        github: "https://github.com/noahg9/job-tracker-backend",
        image: "/jobtracker.jpg",
    },
];

export const skills = [
    {
        category: "Backend",
        skills: [
            { name: "Java", icon: FaJava },
            { name: ".NET", icon: SiDotnet },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: FaReact },
            { name: "Angular", icon: SiAngular },
        ],
    },
    {
        category: "Cloud",
        skills: [
            { name: "Azure", icon: FaMicrosoft },
        ],
    },
];