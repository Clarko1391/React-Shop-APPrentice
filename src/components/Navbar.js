import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
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
`

const NavLink = styled(Link)`
    text-decoration: none;
`

const NavItem = styled.li`
    text-decoration: none;
    color: #222;
    font-weight: bold;
    color: #fcfbfc;
    font-size: 2vh;
    &:hover {
        color: #da1622;
    }
`

// Function

function Navbar() {
    return (
        <>
            <NavBarContainer>
                <Logo>
                    LOGO HERE
                </Logo>
                <NavLinks>
                    <NavLink 
                        to='/MeasurementConverter'
                    >
                        <NavItem>
                            Measurement Converter
                        </NavItem>
                    </NavLink>
                    <NavLink 
                        to='/FractionalCalculator'
                    >
                        <NavItem>
                            Fractional Calculator
                        </NavItem>
                    </NavLink>
                    <NavLink 
                        to='/ReferenceManual'>
                        <NavItem>
                            Reference Manual
                        </NavItem>
                    </NavLink>
                </NavLinks>
            </NavBarContainer>
        </>
    )
}

export default Navbar
