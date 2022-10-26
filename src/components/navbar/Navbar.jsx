import React from "react";
import { NavbarStyled, NavLinkStyled, Anchor } from "./style";
import meal from "../../assets/meal.svg";

const Navbar = () => {
    return (
        <NavbarStyled>
            <span>
                <NavLinkStyled primary to={"/"}>
                    <img src={meal} width="100px" alt="sitelogo" />
                    Home
                </NavLinkStyled>
            </span>
            <span>
                <NavLinkStyled to={"/about"}>About</NavLinkStyled>
                <Anchor
                    href="https://github.com/ulnasensei/react-recipe-app-styled-component"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Github
                </Anchor>
                <NavLinkStyled to={"/login"}>Logout</NavLinkStyled>
            </span>
        </NavbarStyled>
    );
};

export default Navbar;
