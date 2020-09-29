import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navBarContainer">
                <div className='logo'>LOGO HERE</div>
                <ul className="navLinks">
                    <Link 
                    className='navLink'
                    to='/MeasurementConverter'
                    >
                        <li className='navItem'>
                            Measurement Converter
                        </li>
                    </Link>
                    <Link 
                    className='navLink'
                    to='/FractionalCalculator'
                    >
                        <li className='navItem'>
                            Fractional Calculator
                        </li>
                    </Link>
                    <Link 
                    className='navLink'
                    to='/ReferenceManual'>
                        <li className='navItem'>
                            Reference Manual
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar
