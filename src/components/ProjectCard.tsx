import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, Chip, Button, Box, Stack, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    github?: string;
    image?: string;
    videos?: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{
                    height: "100%",
                    borderRadius: 2,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Project Image */}
                <Box
                    sx={{
                        width: "100%",
                        height: { xs: 140, sm: 160 },
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        backgroundColor: "#f5f5f5",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // Remove clickable cursor from image
                    }}
                >
                    {project.image ? (
                        <Box
                            component="img"
                            src={project.image}
                            alt={project.title}
                            sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                        />
                    ) : (
                        <Typography variant="subtitle2" color="text.secondary">
                            No Image
                        </Typography>
                    )}
                </Box>

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 2 }}>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                        {project.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            flexGrow: 1,
                        }}
                    >
                        {project.description}
                    </Typography>

                    {/* Tech Stack */}
                    <Stack direction="row" flexWrap="wrap" spacing={1} mt={2}>
                        {project.techStack.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{ fontWeight: 500 }}
                            />
                        ))}
                    </Stack>
                </CardContent>

                {/* Actions */}
                <CardActions sx={{ px: 2, pb: 2 }}>
                    {project.github && (
                        <Button
                            size="small"
                            href={project.github}
                            target="_blank"
                            startIcon={<FaGithub />}
                            sx={{ textTransform: "none" }}
                            aria-label={`${project.title} GitHub`}
                        >
                            GitHub
                        </Button>
                    )}
                    {project.link && (
                        <Button
                            size="small"
                            href={project.link}
                            target="_blank"
                            endIcon={<FaExternalLinkAlt />}
                            sx={{ textTransform: "none" }}
                            aria-label={`${project.title} Live Demo`}
                        >
                            View
                        </Button>
                    )}
                    {project.videos && (
                        <Button
                            size="small"
                            onClick={handleOpen}
                            startIcon={<FaPlay />}
                            sx={{ textTransform: "none" }}
                            aria-label={`${project.title} Demo`}
                        >
                            Demo
                        </Button>
                    )}
                </CardActions>
            </Card>

            {/* Modal Dialog for Videos */}
            {project.videos && (
                <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                    <DialogTitle>{project.title} Demo</DialogTitle>
                    <DialogContent dividers>
                        <Typography variant="body1" gutterBottom>
                            {project.description}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Tech Stack: {project.techStack.join(", ")}
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                            {project.videos.map((url, idx) => (
                                <Box key={idx} sx={{ position: "relative", paddingTop: "56.25%" }}>
                                    <iframe
                                        src={url}
                                        title={`${project.title} Video ${idx + 1}`}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            border: 0,
                                        }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </Box>
                            ))}
                        </Box>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default ProjectCard;
