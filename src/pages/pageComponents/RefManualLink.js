import React from 'react'
import styled from 'styled-components'

// CSS
const ManualBox = styled.div`
    width: 80%;
    height: 15vh;
    max-height: 120px;
    background-color: rgba(78,77,78, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
`

const ManualHeader = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 2vh;
    color: #fcfbfc;
`

const ManualDescription = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 1.5vh;
    color: #fcfbfc;
`

function RefManualLink() {
    return (
        <ManualBox>
            <ManualHeader>
                refHead
            </ManualHeader>
            <ManualDescription>
                refDesc
            </ManualDescription>
        </ManualBox>
    )
}

export default RefManualLink
