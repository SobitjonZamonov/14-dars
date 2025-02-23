import React from "react";
import { Container, Typography, CardMedia, CardContent, Box, Button, IconButton } from "@mui/material";
import { Icon6 } from "../assets/Icon6";
import { Card } from "../components/card";

export const Service2 = () => {
    return (
        <Container maxWidth={false} sx={{
            width: "1440px",
            height: "605px",
            marginTop: "100px"
        }}>
            <Container maxWidth={false} sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "32px",
                margin: "0",
                width: "1440px"
            }}>
                <Container sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "32px",
                    margin: "0"
                }}>
                    <Typography sx={{ color: "#1d1d1d" }} variant="h3">Скидки</Typography>
                    <Typography sx={{ textDecoration: "underline", color: "#648e7a", cursor: "pointer" }} variant="body1">
                        Все новинки
                    </Typography>
                </Container>
                <IconButton>
                    <Icon6 />
                </IconButton>
            </Container>

            <Container sx={{
                display: "flex",
                gap: "40px",
                justifyContent: "space-between",
                marginLeft: "20px"
            }}>
                <Card />
                <Card />
                <Card />
                <Card />

            </Container>

        </Container>
    );
}
