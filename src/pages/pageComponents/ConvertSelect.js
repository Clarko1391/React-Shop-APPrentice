import React from 'react'
import styled from 'styled-components'

// CSS
const SelectContainer = styled.div`
    width: 80%;
`

const ConvertUnitSelect = styled.select`
    width: 100%;
    height: 40px;
    display: -webkit-box;
    -webkit-box-pack: center;
    background-color: #da1622;
    color: #fcfbfc;
    border-radius: 4px;
    border: none;
    &:focus {
        outline: none;
    }
`

function ConvertSelect() {
    return (
        <SelectContainer>
            <ConvertUnitSelect name="convertUnit" id="convertUnit">
                <option value="MMToInches">mm to Inches</option>
                <option value="inchesToMM">Inches to mm</option>
            </ConvertUnitSelect>
        </SelectContainer>
    )
}

export default ConvertSelect
