import React from 'react'
import styled from 'styled-components'

// CSS
const CalculatorBtn = styled.button`
    background-color: #da1622;
    color: #fcfbfc;
    top: 0px;
    right: 0px;
    height: 30px;
    width: 40%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &&:hover {
        background-color: #6b2b2f;
    }
    &&:focus {
        outline: none;
    }
`

function CalculatorButton(props) {
    return (
        <CalculatorBtn
            onClick={() => props.calculate()}
        >
            Calculate
        </CalculatorBtn>
    )
}

export default CalculatorButton
