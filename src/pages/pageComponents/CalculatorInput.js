import React from 'react'
import styled from 'styled-components'

// CSS
const InputContainer = styled.div`
    width: 80%;
    height: 40px;
`

const UserInput = styled.input`
    height: 100%;
    width: 100%;
    background-color: #DA1622;
    color: #fcfbfc;
    text-align: center;
    border: none;
    border-radius: 4px;
    padding: 0px;
    margin: 0px;
    &::placeholder {
        color: #c4d0dc;
    }
    &:focus {
        outline: 0px;
    }
`

function CalculatorInput() {
    return (
        <InputContainer>
            <UserInput type="text" placeholder='Enter your Measurement'/>
        </InputContainer>
    )
}

export default CalculatorInput
