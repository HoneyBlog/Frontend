import React from 'react'
import Avatar from '@mui/material/Avatar';
import { FixedHeaderContent, HeaderContainer, HeaderItemsContainer, NavItem, NavText, SelectedNavText, Line, IconStyle } from './Header.styled';
import Button from '../Button/Button';
const homeIcon = '../../assets/home.png';
const seachIcon = '../../assets/search.png';
const profileIcon = '../../assets/user.png';
const logoutIcon = '../../assets/logout.png';

const Header = () => {

    return (
        <FixedHeaderContent>
            <HeaderContainer>
                <HeaderItemsContainer>
                    <Avatar alt="Avater" src="" sx={{ width: 120, height: 120 }} />
                </HeaderItemsContainer>
                <HeaderItemsContainer>
                    <NavItem to="/">
                        <IconStyle src={homeIcon} alt="Home" />
                        <SelectedNavText>Home</SelectedNavText>
                    </NavItem>
                    <NavItem>
                        <IconStyle src={seachIcon} alt="Search" />
                        <NavText>Search</NavText>
                    </NavItem>
                    <NavItem>
                        <IconStyle src={profileIcon} alt="Prpfile" />
                        <NavText>Profile</NavText>
                    </NavItem>
                    <NavItem to="/login">
                        <IconStyle src={logoutIcon} alt="Logout" />
                        <NavText>Logout</NavText>
                    </NavItem>
                </HeaderItemsContainer>
                <Button text="Post"></Button>
            </HeaderContainer>
            <Line>
                <line x1="0" y1="0" x2="0" y2="100%" />
            </Line>
        </FixedHeaderContent>
    )
}

export default Header;
