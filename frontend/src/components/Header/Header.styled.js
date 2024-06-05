import styled from "styled-components";


export const FixedHeaderContent = styled.div`
    position: fixed;
    grid-area: header;
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

export const NavItem = styled.div`
    display: flex;
    flex-flow: row;
    width: 80%;
    gap: 20px;
    align-items: center;
`;

export const NavText = styled.span`
    color: #FFFFFF;
    font-size: 1.5rem;
    align-text: center; 
`;

export const Line = styled.svg`
    opacity: 0.3;
    fill: #DDD6FF;
    stroke: #DDD6FF;
    display: flex;
    justify-self: flex-end;
    stroke-width: 5px;
    border-radius: 5px;
    position: relative;
    width: 5px;
    height: 100vh;
`;