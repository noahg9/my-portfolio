import { Box, Chip, Typography, Stack } from "@mui/material";
import { FaJava, FaReact, FaAws, FaDatabase } from "react-icons/fa";

const skillGroups = [
    { category: "Languages", skills: ["Java", ".NET", "Python", "JavaScript", "TypeScript"], icon: <FaJava /> },
    { category: "Frameworks", skills: ["Spring", "React", "Angular"], icon: <FaReact /> },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "Neo4j"], icon: <FaDatabase /> },
    { category: "Cloud", skills: ["Azure", "AWS", "Google Cloud"], icon: <FaAws /> },
];

const Skills = () => (
    <Stack spacing={4}>
        {skillGroups.map((group) => (
            <Box key={group.category}>
                <Typography variant="h6" gutterBottom>{group.icon} {group.category}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {group.skills.map((skill) => <Chip key={skill} label={skill} color="primary" />)}
                </Box>
            </Box>
        ))}
    </Stack>
);

export default Skills;