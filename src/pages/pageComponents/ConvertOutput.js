import React from 'react'
import styled from 'styled-components'

// CSS
const OutputBox = styled.div`
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

const OutputHeader = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 2vh;
    color: #fcfbfc;
`
const MeasurementContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const OutputMeasurement = styled.h3`
    padding: 0px;
    margin: 0px;
    font-size: 1.5vh;
    color: #fcfbfc;
`


function ConvertOutput(props) {
    return (
        <OutputBox>
            <OutputHeader>{props.header}</OutputHeader>
            <MeasurementContainer>
                <OutputMeasurement>{props.measDown}</OutputMeasurement>
                <OutputMeasurement>{props.measure}</OutputMeasurement>
                <OutputMeasurement>{props.measUp}</OutputMeasurement>
            </MeasurementContainer>
        </OutputBox>
    )
}

export default ConvertOutput
