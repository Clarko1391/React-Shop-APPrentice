import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import img from '../img/shopAPPrenticeLogo.png';

// CSS
const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    color: #fcfbfc;
`

const Logo = styled.div`
    width: 30%;
    height: 80%;
`

const LogoIMG = styled.div`
    background: url(${img}) center no-repeat;
    background-size: contain;
    height: 100%;
`
const NavLinks = styled.ul`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    text-decoration: none;
    list-style: none;
    padding: 0;
    box-sizing: border-box;
    padding-right: 10px;
    margin: 0px;
`

const NavLink = styled(Link)`
    text-decoration: none;
`

const NavItem = styled.li`
    text-decoration: none;
    color: ${props => props.highlighted ? '#da1622' : '#fcfbfc'};
    font-weight: bold;
    font-size: 2vh;
    &:hover {
        color: #da1622;
    }
`

function Navbar() {

// Variables
const page = useLocation();

    return (
        <>
            <NavBarContainer>
                <Logo>
                    <LogoIMG />
                </Logo>
                <NavLinks>
                    <NavLink 
                        to='/MeasurementConverter'
                    >
                        <NavItem 
                            highlighted = {page.pathname === '/MeasurementConverter'}
                            >
                            Measurement Converter
                        </NavItem>
                    </NavLink>
                    <NavLink 
                        to='/FractionalCalculator'
                    >
                        <NavItem 
                            highlighted = {page.pathname === '/FractionalCalculator'}
                            >
                            Fractional Calculator
                        </NavItem>
                    </NavLink>
                    <NavLink 
                        to='/ReferenceManual'>
                        <NavItem 
                            highlighted = {page.pathname === '/ReferenceManual'}
                            >
                            Reference Manual
                        </NavItem>
                    </NavLink>
                </NavLinks>
            </NavBarContainer>
        </>
    )
}

export default Navbar
