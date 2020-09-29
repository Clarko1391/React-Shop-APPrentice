import React from 'react'
import styled from 'styled-components'
import img from '../img/left.png'
import ConvertInput from './pageComponents/ConvertInput'
import ConvertOutput from './pageComponents/ConvertOutput'
import ConvertSelect from './pageComponents/ConvertSelect'

// CSS
const MeasurementContainer = styled.div`
    min-height: 85vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`



function MeasurementConverter() {
    return (
        <MeasurementContainer>
            <ConvertSelect />
            <ConvertInput />
            <ConvertOutput />
            <ConvertOutput />
            <ConvertOutput />            
        </MeasurementContainer>
    )
}

export default MeasurementConverter
