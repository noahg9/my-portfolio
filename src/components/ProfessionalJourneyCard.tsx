import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { professionalJourney as professionalJourneyData } from "../data/data";
import dayjs from "dayjs";

interface ProfessionalJourneyProps {
    items?: typeof professionalJourneyData;
}

const ProfessionalJourneyCard: React.FC<ProfessionalJourneyProps> = ({ items = professionalJourneyData }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                width: "100%",
                maxWidth: 900,
                mx: "auto",
            }}
        >
            {items
                .sort((a, b) => {
                    const getStart = (p: string) =>
                        dayjs(p.split(" - ")[0], ["MMM YYYY", "YYYY"]);
                    return (
                        getStart(b.period).valueOf() -
                        getStart(a.period).valueOf()
                    );
                })
                .map((item, index) => (
                    <Card
                        key={index}
                        elevation={5}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "stretch",
                            minHeight: 170,
                            p: 2,
                        }}
                    >
                        {/* Logo / Image */}
                        {"logo" in item && (
                            <CardMedia
                                component="img"
                                image={item.logo}
                                alt={
                                    "company" in item
                                        ? item.company
                                        : item.institution
                                }
                                sx={{
                                    width: 130,
                                    height: 130,
                                    objectFit: "contain",
                                    p: 2,
                                    bgcolor: "white",
                                }}
                            />
                        )}

                        {/* Content */}
                        <CardContent sx={{ flex: 1, py: 2 }}>
                            <Typography variant="h5" fontWeight={700} gutterBottom>
                                {"role" in item ? item.role : item.degree}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                gutterBottom
                            >
                                {"company" in item
                                    ? item.company
                                    : item.institution}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 1 }}
                            >
                                {item.period}
                            </Typography>
                            {"description" in item && (
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {item.description}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                ))}
        </Box>
    );
};

export default ProfessionalJourneyCard;
