import React, { useState } from 'react'
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

const ButtonContainer = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ConvertButton = styled.button`
    height: 100%;
    width: 40%;
    background-Color: #da1622;
    color: #fcfbfc;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    &:hover {
        background-color: #6b2b2f;
    }
`

const ResetButton = styled.button`
    height: 100%;
    width: 40%;
    background-Color: #da1622;
    color: #fcfbfc;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    &:hover {
        background-color: #6b2b2f;
    }
`


function ConvertInput(props) {

    // State
    const [userInputValue, setUserInputValue] = useState('');
    
    // Functions
    const clearInput = () => {
        setUserInputValue('');
    }

    const updateUserInputValue = (e) => {
        props.updateValue(e.target.value);
        setUserInputValue(e.target.value);
    }

    return (
        <>
            <InputContainer>
                <UserInput 
                    type="text" 
                    placeholder='Enter your Measurement'
                    value={userInputValue}
                    onChange={e => updateUserInputValue(e)}
                />
            </InputContainer>
            <ButtonContainer>
                <ConvertButton
                    onClick={() => props.convertValue()}
                >
                    Convert
                </ConvertButton>
                <ResetButton
                    onClick={() => clearInput()}
                >
                    Clear
                </ResetButton>
            </ButtonContainer>
        </>   
    )
}

export default ConvertInput
