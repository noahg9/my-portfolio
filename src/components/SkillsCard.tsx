import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

export interface Skill {
    name: string;
    icon: React.ElementType;
}

export interface SkillGroup {
    category: string;
    skills: Skill[];
}

interface SkillsCardProps {
    group: SkillGroup;
}

const SkillsCard = ({ group }: SkillsCardProps) => {
    if (!group) return null;

    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 2,
                boxShadow: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                display: "flex",
                flexDirection: "column",
                p: 1,
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                {/* Category as bold header */}
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        display: "inline-block",
                        pb: 0.5,
                        mb: 2,
                    }}
                >
                    {group.category}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {group.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <Chip
                                key={skill.name}
                                icon={<Icon />}
                                label={skill.name}
                                variant="outlined"
                                color="primary"
                                size="medium"
                                aria-label={skill.name}
                                sx={{ fontWeight: 500 }}
                            />
                        );
                    })}
                </Box>
            </CardContent>
        </Card>
    );
};

export default SkillsCard;
