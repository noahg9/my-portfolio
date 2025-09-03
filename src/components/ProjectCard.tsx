import { Card, CardContent, CardActions, Typography, Chip, Button, Box, Stack } from "@mui/material";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github?: string;
    image?: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
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
        </CardActions>
    </Card>
);

export default ProjectCard;
