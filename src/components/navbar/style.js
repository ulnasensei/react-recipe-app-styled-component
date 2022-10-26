import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarStyled = styled.nav`
    background-color: #0063c7;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem;
    display: ${({ primary }) => primary && "flex"};
    justify-content: ${({ primary }) => primary && "space-evenly"};
    align-items: ${({ primary }) => primary && "center"};
`;
const Anchor = styled.a`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem;
`;

export { NavbarStyled, NavLinkStyled, Anchor };
