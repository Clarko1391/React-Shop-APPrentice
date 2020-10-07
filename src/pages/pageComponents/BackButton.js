import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// CSS  
const BackLink = styled(Link)`
    height: 5vh;
    width: 100%;
    background-color: #6b2b2f;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BackBtn = styled.button`
    height: 80%;
    margin: 0px;
    width: 80%;
    border-radius: 4px;
    background-color: #da1622;
    color: #fcfbfc;
    border: none;
    cursor: pointer;
    &&:focus {
        outline: none;
    }
`

function BackButton() {
    return (
        <BackLink 
            to='/ReferenceManual'
        >
            <BackBtn >
                Back to Reference Manuals
            </BackBtn>
        </BackLink>
    )
}

export default BackButton
