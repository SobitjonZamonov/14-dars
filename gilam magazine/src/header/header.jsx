import React from "react";
import logo from "../assets/Logo.svg"
import { Button, Container, TextField, Checkbox, IconButton, Icon } from "@mui/material";
import { Icon1 } from "../assets/icon1";
import { Icon2 } from "../assets/icon2";
import { Icon3 } from "../assets/icon3";
import { Icon4 } from "../assets/icon4";
import { Icon5 } from "../assets/Icon5";


export const Header = () => {
    return (
        <Container maxWidth={false} sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "1440px",
            height: "50px",
            marginTop: "31px"
        }}>
            <img src={logo} alt="" />
            <Button sx={{ color: "#1d1d1d"}} startIcon={<Icon1 />} >Алматы</Button>
            <TextField sx={{
                width: "602px",
                height: "35px"
            }} label="Поиск по товарам" variant="outlined" />
            <IconButton sx={{
                marginLeft: "-110px"
            }}>
                <Icon2 />
            </IconButton>

            <IconButton>
                <Icon3 />
            </IconButton>

            <IconButton>
                <Icon4 />
            </IconButton>

            <IconButton>
                <Icon5 />
            </IconButton>
        </Container>
        
    )
}