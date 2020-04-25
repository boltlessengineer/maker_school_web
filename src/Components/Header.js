import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled('header')`
    height: 10vh;
    padding: 0 15vw;
    width: 100%;
    display: flex;
    background-color: white;
    align-items: center;
`;
const List = styled('ul')`
    display: flex;
    list-style: none;
    position: absolute;
    right: 15vw;
    width: auto;
    align-items: center;
    height: 10vh;
`;
const Item = styled('li')`
    color: black;
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
    margin-left: 3vw;
`;
const SLink = styled(Link)`
    color: black;
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
    padding: 25px;
    cursor: pointer;
`;

const Logo = styled(Link)`
    font-size: 20px;
    font-weight: 600;
    padding: 25px 25px 25px 0;
    cursor: pointer;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <Logo to="/">MAKER</Logo>
        <List>
            <Item selected={pathname === '/about'}>
                <SLink to="/about">About</SLink>
            </Item>
            <Item selected={pathname.startsWith('/contact')}>
                <SLink to="/contact">Contact</SLink>
            </Item>
            <Item selected={pathname.startsWith('/projects')}>
                <SLink to="/projects">Projects</SLink>
            </Item>
        </List>
    </Header>
));
