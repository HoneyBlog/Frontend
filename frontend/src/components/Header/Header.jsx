import React from 'react'
import Avatar from '@mui/material/Avatar';
import { FixedHeaderContent, HeaderContainer, HeaderItemsContainer, NavItem, NavText, Line } from './Header.styled';
import Button from '../Button/Button';
import { purple } from '@mui/material/colors';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Header = () => {

    return (
        <FixedHeaderContent>
            <HeaderContainer>
                <HeaderItemsContainer>
                    <Avatar alt="Avater" src="" sx={{ bgcolor: purple[100], width: 120, height: 120 }} />
                </HeaderItemsContainer>
                <HeaderItemsContainer>
                    <NavItem>
                        <HomeOutlinedIcon sx={{ width: 45, height: 45 }} />
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem>
                        <SearchOutlinedIcon sx={{ width: 45, height: 45 }} />
                        <NavText>Search</NavText>
                    </NavItem>
                    <NavItem>
                        <AccountCircleOutlinedIcon sx={{ width: 45, height: 45 }} />
                        <NavText>Profile</NavText>
                    </NavItem>
                    <NavItem>
                        <SettingsOutlinedIcon sx={{ width: 45, height: 45 }} />
                        <NavText>Settings</NavText>
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
