import React from 'react'
import styled from 'styled-components'

// CSS
const SelectContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
`

const CalculatorUnitSelect = styled.select`
    width: 15%;
    height: 40px;
    display: -webkit-box;
    -webkit-box-pack: center;
    background-color: #da1622;
    color: #fcfbfc;
    border-radius: 4px;
    border: none;
    text-align: center;
    &:focus {
        outline: none;
    }
`

const CalculatorOption = styled.option`
    display: flex;
    justify-content: center;
`

function CalculatorSelect() {
    return (
        <SelectContainer>
            <CalculatorUnitSelect name="calcUnit" id="calcUnit">
                <CalculatorOption value="+">+</CalculatorOption>
                <CalculatorOption value="-">-</CalculatorOption>
                <CalculatorOption value="x">x</CalculatorOption>
                <CalculatorOption value="%">%</CalculatorOption>
            </CalculatorUnitSelect>
        </SelectContainer>
    )
}

export default CalculatorSelect