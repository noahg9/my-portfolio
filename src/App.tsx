import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>

            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: 16,
                    px: 4,
                    textAlign: "center",
                    background: "linear-gradient(90deg, #3f51b5, #9c27b0, #e91e63)",
                    position: "relative"
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Noah Guerin
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Software Developer | Java, .NET, React, Azure
                </Typography>
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="mailto:noah.guerin.dev@gmail.com"
                    >
                        Contact Me
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        href="https://github.com/noahg9"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Box>

                {/* Scroll hint */}
                <Box sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)" }}>
                    <Typography variant="subtitle2" sx={{ animation: "bounce 1.5s infinite" }}>
                        ↓ Scroll Down
                    </Typography>
                </Box>
            </Box>

            {/* Projects Section */}
            <Container sx={{ py: 12 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={6} lg={4} key={project.id}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Skills Section */}
            <Box sx={{ py: 12, bgcolor: "background.paper" }}>
                <Container>
                    <Typography variant="h3" align="center" gutterBottom>
                        Skills
                    </Typography>
                    <Skills />
                </Container>
            </Box>

            {/* Experience Section */}
            <Container sx={{ py: 12 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Experience
                </Typography>
                <Experience />
            </Container>
        </Box>
    );
};

export default App;
