import { Container, Typography, TextField } from "@mui/material";
import React from "react";
import { Icon7 } from "../assets/icon7";
import { Icon8 } from "../assets/icon8";
import { Icon9 } from "../assets/icon9";
import { Icon10 } from "../assets/icon10";
import { Icon11 } from "../assets/icon11";
import { Icon12 } from "../assets/icon12";

export const Footer = () => {
    return (
        <Container maxWidth={false} sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1440px",
            height: "281px",
            backgroundColor: "#F2F2F2",
            gap: "64px",
            marginTop: "100px"
        }}>
            <Container>
                <Typography variant="h5">Каталог товаров</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Ковры</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Коврики</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Дорожки</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Для ванной</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Особенные ковры</Typography>
            </Container>

            <Container>
                <Typography variant="h5">Личный кабинет</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Личный кабинет</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Мои заказы</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Избранное</Typography>
            </Container>

            <Container>
                <Typography variant="h5">Центр поддержки</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Контакты</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Доставка</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Возвраты</Typography>
            </Container>

            <Container>
                <Typography variant="h5">Помощь и контакты</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}><Icon7 /> +7 775 657 66 76</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}><Icon8 />info@kilem.kz</Typography>
                <Container sx={{
                    display: "flex",
                    gap: "20px",
                    marginLeft: "-20px",
                    marginTop: "16px",
                    opacity: "0.5",
                }}>
                    <Icon9 />
                    <Icon10 />
                    <Icon11 />
                </Container>
            </Container>

            <Container>
                <Typography variant="h5">Личный кабинет</Typography>
                <Typography sx={{
                    fontSize: "14px",
                    color: "#1d1d1d",
                    opacity: "0.5",
                    marginTop: "16px"
                }}>Подпишитесь, чтобы всегда
                    быть в курсе наших новый акций</Typography>
                <TextField sx={{
                    width: "265px",
                    height: "50px",
                    marginTop: "16px"
                }} label="Поиск по товарам" variant="outlined" />
            </Container>

        </Container>
    )
}

