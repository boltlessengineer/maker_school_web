import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { find } from 'styled-components/test-utils';

const HeaderContainer = styled('header')`
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 15vw;
    width: 100%;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        padding: 0 5vw;
    }
`;

const Logo = styled(Link)`
    font-size: 20px;
    font-weight: 600;
    padding: 25px 25px 25px 0;
    cursor: pointer;
`;

const Item = styled('li')`
    color: black;
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
    margin-left: 3vw;
`;

const List = styled('ul')`
    display: flex;
    list-style: none;
    float: right;
    width: auto;
    align-items: center;
    height: 10vh;
    @media screen and (max-width: 800px) {
        ${Item} {
            opacity: 0;
        }
        position: absolute;
        right: 0px;
        height: 90vh;
        top: 10vh;
        background-color: white;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
        justify-content: space-around;
        ${(props) => {
            if (props.toggle) {
                return css`
                    ${Item}:nth-child(1) {
                        animation: ${navLinkFade} 0.5s ease forwards ${0 / 7 + 0.3}s;
                    }
                    ${Item}:nth-child(2) {
                        animation: ${navLinkFade} 0.5s ease forwards ${1 / 7 + 0.3}s;
                    }
                    ${Item}:nth-child(3) {
                        animation: ${navLinkFade} 0.5s ease forwards ${2 / 7 + 0.3}s;
                    }
                    transform: translateX(0%);
                `;
            } else {
                return `
                transform: translateX(100%);
                `;
            }
        }}
    }
`;

const SLink = styled(Link)`
    color: black;
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
    padding: 25px;
    cursor: pointer;
`;

const Burger = styled('button')`
    border: 0;
    background-color: transparent;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        display: block;
        ${(props) => {
            if (props.toggle) {
                return `
                ${BurgerLine}:nth-child(1){
                    transform: rotate(-45deg) translate(-5px, 6px);
                }
                ${BurgerLine}:nth-child(2){
                    opacity: 0;
                }
                ${BurgerLine}:nth-child(3){
                    transform: rotate(45deg) translate(-5px, -6px);
                }
                `;
            }
        }}
    }
`;

const BurgerLine = styled('div')`
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px;
    transition: all 0.3s ease;
`;

const navLinkFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

//export default withRouter(({ location: { pathname } }) => (
function Header({ location: { pathname } }) {
    const [BurgerToggle, setBurger] = useState(false);
    function handleBurger() {
        console.log('burger!!', find(document.body, Burger));
        if (BurgerToggle) {
            setBurger(false);
        } else {
            setBurger(true);
        }
    }
    return (
        <HeaderContainer>
            <Logo to="/">MAKER</Logo>
            <List toggle={BurgerToggle}>
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
            <Burger onClick={handleBurger} toggle={BurgerToggle}>
                <BurgerLine />
                <BurgerLine />
                <BurgerLine />
            </Burger>
        </HeaderContainer>
    );
}
export default withRouter(Header);
