import React, {useState} from 'react'
import styled from 'styled-components'
import { fraction, number, floor, round } from 'mathjs'
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
    // State & Variables
    const [userInput, setUserInput] = useState("");
    const [convertUnitValue, setConvertUnitValue] = useState('MMtoInches');
    const [decMM, setDecMM] = useState("Measurement");
    const [decMMUp, setDecMMUp] = useState("1/16th Up");
    const [decMMDown, setDecMMDown] = useState("1/16th Down");
    const [decInch, setDecInch] = useState("Measurement");
    const [decInchUp, setDecInchUp] = useState("1/16th Up");
    const [decInchDown, setDecInchDown] = useState("1/16th Down");
    const [fracInch, setFracInch] = useState("Measurement");
    const [fracInchUp, setFracInchUp] = useState("1/16th Up");
    const [fracInchDown, setFracInchDown] = useState("1/16th Down");
    const outputHeaders = { decMM:"Decimal (mm)", decInch: "Decimal (inch)", fracInch: "Fractional (inch)"}

    // Functions    
    let measurement, oneUp, oneDown, answer, answerUp, answerDown;
    let fractionValidate = userInput.split("");

    const convert = () => {
        // Prep userInput for math operations
        if (fractionValidate.includes("/")) {
            measurement = fraction(userInput);
            measurement = number(measurement);
        } else {
            measurement = number(userInput);
        }

        // Use convertUnitValue to perform conversion
        switch (convertUnitValue) {
            case ("MMtoInches"):
                oneUp = (measurement + .0625);
                oneDown = (measurement - .0625);
                answer = measurement * .0393701;
                answerUp = oneUp * .0393701;
                answerDown = oneDown * .0393701;
                outputConversionMetric();
                break;
            case ("inchesToMM"):
                oneUp = (measurement + 0.0625);
                oneDown = (measurement -  0.0625);           
                answer = measurement / 0.0393701;
                answerUp = oneUp / 0.0393701;
                answerDown = oneDown / 0.0393701;
                outputConversionSAE();
                break;
            default:
                break;
        }
    }

    const outputConversionMetric = () => {
        setDecMM(measurement);
        setDecMMUp(+oneDown.toFixed(2));
        setDecMMDown(+oneDown.toFixed(2));
        setDecInch(+answer.toFixed(2));
        setDecInchUp(+answerUp.toFixed(2));
        setDecInchDown(+answerDown.toFixed(2));

        //fractions n stuff
        fracConvert(answer, setFracInch());
        fracConvert(answerUp, setFracInchUp());
        fracConvert(answerDown, setFracInchDown());
    }

    const outputConversionSAE = () => {
        setDecInch(measurement);
        setDecInchUp(+oneDown.toFixed(2));
        setDecInchDown(+oneDown.toFixed(2));
        setDecMM(+answer.toFixed(2));
        setDecMMUp(+answerUp.toFixed(2));
        setDecMMDown(+answerDown.toFixed(2));
        //fractions n stuff
        fracConvert(measurement, setFracInch());
        fracConvert(oneUp, setFracInchUp());
        fracConvert(oneDown, setFracInchDown());
    }

            //Display decimal remainders as fractions in 16ths of an inch as well as converting to the lowest common denominator of the fraction
        // Declare local variables to keep them from becoming globals, write parameters to new variables for better readability
    const fracConvert = (value, setState) => {
        let decimalNum = value;
        let decValue = decimalNum - floor(decimalNum);
        let wholeNum = floor(decimalNum);
        let fracNum = round(decValue * 16);

        if (fracNum === 16) {
            fracNum = ``;
        } else if (fracNum > 0 && fracNum % 8 === 0) {
            fracNum = `1/2`;
        } else if (fracNum > 0 && fracNum % 4 === 0) {
            fracNum = `${fracNum / 4}/4`;
        } else if (fracNum > 0 && fracNum % 2 === 0) {
            fracNum = `${fracNum / 2}/8`;
        } else {
            fracNum = `${fracNum}/16`;
        }

        if (wholeNum > 0) {
            setState(`${wholeNum} ${fracNum}`);
        } else { 
            setState(`${fracNum}`);
        }

    }

    return (
        <MeasurementContainer>
            <ConvertSelect
                updateUnit={(e) => {setConvertUnitValue(e)}}
            />
            <ConvertInput 
                updateValue={(e) => {setUserInput(e)}}
                convertValue={() => {convert()}}
            />
            <ConvertOutput 
                header={outputHeaders.decMM}
                measDown={decMMDown}
                measUp={decMMUp}
                measure={decMM}
            />
            <ConvertOutput 
                header={outputHeaders.decInch}
                measDown={decInchDown}
                measUp={decInchUp}
                measure={decInch}
            />
            <ConvertOutput 
                header={outputHeaders.fracInch}
                measDown={fracInchDown}
                measUp={fracInchUp}
                measure={fracInch}
            />             
        </MeasurementContainer>
    )
}

export default MeasurementConverter
