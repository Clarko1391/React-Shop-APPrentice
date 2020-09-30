import React, {useState} from 'react'
import styled from 'styled-components'
import { fraction, number } from 'mathjs'
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
    // State
    const [userInput, setUserInput] = useState('');

    // Functions    
    let measurement;

    if (userInput.includes('/')) {
        measurement = fraction(userInput);
        measurement= number(measurement);
    } else {
        measurement = number(userInput);
    }

    console.log(measurement);


    return (
        <MeasurementContainer>
            <ConvertSelect />
            <ConvertInput 
                updateValue={(e) => {setUserInput(e)}}
            />
            <ConvertOutput />
            <ConvertOutput />
            <ConvertOutput />            
        </MeasurementContainer>
    )
}

export default MeasurementConverter
