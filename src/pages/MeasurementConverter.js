import React from 'react'
import './MeasurementConverter.css'

function MeasurementConverter() {
    return (
        <div className='measurementConverter'>
            <div className="inputContainer">
                <input type="text" className="convertInput"/>
                <button className="convertBtn">Change it up</button>
            </div>
            <div className="outputContainer">
                <div className="outputBox">
                    <h2 className="outputHeader">Decimal (mm)</h2>
                    <div className="measurementContainer">
                        <h3 className="decMMDown">One Down</h3>
                        <h3 className='decMM'>Measurement</h3>
                        <h3 className='decMMUp'>One Up</h3>
                    </div>
                </div>
                <div className="outputBox">
                    <h2 className="outputHeader">Decimal (inches)</h2>
                    <div className="measurementContainer">
                        <h3 className="decMMDown">One Down</h3>
                        <h3 className='decMM'>Measurement</h3>
                        <h3 className='decMMUp'>One Up</h3>
                    </div>
                </div>
                <div className="outputBox">
                    <h2 className="outputHeader">Fractional (inches)</h2>
                    <div className="measurementContainer">
                        <h3 className="decMMDown">One Down</h3>
                        <h3 className='decMM'>Measurement</h3>
                        <h3 className='decMMUp'>One Up</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeasurementConverter
