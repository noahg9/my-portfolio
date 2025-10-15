import React from "react";
import { Container, Box, Typography, Button, Divider, Stack, Chip } from "@mui/material";
import { FaGithub, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { projects, skills, professionalJourney } from "./data/data";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import ProfessionalJourneyCard from "./components/ProfessionalJourneyCard";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <Box sx={{ mb: 8 }}>
        <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
        >
            {title}
        </Typography>
        {children}
        <Divider sx={{ my: 5 }} />
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
                    Software Engineer
                </Typography>
                <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
                    <Chip
                        icon={<FaMapMarkerAlt />}
                        label="Antwerp, Belgium"
                        size="small"
                        sx={{
                            bgcolor: "transparent",
                            color: "white",
                            "& .MuiChip-icon": { color: "inherit" },
                        }}
                    />
                </Stack>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                    <Button
                        variant="text"
                        color="inherit"
                        href="mailto:noahguerin3@outlook.com"
                        startIcon={<FaEnvelope />}
                    >
                        Email
                    </Button>
                    <Button
                        variant="text"
                        color="inherit"
                        href="https://github.com/noahg9"
                        target="_blank"
                        startIcon={<FaGithub />}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="text"
                        color="inherit"
                        href="https://www.linkedin.com/in/noahguerin/"
                        target="_blank"
                        startIcon={<FaLinkedin />}
                    >
                        LinkedIn
                    </Button>
                </Box>
            </Box>

            <Container sx={{ py: { xs: 6, md: 10 } }}>
                {/* Projects Section */}
                <Section title="Projects">
                    <Box
                        sx={{
                            display: "flex",
                            overflowX: "auto",
                            gap: 3,
                            py: 1,
                            "&::-webkit-scrollbar": { height: 8 },
                            "&::-webkit-scrollbar-thumb": { backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 4 },
                        }}
                    >
                        {projects.map((project) => (
                            <Box
                                key={project.title}
                                sx={{
                                    flex: "0 0 calc(33.333% - 16px)",
                                    minWidth: 250,
                                }}
                            >
                                <ProjectCard project={project} />
                            </Box>
                        ))}
                    </Box>
                </Section>

                {/* Skills Section */}
                <Section title="Core Skills">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
                            gap: 3,
                        }}
                    >
                        {skills.map((group) => (
                            <SkillsCard key={group.category} group={group} />
                        ))}
                    </Box>
                </Section>

                {/* Professional Journey Section */}
                <Section title="Professional Journey">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 6,
                        }}
                    >
                        <ProfessionalJourneyCard items={professionalJourney} />
                    </Box>
                </Section>
            </Container>
        </Box>
    );
};

export default App;
