import { Card, CardContent, Typography, Box } from "@mui/material";

export interface Education {
    degree: string;
    institution: string;
    period: string;
    logo?: string;
}

interface EducationCardProps {
    education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
    if (!education) return null; // Safety check

    return (
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
            {/* Logo / Image */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: 100, sm: 120 },
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    overflow: "hidden",
                }}
            >
                {education.logo ? (
                    <Box
                        component="img"
                        src={education.logo}
                        alt={education.institution}
                        sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                ) : (
                    <Typography variant="subtitle2" color="text.secondary">
                        No Logo
                    </Typography>
                )}
            </Box>

            {/* Content */}
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    {education.degree}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {education.institution} | {education.period}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EducationCard;
