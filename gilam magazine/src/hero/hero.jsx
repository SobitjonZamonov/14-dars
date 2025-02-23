import { Container, Typography, Button } from "@mui/material";
import React from "react";
import gilam1 from "../assets/image1.png"
import gilam2 from "../assets/image2.png"

export const Hero = () => {
    return (
        <Container maxWidth={false} sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "1440px",
            height: "592px",
            background: "#618C78",
            }}>
            <Container>
                <Typography sx={{
                    fontSize: "60px",
                    fontWeight: "700",
                    color: "#f9f9f9",
                    width: "524px",
                    height: "156px"
                    }}>
                        Новая коллекция ковров Venetta
                </Typography>
                <Button sx={{
                    bgcolor: "#cb4a4a",
                    color: "#fff",
                    border: "10px",
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "45px"
                }} variant="outline">Смотреть все</Button>
            </Container>
            <Container sx={{
                display: "flex",
                width: "772px",
                height: "503px"
            }}>
                <img src={gilam1} alt="" />
                <img src={gilam2} alt="" />
            </Container>
        </Container>
    )
}

