import { Card, CardContent, CardActions, Typography, Chip, Button, Box } from "@mui/material";

const ProjectCard = ({ project }: { project: Project }) => (
    <Card
        sx={{
            height: "100%",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
        }}
    >
        <CardContent>
            <Typography variant="h6" gutterBottom>{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">{project.description}</Typography>
            <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.techStack.map((tech) => <Chip key={tech} label={tech} size="small" />)}
            </Box>
        </CardContent>
        <CardActions>
            <Button size="small" href={project.link} target="_blank">View</Button>
        </CardActions>
    </Card>
);

export default ProjectCard;