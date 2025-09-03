import { Card, CardContent, Typography, Box } from "@mui/material";

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    logo?: string;
}

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    if (!experience) return null; // Safety check

    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
            }}
        >
            {experience.logo && (
                <Box
                    component="img"
                    src={experience.logo}
                    alt={experience.company}
                    sx={{
                        width: "100%",
                        height: 120,
                        objectFit: "contain",
                        p: 1,
                        backgroundColor: "#f5f5f5",
                    }}
                />
            )}
            <CardContent>
                <Typography variant="h6" fontWeight={600}>
                    {experience.role}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" mb={1}>
                    {experience.company} | {experience.period}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {experience.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;
