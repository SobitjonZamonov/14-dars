import { Container, Typography } from "@mui/material";
import React from "react";
import carpet from "../assets/Ковер.png"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";


export const Card = () => {
    return (
        <Container sx={{ width: 290, height: 524, borderRadius: 2, boxShadow: 3, position: "relative", mt: 2 }}>
            <Container maxWidth="lg" sx={{
                display: "flex",
                width: "280px",
                marginLeft: "-50px",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography sx={{ backgroundColor: "#618C78", color: "#fff", padding: "0 20px", marginTop: "20px", marginBottom: "20px" }}>Новинка</Typography>
                <FavoriteBorderIcon sx={{ color: "gray", cursor: "pointer" }} />
            </Container>
            <Container>
                <img src={carpet} alt="" />
            </Container>
            <Container sx={{
                marginTop: "20px",
                marginLeft: "-20px"
            }}>
                <Typography sx={{
                    fontSize: "18px",
                    color: "#1d1d1d",
                    fontWeight: "400"
                }}>Aster Q893A LVIZON LVIZON</Typography>

                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    fontWeight: "400"
                }}>Размер: 60x100</Typography>

                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    fontWeight: "400"
                }}>Производитель: Казахстан</Typography>

                <Rating name="no-value" value={null} />
            </Container>

            <Container maxWidth={false} sx={{
                display: "flex",
                width: "300px",
                marginLeft: "-40px"
            }}>
                <Container sx={{
                    marginTop: "16px",
                    padding: "0",
                    margin: "0"
                }}>
                    <Typography sx={{
                        opacity: "0.5"
                    }}>Цена</Typography>
                    <Typography>160.000</Typography>
                </Container>

                <Container sx={{
                    marginTop: "16px",
                    padding: "0",
                    margin: "0"
                }}>
                    <Typography sx={{
                        fontSize: "12px",
                        opacity: "0.5"
                    }}>В рассрочку</Typography>
                    <Container sx={{
                        display: "flex",
                        marginLeft: "-40px"
                    }}>
                        <Typography sx={{
                            backgroundColor: "#618C78",
                            color: "#fff"
                        }}>13.333</Typography>
                        <Typography sx={{
                            opacity: "0.5"
                        }}>х12мес</Typography>
                    </Container>
                </Container>
                </Container>
        </Container>
    )
}

