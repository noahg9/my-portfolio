import React from "react";
import { Container, Box, Typography, Button, Grid, Divider } from "@mui/material";
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
                    Junior Software Developer
                </Typography>

                {/* Contact Buttons */}
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="mailto:noah.guerin.dev@gmail.com"
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
                    <Grid container spacing={4}>
                        {projects.map((project) => (
                            <Grid item xs={12} md={6} lg={4} key={project.title}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                {/* Skills Section */}
                <Section title="Skills">
                    <Grid container spacing={3}>
                        {skills.map((group) => (
                            <Grid item xs={12} sm={6} md={4} key={group.category}>
                                <SkillsCard group={group} />
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                {/* Experience Section */}
                <Section title="Experience">
                    <Grid container spacing={4}>
                        {experiences.map((exp) => (
                            <Grid item xs={12} md={6} lg={4} key={exp.company + exp.role}>
                                <ExperienceCard experience={exp} />
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                {/* Education Section */}
                <Section title="Education">
                    <Grid container spacing={4}>
                        {education.map((edu) => (
                            <Grid item xs={12} md={6} lg={4} key={edu.institution}>
                                <EducationCard education={edu} />
                            </Grid>
                        ))}
                    </Grid>
                </Section>
            </Container>
        </Box>
    );
};

export default App;
