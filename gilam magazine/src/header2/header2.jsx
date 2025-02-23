import { Container, Link } from "@mui/material";
import React from "react";

export const Header2 = () => {
    return (
        <Container maxWidth={false} sx={{
            display: "flex",
            gap: "96px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1440px",
            height: "78px",
            marginTop: "31px"
            }}>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Ковры'}
            </Link>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Коврики'}
            </Link>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Для ванной'}
            </Link>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Дорожки'}
            </Link>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Особенные ковры'}
            </Link>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Центр поддержки'}
            </Link>
            <Link sx={{color: "#1d1d1d"}} href="#" underline="none">
                {'Контакты'}
            </Link>
        </Container>
    )
}

