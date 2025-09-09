import React from "react";
import { Container, Box, Typography, Button, Divider } from "@mui/material";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { projects, skills, experiences, education } from "./data/data";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";

// Reusable Section component
interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <Box sx={{ mb: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
            {title}
        </Typography>
        {children}
        <Divider sx={{ my: 4 }} />
    </Box>
);

const App: React.FC = () => {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: { xs: 12, md: 16 },
                    px: 4,
                    textAlign: "center",
                    background: "linear-gradient(90deg, #3f51b5, #9c27b0, #e91e63)",
                    position: "relative",
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                    Noah Guerin
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Software Developer
                </Typography>

                {/* Contact Buttons */}
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="mailto:noahguerin3@outlook.com"
                        startIcon={<FaEnvelope />}
                        aria-label="Email Noah"
                    >
                        Email
                    </Button>

                    <Button
                        variant="outlined"
                        color="inherit"
                        href="https://github.com/noahg9"
                        target="_blank"
                        startIcon={<FaGithub />}
                        aria-label="Visit Noah's GitHub"
                    >
                        GitHub
                    </Button>

                    <Button
                        variant="outlined"
                        color="inherit"
                        href="https://www.linkedin.com/in/noahguerin"
                        target="_blank"
                        startIcon={<FaLinkedin />}
                        aria-label="Visit Noah's LinkedIn"
                    >
                        LinkedIn
                    </Button>
                </Box>

                {/* Scroll Hint */}
                <Box sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)" }}>
                    <Typography variant="subtitle2" sx={{ animation: "bounce 1.5s infinite" }}>
                        ↓ Scroll Down
                    </Typography>
                </Box>
            </Box>

            {/* Main Sections */}
            <Container sx={{ py: { xs: 4, md: 6 } }}>
                {/* Projects Section */}
                <Section title="Projects">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
                            gap: 4,
                        }}
                    >
                        {projects.map((project) => (
                            <Box key={project.title}>
                                <ProjectCard project={project} />
                            </Box>
                        ))}
                    </Box>
                </Section>

                {/* Skills Section */}
                <Section title="Skills">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                            gap: 3,
                        }}
                    >
                        {skills.map((group) => (
                            <Box key={group.category}>
                                <SkillsCard group={group} />
                            </Box>
                        ))}
                    </Box>
                </Section>

                {/* Experience Section */}
                <Section title="Experience">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
                            gap: 4,
                        }}
                    >
                        {experiences.map((exp) => (
                            <Box key={exp.company + exp.role}>
                                <ExperienceCard experience={exp} />
                            </Box>
                        ))}
                    </Box>
                </Section>

                {/* Education Section */}
                <Section title="Education">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
                            gap: 4,
                        }}
                    >
                        {education.map((edu) => (
                            <Box key={edu.institution}>
                                <EducationCard education={edu} />
                            </Box>
                        ))}
                    </Box>
                </Section>
            </Container>
        </Box>
    );
};

export default App;
