import React, { useState } from 'react'
import styled from 'styled-components'

// CSS
const InputContainer = styled.div`
    width: 80%;
    height: 40px;
    position: relative;
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
const ClearInput = styled.button`
    position: absolute;
    background: transparent;
    color: #fcfbfc;
    font-size: 3vh;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 15%;
    border: none;
    cursor: pointer;
`

function CalculatorInput(props) {

    // State
    const [calcInputDisplay, setCalcInputDisplay] = useState('');

    //Functions
    const updateCalcInput = (e) => {
        props.updateValue(e.target.value);
        setCalcInputDisplay(e.target.value);
    }

    const resetCalcInput = () => {
        props.updateValue('');
        setCalcInputDisplay('');
    }

    return (
        <InputContainer>
            <UserInput 
                type="text" 
                placeholder='Enter your Measurement'
                value={calcInputDisplay}
                onChange={(e) => updateCalcInput(e)}
                />
            <ClearInput 
                onClick={() => resetCalcInput()}
                >
                X
            </ClearInput>
        </InputContainer>
    )
}

export default CalculatorInput
