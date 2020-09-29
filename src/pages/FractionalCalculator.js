import React from 'react'
import styled from 'styled-components'
import img from '../img/right.png'
import CalculatorInput from './pageComponents/CalculatorInput'
import CalculatorSelect from './pageComponents/CalculatorSelect'
import CalculatorOutput from './pageComponents/CalculatorOutput'


// CSS
const CalculatorContainer = styled.div`
    min-height: 85vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

function FractionalCalculator() {
    return (
        <CalculatorContainer>
            <CalculatorInput />
            <CalculatorSelect />
            <CalculatorInput />
            <CalculatorOutput />
        </CalculatorContainer>
    )
}

export default FractionalCalculator
