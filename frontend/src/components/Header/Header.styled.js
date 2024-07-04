import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";


export const FixedHeaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;    
`;


export const HeaderContainer = styled.header`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 98vh;
    width: 100%;
    position: relative;
    justify-content: center;
    gap: 5%;
`;

export const HeaderItemsContainer = styled.div`
    display: flex;
    flex-flow: column;
    gap: 30px;
`;

export const NavItem = styled(RouterLink)`
    display: flex;
    flex-flow: row;
    text-decoration: none;
    gap: 20px;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    padding: 10px 20px;
    border-radius: 50px;

    &:hover
    {
        background-color: #3e3e3e;
    }
`;

export const NavText = styled.span`
    color: #FFFFFF;
    font-size: 1.5rem;
    align-text: center; 
`;
export const SelectedNavText = styled.span`
    color: #FFFFFF;
    font-size: 1.5rem;
    align-text: center; 
    font-weight: 800;
`;

export const Line = styled.svg`
    opacity: 0.3;
    fill: #BB86FC;
    stroke: #BB86FC;
    display: flex;
    justify-self: flex-end;
    stroke-width: 5px;
    border-radius: 5px;
    position: relative;
    width: 5px;
    height: 100vh;
`;

export const IconStyle = styled.img`
    width: 35px;
    height: 35px;
`;