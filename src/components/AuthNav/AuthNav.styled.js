import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
display: inline-block;
padding: 8px 14px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;
background-color: none;

&.active {
    color: white;
    background-color: pink;
}
`;