import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Paper } from "@mui/material";

const experiences = [
    {
        role: "Software Developer Intern",
        company: "we+",
        period: "Mar 2025 - Jun 2025",
        description:
            "Built and deployed an AI chatbot from scratch using Java, Spring Boot, Angular and Azure.",
    },
    {
        role: "Mentor",
        company: "CoderDojo",
        period: "2023 - Present",
        description: "Mentoring kids in coding through hands-on projects and problem-solving.",
    },
];

const Experience = () => (
    <Timeline position="alternate">
        {experiences.map((exp, i) => (
            <TimelineItem key={i}>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {i < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6">{exp.role}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">{exp.company} | {exp.period}</Typography>
                        <Typography variant="body2">{exp.description}</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        ))}
    </Timeline>
);

export default Experience;